<template>
  <div class="circleIndexAdd">

    <mt-field type="textarea" rows="4" v-model="from.content" placeholder="请输入您的建议投诉"></mt-field>
    <div class="title">上传图片</div>
    <div>
      <div style="background: #ffffff; padding: 10px 15px;">
        <upload ref="upload" :upload=upload2></upload>
      </div>
    </div>
    <!--<div style="margin-top: 15px" v-if="$route.query.type==1">
      <mt-cell title="所属圈子" is-link @click.native="handleClick">
        <span>{{from.circleName}}</span>
      </mt-cell>
    </div>-->
    <!--<div class="formTextRight">
      <mt-field placeholder="输入您的姓名" label="姓名" v-model="from.createName"></mt-field>
      <mt-field placeholder="请输入您的手机号码" label="手机号码" v-model="from.phone"></mt-field>
    </div>-->
    <div class="addBtn">
      <a href="javascript: void(0);" @click="add()">提交</a>
    </div>
    <!--<mt-popup v-model="popupVisible" position="bottom">
      <div class="soltDataList">
        <ul>
          <li v-for="(item,index) in dataList" :key="index" @click="optionPopup(item.uuid, item.name)">{{item.name}}</li>
        </ul>
      </div>
      <div class="soltDataListBtn">
        <div @click="handleClickColse()">取消</div>
      </div>
    </mt-popup>-->
  </div>
</template>

<script>
  import upload from 'src/components/common/upload'
  import { complaintAdd } from "src/api/complaint/index";
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
          createName: '',
          content: '',
          files: '',
          phone: '',
        },
        dataList: [],
      }
    },
    mounted(){
      this.from.circleId = this.$route.query.uuid
    },
    methods: {
      add(){
        if(this.from.content==''){
          Toast({
            message: '请输入您的建议投诉',
            position: 'bottom',
          });
          return false
        }else {
          let params = {
            content: this.from.content,
            files: JSON.stringify(this.$refs.upload.dataListdouble),
            createId: sessionStorage.getItem("createId"),
            communityId: sessionStorage.getItem("communityId"),
          }
          let that = this
          debugger
          complaintAdd(params).then(data => {
            if (data.data.code == 200) {
              let instance = Toast('上传成功，请等待返回');
              setTimeout(() => {
                instance.close();
                that.$router.go(-1)
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
