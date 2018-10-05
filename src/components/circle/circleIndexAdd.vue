<template>
	<div class="circleIndexAdd">
    <mt-field placeholder="请输入帖子标题" v-model="from.title"></mt-field>
    <mt-field type="textarea" rows="4" v-model="from.content" placeholder="请输入帖子内容"></mt-field>
    <div class="title">上传图片</div>
    <div>
      <div style="background: #ffffff; padding: 10px 15px;">
        <upload ref="upload" :upload=upload2></upload>
      </div>
    </div>
    <div style="margin-top: 15px" v-if="$route.query.type==1">
      <mt-cell title="所属圈子" is-link @click.native="handleClick">
        <span>{{from.circleName}}</span>
      </mt-cell>
    </div>
    <div class="addBtn">
      <a href="javascript: void(0);" @click="add()">提交</a>
    </div>
    <mt-popup v-model="popupVisible" position="bottom">
      <div class="soltDataList">
        <ul>
          <li v-for="(item,index) in dataList" :key="index" @click="optionPopup(item.uuid, item.name)">{{item.name}}</li>
        </ul>
      </div>
      <div class="soltDataListBtn">
        <div @click="handleClickColse()">取消</div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import upload from 'src/components/common/upload'
import { circleQuery } from "src/api/circle/index";
import { postAdd } from "src/api/circle/index";
import { Toast } from 'mint-ui';
export default {
  name: "circleIndexAdd",
  components: {
    upload
  },
  data(){
    return {
      upload2: {"id": "test2", "multiple": "multiple", "leng": "9"},
      popupVisible:false,
      from: {
        title: '',
        content: '',
        picture: '',
        circleId: '',
        circleName: '选择圈子'
      },
      dataList: [],
    }
  },
  mounted(){
    this.circleQuery();
    this.from.circleId = this.$route.query.uuid
  },
  methods: {
    //分页查询圈子
    circleQuery(){
      let params = {
        pageNum: 1,
        pageSize: 7,
        communityId: sessionStorage.getItem("communityId"),
      }
      circleQuery(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data.list
        }
      })
    },
    add(){
      if(this.from.title==''){
        Toast({
          message: '请输入帖子标题',
          position: 'bottom',
        });
        return false
      }else if(this.from.circleId==''){
        Toast({
          message: '请选择圈子',
          position: 'bottom',
        });
        return false
      }else {
        let circleUuid = ''
        if(this.$route.query.type==1){
          circleUuid = this.from.circleId
        }else if(this.$route.query.type==2){
          circleUuid = this.$route.query.uuid
        }
        let params = {
          title: this.from.title,
          content: this.from.content,
          picture: JSON.stringify(this.$refs.upload.dataListdouble),
          circleId: circleUuid,
          status: 1
        }
        let that = this
        postAdd(params).then(data => {
          if (data.data.code == 200) {
            let instance = Toast('上传成功，请等待返回');
            setTimeout(() => {
              instance.close();
              if(that.$route.query.type==1){
                that.$router.push({ path:'/circleIndex'})
              }else if(that.$route.query.type==2){
                that.$router.go(-1)
              }
            }, 1000);
          }
        })
      }
    },
    optionPopup(uuid, name){
      this.popupVisible = false
      this.from.circleId = uuid
      this.from.circleName = name
    },
    handleClick(){
      this.popupVisible = true
    },
    handleClickColse(){
      this.popupVisible = false
    }
  }
}
</script>

<style lang="stylus">
.mint-popup-bottom {
  width: 100%
  height 200px
}
</style>
