<template>
    <div class="articles">

        <div class="articles__wrapper">
            <article-item :article="article" v-for="(article, index) in articles" :key="index"/>
        </div>

        <pagination
         :itemsCount="allArticles.length"
         :pageSize="pageSize"
         :currentPage="currentPage"
         @handlePageChange="handlePageChange"
         />
    </div>
</template>
<script>

import pagination from '@/utils/pagination'
import ArticleItem from './ArticleItem.vue'
import Pagination from '../shared/Pagination.vue';

export default {
  components: { ArticleItem, Pagination },
  data: () => ({
     allArticles:[],
     currentPage:1,
     pageSize:2
  }),
  props:['keywordSearch'],
  created(){
      this.geArticles()
  },
  watch:{
      keywordSearch(){
          this.geArticles();
      }
  },
  computed:{
      articles(){
          const keywordSearch = this.keywordSearch.toLowerCase()
          
          if(this.allArticles){
            let filteredArticles = this.allArticles.filter(article => article.title.toLowerCase().includes(keywordSearch)
            || article.description.toLowerCase().includes(keywordSearch) || article.body.toLowerCase().includes(keywordSearch))
            
            this.allArticles = filteredArticles;
            
            return pagination.paginate(filteredArticles, this.currentPage, this.pageSize )
          }


      }
  },
  methods:{
        geArticles(){
          this.axios.get(`${process.env.VUE_APP_URL}/articles`)
            .then( response => {
                response.data && (this.allArticles = response.data.articles)
            })
            .catch(error=> console.log(error))
        },
        handlePageChange(page){
            this.currentPage = page
            console.log(this.currentPage,page)
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