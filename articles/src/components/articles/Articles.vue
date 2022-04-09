<template>
    <div class="articles">
        <div v-for="article in articles" :key="article.id">
            <article-item :article="article"/>
        </div>
    </div>
</template>
<script>
import ArticleItem from './ArticleItem.vue'
import articles from '@/articles.json'
export default {
  components: { ArticleItem },
  data: () => ({
      articles:articles
  })
}
</script>
<style lang="scss" scoped>
    .articles{
        padding-top:70px;
    }
</style>