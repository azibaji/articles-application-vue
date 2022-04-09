<template>
    <router-link :to="{ name: 'article', params: { id: article.id }}">
        <div class="article-item col-3">
            <div class="article-item__img">
                <img :src="imgUrlDefault"/>
            </div>
            <div class="article-item__info">
                <div class="body">
                    <div class="title">
                        {{article.title}}
                    </div>
                    <div class="description">
                        {{article.short_description}}
                    </div>
                </div>
                <div class="footer">
                    <div class="comments">
                        {{article.comments.length}}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"/>
                        </svg>
                    </div>
                    <div class="stars">
                        {{article.likeCount}}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
                        </svg>
                    </div>
                </div>
                
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    props:['article'],
    data: () =>({
        imgUrlDefault:'http://erasmusplus.org.ge/files/news/news-1.jpg'
    })
}
</script>
<style lang="scss" scoped>
    a{
        text-decoration: none;
        color: black;
        &:hover{
            color:black
        }
        .article-item{
            border: 1px solid #ced4da;
            &__img{
                img{
                    width:100%;
                }
            }
            &__info{
                text-align: left;
                .body{
                    padding:20px;
                    .title{
                        font-size:16px;
                        font-weight: 500;
                        margin-bottom: 20px;
                    }
                    .description{
                        font-size:14px;
                        text-align: justify;
                    }
                }
                .footer{
                    display: flex;
                    justify-content: flex-start;
                    border-top: 1px solid #ced4da;
                    padding: 10px 20px;
                    color:#ced4da;
                    font-size: 12px;
                    .comments{
                        svg{
                            fill: #ced4da;
                            width: 15px;
                        }
                        padding-right:10px;
                        margin-right:10px;
                        border-right:1px solid #ced4da;
                    }
                    .stars{
                        svg{
                            fill: #ced4da;
                            width: 15px;
                        }
                    }
                }
            }

        }
    }
</style>