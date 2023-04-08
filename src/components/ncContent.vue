<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <div class="topic">
        <!-- 头像 -->
        <router-link :to="{name:'user', params: { id: item.author.loginname } }">
          <img :src="item.author['avatar_url']" alt="" />
        </router-link>
        <!-- 评论数/浏览数 -->
        <span class="count">
          <em>{{ item.reply_count }} </em> / <em>{{ item.visit_count }} </em>
        </span>
        <!-- tag -->
        <el-tag>
          {{ item.tab || "unClassified" }}
        </el-tag>
        <!-- title -->
        <router-link class="title" to="{}">
          <span>
            {{ item.title }}
          </span>
        </router-link>
        <!-- time -->
        <span class="time"> {{ $dayjs(item.last_reply_at).format("MM-DD-YYYY") }} </span>
      </div>
      <Divider></Divider>
    </div>
  </div>
</template>

<script>
import Divider from '@/components/Divider';
export default {
  name: "Content",
  components:{
    Divider
  },
  props: ["list"],
  data() {
    return {};
  },
  mounted() {
    // console.log(this.list);
  },
};
</script>

<style lang="scss">
.topic {
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  span.count {
    width: 8em;
    text-align: center;
    em:first-child {
      font-size: 1.2em;
      color: purple;
    }
    em:last-child {
      color: grey;
    }
  }
  .title {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    text-align: left;
    color: rgb(25, 23, 23);
    text-decoration: none;
  }
  span.time {
    width: 6em;
    text-align: right;
  }
}
</style>
