<template>
  <div class="circleIndexAdd">
    <div class="title">请填写相关资料进行身份认证</div>
    <mt-field label="姓名" placeholder="请输入帖子标题" v-model="from.title"></mt-field>
    <mt-field label="姓名" placeholder="请输入帖子标题" v-model="from.title"></mt-field>
    <mt-cell title="性别">
      <span @click="actionSex">{{from.sex}}</span>
    </mt-cell>



    <mt-field type="textarea" rows="4" v-model="from.content" placeholder="请输入帖子内容"></mt-field>


    <div class="addBtn">
      <a href="javascript: void(0);" @click="add()">提交</a>
    </div>


    <mt-actionsheet
      :actions="sexData"
      v-model="sheetVisible">
    </mt-actionsheet>

  </div>
</template>

<script>
export default {
  name: "userRealName",
  data(){
    return {
      sheetVisible: false,//性别
      sexData: [{
        name: '拍照',
        method : this.getCamera	// 调用methods中的函数
      }, {
        name: '从相册中选择',
        method : this.getLibrary	// 调用methods中的函数
      }],
      from: {
        title: '',
        content: '',
        picture: '',
        sex: '',
        circleName: '选择圈子'
      },
      dataList: [],
    }
  },
  methods: {
    //打开性别弹窗
    actionSex(){
      this.sheetVisible = true;
    }
  }
}
</script>

<style scoped>

</style>
