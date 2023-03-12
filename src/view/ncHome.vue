<template>
  <div class="home">
    <el-tabs type="border-card" v-model="param.tab" @tab-click="tabChanged">
      <el-tab-pane label="全部" name="all">
        <nc-content :list="list"></nc-content>
      </el-tab-pane>
      <el-tab-pane label="精华" name="good">
        <nc-content :list="list"></nc-content>
      </el-tab-pane>
      <el-tab-pane label="分享" name="share">
        <nc-content :list="list"></nc-content>
      </el-tab-pane>
      <el-tab-pane label="问答" name="ask">
        <nc-content :list="list"></nc-content>
      </el-tab-pane>
      <el-tab-pane label="招聘" name="job">
        <nc-content :list="list"></nc-content>
      </el-tab-pane>
    </el-tabs>
    <el-backtop target=".home"></el-backtop>
  </div>
</template>

<script>
import NcContent from "@/components/ncContent.vue";
import { reqTopics } from "@/utils/api";
import { getSession, setSession } from "@/utils/session";
export default {
  components: {
    NcContent,
  },
  name: "ncHome",
  data() {
    return {
      list: [],
      param: {
        page: 1,
        limit: 10,
        tab: "all",
      },
      store: {},
      isLoading: false,
    };
  },
  methods: {
    getTopics() {
      if (!this.isLoading) {
        console.log("确实获取数据了")
        this.isLoading = true
        reqTopics(this.param)
          .then((response) => {
            this.list = response.data["data"];
            this.param.limit = this.param.limit + 10;
            this.store[this.param.tab] = {
              limit: this.param.limit,
              data: this.list,
            };
            this.isLoading = false
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    tabChanged() {
      setSession("activeTab", this.param.tab);
      if (this.store[this.param.tab] !== undefined) {
        this.list = this.store[this.param.tab].data;
      } else {
        this.param.limit = 20;
        this.getTopics();
      }
      if(!this.isLoading){
        this.param.limit = this.store[this.param.tab].limit;
      }
    },
    scrollHandler() {
      // const sumH = document.body.scrollHeight || document.documentElement.scrollHeight
      // const viewH  = document.body.clientHeight || document.documentElement.clientHeight
      // const scrollH = document.body.scrolltop || document.documentElement.scrollTop
      // console.log(window.innerHeight)
      // console.log(document.body.getBoundingClientRect().bottom)
      // const sumH = document.body.scrollHeight || document.documentElement.scrollHeight;
      // const viewH = document.documentElement.clientHeight;
      // const scrollH = document.body.scrollTop || document.documentElement.scrollTop;

      const distance = document.body.getBoundingClientRect().bottom - window.innerHeight
      console.log(distance)
      if (distance < 100) {
        console.log("触发滚动" + this.param.limit);
        this.getTopics();
      }
    },
  },
  created() {
    this.param.tab = getSession("activeTab") || "all";
    this.getTopics();
    window.addEventListener("scroll", this.scrollHandler);
  },
};
</script>

<style></style>
