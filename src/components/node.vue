<template>
  <div class="main">
    <section>
      <button>点击get接口</button>
      <p>{{resGet}}</p>
    </section>
  </div>
</template>
<script>
export default {
  name: "WatchRoute",
  data: function() {
    return {
      resGet: ""
    };
  },
  watch: {},
  created: function() {},
  methods: {
    getData: function() {
      this.axios
        .get(
          `http://localhost/kkkk?a=1&b=2`
        )
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
<style scoped>
.main {
  display: flex;
  justify-content: space-between;
}
li {
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