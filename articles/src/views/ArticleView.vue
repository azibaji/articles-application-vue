<template>
    <div class="article container">
        <div class="article__header">
            <router-link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"/>
                </svg>
                Back
            </router-link>
            <div class="bio">
                <div class="bio__title col-7">
                    <h1>
                        {{article.title}}
                    </h1>
                    <p>
                        {{article.short_description}}
                    </p>
                </div>
                 <div class="vote col-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" v-for="index in 5" :key="index">
                        <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"/>
                    </svg>
                </div>
            </div>
           
        </div>
        <div class="article__body">
            {{article.description}}
        </div>
        <div class="article__footer">
            <div class="comment" v-for="comment in article.comments" :key="comment.id">
                <div class="author">
                    <div class="author__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
                        </svg>
                    </div>
                    <div class="author__name">
                        {{comment.author}}
                    </div>
                </div>
                <div class="text">
                    {{comment.comment}}
                </div>
                
            </div>
            <div class="new-comment">
                
            </div>
        </div>

    </div>
</template>
<script>
import articles from '@/articles.json'
export default {
     data(){
        return{
            id: this.$route.params.id,
            articles:articles,
        }
     },
     computed:{
         article(){
             console.log(this.articles)
             return this.articles.filter(a => a.id == this.id).find(a=>a.id == this.id)
         }
     }
}
</script>
<style lang="scss" scoped>
    .article{
        padding-top:60px;
        &__header{
            background-color: #f8f9fa;
            padding: 20px;
            a{
                text-decoration: none;
                color:#30cf9e;
                font-weight: 600;
                display: block;
                text-align: left;
                svg{
                    width:15px;
                    fill:#30cf9e;
                }
            }
            .vote{
                svg{
                    width:20px;
                    margin-right:5px
                }
            }
            .bio{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top:40px;
                text-align: left;
                h1{
                    font-size:18px;
                }
                p{
                    font-size:13px;
                    padding-left:10px;
                }
            }
        }
        &__body{
            margin:30px 60px;
            text-align: justify;
        }
        &__footer{
            .comment{
                border:1px solid #f8f9fa;
                border-radius: 10px;
                padding:  10px 20px;
                .author{
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-end;
                    &__icon{
                        svg{
                            width:20px;
                            fill:#dbe1e7;
                        }
                    }
                    &__name{
                        font-style: italic;
                        font-size: 13px;
                        color:black;
                        padding-left:4px;
                    }
                }
                .text{
                    text-align: left;
                    margin-top: 10px;
                    padding-left: 25px;
                    font-size: 14px;
                }
            }
        }
    }
</style>