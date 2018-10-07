<template>
	<div class="circleIndexDetails" style="padding-bottom: 50px;">
    <div class="postHead">
      <h2>{{dataList.title}}</h2>
      <p>{{dataList.createTime}}</p>
      <p>{{dataList.content}}</p>
      <div v-if="dataList.picture">
        <img v-for="(items,indexs) in JSON.parse(dataList.picture)" :key="indexs" :src="items" alt="">
      </div>
    </div>
    <div class="postCommon" v-if="dataListPost.length>0">
      <h2>评论</h2>
      <ul>
        <li v-for="(itemCom,indexCom) in dataListPost" :key="indexCom">
          <div>
            <img :src="itemCom.headPic" alt="">
          </div>
          <div>
            <h3>{{itemCom.trueName}}</h3>
            <p>{{itemCom.content}}</p>
            <h4>{{itemCom.createTime}}</h4>
          </div>
        </li>
      </ul>
    </div>
    <div class="postCommonTip">
      <div class="likeUp">
        <img v-if="dataList.isThumbs==1" src="../../assets/img/likeUps.png" alt="">
        <img v-else @click="isThumbsBtn(dataList.uuid)" src="../../assets/img/likeUp.png" alt="">
        <span v-if="dataList.thumbs" @click="isThumbsBtn(dataList.uuid)">（{{dataList.thumbs}}）</span>
        <span v-else>（0）</span>
      </div>
      <div class="commentUp">
        <img @click="addCommentsPost(dataList.uuid)" src="../../assets/img/commentUp.png" alt="">
        <span @click="addCommentsPost(dataList.uuid)">（{{dataList.commentCount}}）</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui';
import { postThumb } from "src/api/circle/index";
import { postQueryOne } from "src/api/circle/index";
import { circlePostCommentAdd } from "src/api/circle/index";
import { circlePostCommentQueryAll } from "src/api/circle/index";
export default {
  name: "circleIndexDetails",
  data(){
    return {
      dataList: {
        picture: ""
      },
      dataListPost: []
    }
  },
  mounted(){
    this.postCircleQueryOne();
    this.postCirclePostCommentQueryAll();
  },
  methods: {
    //圈子详情
    postCircleQueryOne(){
      let params = {
        uuid: this.$route.query.uuid
      }
      postQueryOne(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data
        }
      })
    },
    //帖子列表
    postCirclePostCommentQueryAll(){
      let params = {
        postId: this.$route.query.uuid,
        flag: 1,
      }
      circlePostCommentQueryAll(params).then(data => {
        if (data.data.code == 200) {
          this.dataListPost = data.data.data.list
        }
      })
    },
    //点赞
    isThumbsBtn(obj, index){
      let params = {
        uuid: obj
      }
      let that = this;
      postThumb(params).then(data => {
        if (data.data.code == 200) {
          Toast('操作成功！');
          that.dataList.thumbs = data.data.data.thumbs
          that.dataList.isThumbs = data.data.data.isThumbs
        }
      })
    },
    //评论
    addCommentsPost(obj){
      MessageBox.prompt('请输入评论内容', '').then(({ value, action }) => {
        if (value == null) {
          Toast('请输入评论内容！');
        } else {
          let params = { postId: obj, content: value }
          circlePostCommentAdd(params).then(data => {
            let instance = Toast('评论成功!');
            setTimeout(() => {
              instance.close();
              location.reload();
            }, 1000);
          });
        }
      }).catch(action => {

      });
    }
  }
}
</script>

<style scoped>

</style>
