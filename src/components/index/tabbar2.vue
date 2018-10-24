<template>
	<div class="tabbar2">
    <ul>
      <li v-for="(item,index) in dataList" :key="index">
        <div>
          <h2>兑换券</h2>
          <p>兑换详情</p>
          <p>有效期至：<span>2018-08-20</span></p>
        </div>
        <span @click="addThis()">兑换</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
	export default {
		name: "tabbar2",
    data(){
		  return {
        dataList: [1,2,3,4,5,6,7,8,9]
      }
    },
    methods: {
      addThis(){
        this.$messagebox({
          title: '温馨提示',
          message: '是否兑换该优惠券？',
          showCancelButton: true,
          confirmButtonText:"是",
          cancelButtonText:"否"
        }).then(action => {
          if(action == 'confirm'){
            let instance = Toast('兑换成功。');
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

<style>

</style>
