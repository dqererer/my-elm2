<template>
  <div class="main">
    <ul>
      <li class>
        <div id="test"></div>
      </li>
      <li>
        <div id="line"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EChart",
  mounted: function() {
    this.test();
    this.line();
  },
  methods: {
    test: function() {
      var myChart = this.$echarts.init(document.getElementById("test"));
      myChart.setOption({
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    line: function() {
      var myChart = this.$echarts.init(document.getElementById("line"));
      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            // data: [820, 932, 901, 934, 1290, 1330, 1320],
            data: [0, 1, 901, 0, 0],
            type: "line"
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.main ul li div {
  height: 20rem;
  width: 30rem;
}
</style>