<template>
  <div class="main">
    <section>
      <p>common plan</p>
      <ul class="common" v-for="(i,text) in list" v-bind:key="text">
        <li :class="{cur:text==curID}" @click="setCur(text)">{{i.text}}</li>
      </ul>
    </section>
    <section>
      <p>new plan</p>
      <ul class="greater" v-for="(i,text) in list2" v-bind:key="text">
        <router-link :to='{ path:"/WatchRoute/"+(text+1)}'>{{i.text}}</router-link>
      </ul>
    </section>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
export default {
  name: "WatchRoute",
  data: function() {
    return {
      list: [
        {
          text: 1
          // isCur:false
        },
        {
          text: 2
          // isCur:false
        },
        {
          text: 3
          // isCur:false
        },
        {
          text: 4
          // isCur:false
        }
      ],
      list2: [
        {
          text: 1
          // isCur:false
        },
        {
          text: 2
          // isCur:false
        },
        {
          text: 3
          // isCur:false
        },
        {
          text: 4
          // isCur:false
        }
      ],
      curID: 100
    };
  },
  watch: {
    
  },
  methods: {
    setCur: function(i) {
      this.curID = i;
    },
    toggle: function(){

    },
  }
};
</script>
<style scoped>
.main{
  display: flex;
  justify-content: space-between;
}
li , a {
  display: block;
  width: 6rem;
  height: 2rem;
  background: coral;
  border: 0.1rem solid black;
}
.cur {
  background: white;
}
</style>