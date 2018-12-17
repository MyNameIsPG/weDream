<template>
  <div class="postList">
    <div class="box" v-for="(item,index) in dataList" :key="index">
      <div class="box-head" @click="pageView(item.uuid)">
        <span class="time">{{friendlyTimeFormat(item.createTime)}}</span>
        <img v-if="item.headPic" class="userImg" :src="item.headPic" alt="">
        <img v-else class="userImg" src="../../assets/img/userImg.png" alt="">
        <span class="userName">{{item.createName}}</span>
      </div>
      <div class="box-body" @click="pageView(item.uuid)" v-if="item.picture!=''">
        <div class="box-body-img" v-if="JSON.parse(item.picture).length==1&&JSON.parse(item.picture).length<=2">
          <img :src="JSON.parse(item.picture)[0]" alt="">
          <p class="box-body-text">{{item.title}}</p>
        </div>
        <div v-else>
          <p class="box-body-text">{{item.title}}</p>
          <div class="box-body-imgs">
            <img v-for="(items,indexs) in JSON.parse(item.picture)" :key="indexs" v-if="indexs<=2" :src="items" alt="">
          </div>
        </div>
      </div>
      <div class="box-body" @click="pageView(item.uuid)" v-else>
        <p class="box-body-text">{{item.title}}</p>
      </div>
      <div class="box-foot">
        <div class="box-foot-tip">{{item.circleName}}</div>
        <div class="box-foot-btns">
          <div class="likeUp">
            <img v-if="item.isThumbs==1" src="../../assets/img/likeUps.png" alt="">
            <img v-else @click="isThumbsBtn(item.uuid, index)" src="../../assets/img/likeUp.png" alt="">
            <span v-if="item.thumbs" @click="isThumbsBtn(item.uuid, index)">（{{item.thumbs}}）</span>
            <span v-else>（0）</span>
          </div>
          <div class="commentUp">
            <img @click="pageView(item.uuid)" src="../../assets/img/commentUp.png" alt="">
            <span @click="pageView(item.uuid)">（{{item.commentCount}}）</span>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="box">
      <div class="box-head">
        <span class="time">3小时前</span>
        <img class="userImg" src="../../assets/img/userImg.png" alt="">
        <span class="userName">张三</span>
      </div>
      <div class="box-body">
        <p class="box-body-text">因为阳光好的时候，往往给人带来躁热，使人不安，所以在阳光好之后加上了微风不躁，也就是说太阳光温暖明亮，同时身边有轻风拂过，风中没有躁热之感，而是带来阵阵凉爽。这总感觉是最让人向往的，这也是这一句话，在网络得以快速流行的原因。</p>
        <div class="box-body-imgs">
          <img src="../../assets/img/bg/bg1.jpg" alt="">
          <img src="../../assets/img/bg/bg2.jpg" alt="">
          <img src="../../assets/img/bg/bg3.jpg" alt="">
        </div>
      </div>
      <div class="box-foot">
        <div class="box-foot-tip">邻里互助</div>
        <div class="box-foot-btns">
          <div class="likeUp">
            <img src="../../assets/img/likeUp.png" alt="">（1510）
          </div>
          <div class="commentUp">
            <img src="../../assets/img/commentUp.png" alt="">（1510）
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box-head">
        <span class="time">3小时前</span>
        <img class="userImg" src="../../assets/img/userImg.png" alt="">
        <span class="userName">张三</span>
      </div>
      <div class="box-body">
        <p class="box-body-text">因为阳光好的时候，往往给人带来躁热，使人不安，所以在阳光好之后加上了微风不躁，也就是说太阳光温暖明亮，同时身边有轻风拂过，风中没有躁热之感，而是带来阵阵凉爽。这总感觉是最让人向往的，这也是这一句话，在网络得以快速流行的原因。</p>
      </div>
      <div class="box-foot">
        <div class="box-foot-tip">邻里互助</div>
        <div class="box-foot-btns">
          <div class="likeUp">
            <img src="../../assets/img/likeUp.png" alt="">（1510）
          </div>
          <div class="commentUp">
            <img src="../../assets/img/commentUp.png" alt="">（1510）
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box-head">
        <span class="time">3小时前</span>
        <img class="userImg" src="../../assets/img/userImg.png" alt="">
        <span class="userName">张三</span>
      </div>
      <div class="box-body">
        <div class="box-body-img">
          <img src="../../assets/img/bg/bg1.jpg" alt="">
          <p class="box-body-text">因为阳光好的时候，往往给人带来躁热，使人不安，所以在阳光好之后加上了微风不躁，也就是说太阳光温暖明亮，同时身边有轻风拂过。</p>
        </div>
      </div>
      <div class="box-foot">
        <div class="box-foot-tip">邻里互助</div>
        <div class="box-foot-btns">
          <div class="likeUp">
            <img src="../../assets/img/likeUp.png" alt="">（1510）
          </div>
          <div class="commentUp">
            <img src="../../assets/img/commentUp.png" alt="">（1510）
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { postThumb } from "src/api/circle/index";
import friendlyTimeFormat from 'src/util/timeUtils'
export default {
  name: "postList",
  props: ["dataList"],
  methods: {
    pageView(obj){
      this.$router.push({path: '/circleIndexDetails', query: { uuid: obj } })
    },
    friendlyTimeFormat(time) {
      let d = new Date(time.replace(new RegExp(/-/gm), "/"))
      return friendlyTimeFormat(d)
    },
    isThumbsBtn(obj, index){
      let params = {
        uuid: obj
      }
      let that = this;
      postThumb(params).then(data => {
        if (data.data.code == 200) {
          Toast('操作成功！');
          that.dataList[index].thumbs = data.data.data.thumbs
          that.dataList[index].isThumbs = data.data.data.isThumbs
        }
      })
    }
  }
}
</script>

<style>

</style>
