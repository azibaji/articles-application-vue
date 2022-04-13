<template>
    <div class="articles">
        <div class="articles__wrapper">
            <article-item :article="article" v-for="(article, index) in articles" :key="index"/>
        </div>
    </div>
</template>
<script>

import store from '@/store/index.js';
import ArticleItem from './ArticleItem.vue'

export default {
  components: { ArticleItem },
  data: () => ({
     allArticles:[]
  }),
  props:['keywordSearch'],
  created(){
      this.geArticles()
  },
  computed:{
      articles(){
          const keywordSearch = this.keywordSearch.toLowerCase()
          if(this.allArticles){
            return this.allArticles.filter(article => article.title.toLowerCase().includes(keywordSearch)
            || article.description.toLowerCase().includes(keywordSearch) || article.body.toLowerCase().includes(keywordSearch))
          }
      }
  },
  methods:{
      geArticles(){
          this.axios.get(`${store.state.api_url}/articles`)
            .then( response => {
                response.data && (this.allArticles = response.data.articles)
            })
            .catch(error=> console.log(error))
            }
  }
}
</script>
<style lang="scss" scoped>
    .articles{
        padding-top:70px;
        &__wrapper{
            display: flex;
            justify-content: flex-start;
            flex-wrap:wrap;
        }
        
    }
</style>