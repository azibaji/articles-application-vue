<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light header">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse header__menu" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/articles">Articles</router-link>
                </li>
            </ul>
            <div>
                <router-link to="/new-article" class="new-article">
                    Write an article
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/>
                    </svg>
                </router-link>
                <router-link to="/login" class="header__btn">Login</router-link>
            </div>
            
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .header{
        &__search-box{
            border: 1px solid #ced4da;
            border-radius: 100px;
            background-color: white;
            input{
                border-radius: 100px;
                border:0px;
                
            }
            svg{
                width:20px;
                fill:#30cf9e;
                }
        }
        &__menu{
            display: flex;
            justify-content: space-between;
            .new-article{
                text-decoration: none;
                font-size:15px;
                margin-right:14px;
                color: #30cf9e;
                border-bottom: 1px solid #30cf9e;
                svg{
                    width:17px;
                    fill: #30cf9e;
                }
            }
        }
        &__btn{
            background: rgb(11,221,197);
            background: linear-gradient(90deg, rgba(11,221,197,1) 0%, rgba(51,205,153,1) 56%, rgba(0,255,96,1) 100%);
            border-radius: 100px;
            padding: 7px 30px;
            color: white;
            display: inline-block;
            text-decoration: none;
            &:hover{
                
                cursor: pointer;
            }
        }
    }
</style>