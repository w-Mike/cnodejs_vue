<template>
  <div id="profile">
    <a
      :href="'https://github.com/' + user.githubUsername"
      target="_blank"
      rel="nofollow noopener noreferrer"
      class="github"
    >
      <img :src="user.avatar_url" alt="用户头像" />
      <div >
        <img :src='require("@/assets/image/github.svg")' alt="github" style="width:20px; height:20px; margin:0"/>
        {{ user.githubUsername }}
      </div>
    </a>

    <div id="info">
      <div>积分: {{ user.score }}</div>
      <div></div>
      <div>
        创建于:
        {{ $dayjs(user.create_at).format("MM-DD-YYYY") }}
      </div>
    </div>
  </div>
</template>

<script>
import { reqUserByName } from "@/utils/api";
import eventBus from "@/utils/eventBus";
export default {
  name: "userProfile",
  data() {
    return {
      user: "",
    };
  },
  props: ["loginName"],
  methods: {
    fetchData() {
      reqUserByName(this.loginName).then((res) => {
        // this.user = res.data.loginname;
        this.user = res.data["data"];
        eventBus.trigger("user", res.data);
      });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
#profile {
  display: flex;
  padding: 1em;
  justify-content: space-between;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

    img {
      width: 5em;
      height: 5em;
      border-radius: 5px;
      margin-right: 20px;
    }
  }
  .user {
    margin-bottom: 10px;
  }
  #info{
    padding: 0 auto;
  }
}
</style>
