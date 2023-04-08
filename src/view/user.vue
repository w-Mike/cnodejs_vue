<template>
  <div id="user">
    <user-profile class="profile" :loginName="loginName"></user-profile>
  </div>
</template>

<script>
import UserProfile from '@/components/userProfile.vue';
export default {
  name:'user',
  data(){
    return {
      loginName:'',
    }
  },
  components:{
    UserProfile
  },
  created(){
    console.log(this.$route.params.id)
    this.loginName = this.$route.params.id
  }
}
</script>

<style lang="scss">
.profile{
  width:18em;
}
</style>


