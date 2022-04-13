<template>
  <div class="home container">
    <search-box @searchArticle="searchArticle"/>
    <articles :keywordSearch="keywordSearch"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Articles from '@/components/articles/Articles.vue'
import SearchBox from '@/components/shared/SearchBox.vue'

export default {
  name: 'HomeView',
  components: {
    Articles,
    SearchBox
  },
  data:()=>({
    keywordSearch:''
  }),
  methods:{
    searchArticle(value){
      this.keywordSearch= value
    }
  }
}
</script>
<style lang="scss" scoped>
  .home{
    padding-top:60px;
  }
</style>
