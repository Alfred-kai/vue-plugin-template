<template>
  <div class="history-nav">
    <vue-easy-nav :treeData="treeDataCopy" @status="getMonthStatus" />
  </div>
</template>

<script>
import VueEasyNav from "./components/VueEasyNav.vue";

export default {
  name: "app",
  components: {
    VueEasyNav
  },
  data() {
    return {
      treeDataCopy: [
        //左侧菜单模拟数据
        {
          id: 23,
          name: "4月算薪(5)",
          status: 0,
          expand: false,
          children: [
            {
              id: 24,
              name: "4月算薪(4)",
              status: 0,
              expand: false,
              children: []
            }
          ]
        },
        {
          id: 3,
          name: "3月算薪",
          status: 0,
          expand: false,
          children: []
        },
        {
          id: 2,
          name: "2月算薪 (3)",
          status: 2,
          expand: false,
          children: [
            {
              id: 4,
              name: "2月算薪 (2)",
              expand: false,
              status: 1
            },
            {
              id: 5,
              name: "2月算薪 (1)",
              expand: false,
              status: 2
            }
          ]
        },
        {
          id: 1,
          name: "1月算薪(4)",
          status: 1,
          expand: false,
          children: [
            {
              id: 9,
              name: "1月算薪 (3)",
              expand: false,
              status: 1
            },
            {
              id: 10,
              name: "1月算薪 (2)",
              expand: false,
              status: 1
            },
            {
              id: 11,
              name: "1月算薪 (1)",
              expand: false,
              status: 1
            }
          ]
        }
      ]
    };
  },
  mounted() {
    console.log("hello world");
  },
  methods: {
    getMonthStatus(status) {
      // this.historyStatus = status;
    }
  }
};
</script>

<style>
.history-nav {
  position: absolute;
  left: 0;
  width: 300px;
  height: calc(100% - 60px);
  background: #333333;
  color: #fff;
  padding: 40px 0;
}
</style>
