<template>
	<ul class="post">
    <li v-for="(item,index) in data" :key="index" @click="pageView(item.uuid)">
      <img v-if="item.pic" :src="item.pic.split(',')[0]" alt="">
      <img v-else src="../../assets/img/no.png" alt="">
      <div class="">
        <h2>{{item.title}}</h2>
        <p>{{item.description}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "post",
  props: [ 'data' ],
  methods: {
    pageView(obj){
      this.$router.push({path: '/postDetails', query: { uuid: obj } })
    }
  }
}
</script>

<style>

</style>
