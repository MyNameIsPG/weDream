<template>
  <div class="merchantIndex">
    <div class="iconList" style="background: #fff; padding-bottom: 10px;">
      <ul>
        <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.uuid)">
          <img v-if="item.pic" :src="item.pic" alt="">
          <img v-else src="" style="border: 1px solid #ccc;" alt="">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="merchantIndexList">
      <div v-for="(item,index) in merchantData" :key="index">
        <div class="merchantIndexListBox">
          <img v-if="item.pic" :src="item.pic" />
          <img v-else src="../../assets/img/no.png" />
          <div class="merchantIndexListBoxText">
            <h2 v-if="item.label"><span v-for="(items,indexs) in item.label.split(',')">{{items}}</span>{{item.name}}</h2>
            <h2 v-else>{{item.name}}</h2>
            <div><img src="../../assets/img/shangjia/map.png" alt="">{{item.address}}</div>
            <a :href="'tel:'+item.phone"><img class="phone" src="../../assets/img/shangjia/phone.png" alt=""></a>
          </div>
        </div>
        <!--<div class="tabbar2" style="padding: 10px 10px 5px 10px;">
          <ul>
            <li>
              <div>
                <h2>兑换券</h2>
                <p>兑换详情</p>
                <p>有效期至：<span>2018-08-20</span></p>
              </div>
              <span @click="addThis()">领取</span>
            </li>
          </ul>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import { classificationQueryAll } from "src/api/classification/index";
import { merchantQueryAll } from "src/api/merchant/index";
import { Toast } from 'mint-ui';
export default {
  name: "merchantIndex",
  data(){
    return {
      dataList: {},
      merchantData: {}
    }
  },
  mounted(){
    this.circleQuery();
    this.merchantQueryAllPost();
  },
  methods: {
    //分页查询圈子
    circleQuery(){
      let params = {
        type: 6,
      }
      classificationQueryAll(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data.list
        }
      })
    },
    merchantQueryAllPost(){
      let params = {
        pageSize: 10,
        pageNum: 1,
        communityId: sessionStorage.getItem("communityId"),
        flag: 1
      }
      merchantQueryAll(params).then(data => {
        if (data.data.code == 200) {
          this.merchantData = data.data.data.list
        }
      })
    },
    pageView(obj){
      this.$router.push({path: '/merchantIndexDetails', query: { uuid: obj } })
    },
    addThis(){
      this.$messagebox({
        title: '温馨提示',
        message: '是否领取该优惠券？',
        showCancelButton: true,
        confirmButtonText:"是",
        cancelButtonText:"否"
      }).then(action => {
        if(action == 'confirm'){
          let instance = Toast('领取成功。');
          setTimeout(() => {
            instance.close();
          }, 2000);
        }else{
          console.log('否')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
