<template>
  <div class="merchantIndex">
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
        <div class="tabbar2" style="padding: 10px 10px 5px 10px;">
          <ul>
            <li>
              <div>
                <h2>兑换券</h2>
                <p>兑换详情</p>
                <p>有效期至：<span>2018-08-20</span></p>
              </div>
              <span>兑换</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { merchantQueryAll } from "src/api/merchant/index";
  export default {
    name: "merchantIndex",
    data(){
      return {
        merchantData: {}
      }
    },
    mounted(){
      this.merchantQueryAllPost();
    },
    methods: {
      merchantQueryAllPost(){
        let params = {
          pageSize: 10,
          pageNum: 1,
          communityId: sessionStorage.getItem("communityId"),
          classify: this.$route.query.uuid
        }
        merchantQueryAll(params).then(data => {
          if (data.data.code == 200) {
            this.merchantData = data.data.data.list
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
