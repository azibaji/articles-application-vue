<template>
  <div class="home container">
    <search-box/>
    <articles/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Articles from '@/components/articles/Articles.vue'
import SearchBox from '@/components/shared/SearchBox.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Articles,
    SearchBox
  }
}
</script>
<style lang="scss" scoped>
  .home{
    padding-top:60px;
  }
</style>
