<template>
    <div class="new-article">
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="title" v-model="title">
            </div>
            
            <div class="form-group">
                <label for="exampleFormControlInput1">Short description:</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="short description" v-model="shortDescription">
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Article</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="description"></textarea>
            </div>
            <button class="new-article__btn" @click.prevent="postArticle"> post</button>
        </form>
    </div>
</template>
<script>
export default {
    data:()=>({
        title:'',
        shortDescription:'',
        description:''
    }),
    methods:{
        postArticle(){
            let newArticle = {
                "title":this.title,
                "short_description": this.shortDescription,
                "description":this.description
            }
            console.log(newArticle)
        }
    }
}
</script>
<style lang="scss" scoped>
    .new-article{
        text-align: left;
        label{
            color:#30cf9e;
            font-weight: 600;
        }
        .form-group{
            margin-top:20px;
        }
        &__btn{
            background: rgb(11,221,197);
            background: linear-gradient(90deg, rgba(11,221,197,1) 0%, rgba(51,205,153,1) 56%, rgba(0,255,96,1) 100%);
            border-radius: 10px;
            padding: 7px 30px;
            color: white;
            text-decoration: none;
            float:right;
            border:0px;
            margin-top:10px;
            font-weight: 600;
            &:hover{
                
                cursor: pointer;
            }
        }
    }
</style>