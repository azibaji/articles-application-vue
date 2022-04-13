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
                    <router-link  v-if="userFromStore.email" class="nav-link" to="/profile" >Profile</router-link>
                </li>

            </ul>

            <div>

                <router-link to="/new-article" class="new-article" v-if="userFromStore.email">
                    Write an article
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/>
                    </svg>
                </router-link>

                <button class="header__btn" v-if="userFromStore.email" @click="logOut">Logout</button>

                <router-link to="/login" class="header__btn" v-else >Login</router-link>
                
            </div>
            
        </div>

    </nav>
</template>
<script>
import store from '@/store/index.js';
export default {
    computed: {
        userFromStore:()=> {
            return store.state.user;
        },
    },
    methods:{
        logOut(){
            store.commit('SET_USER', {})
            this.$router.push({ path: '/' });
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/sass/_variables';
    .header{
        padding:10px;
        &__menu{
            display: flex;
            justify-content: space-between;
            font-weight: $fw-damibold;
            @media(max-width:767px){
                flex-direction: column;
                align-items: center;
            }
            .new-article{
                text-decoration: none;
                font-size:$fs-btn;
                margin-right:14px;
                color: $color-green;
                border-bottom: 1px solid $color-green;
                svg{
                    width:17px;
                    fill: $color-green;
                }
            }
        }
        &__btn{
            background: $background-green;
            background: $background-gradiant-green;
            border-radius: 100px;
            padding: 7px 30px;
            color: white;
            display: inline-block;
            text-decoration: none;
            font-size:$fs-btn;
            font-weight: $fw-damibold;
            &:hover{
                cursor: pointer;
            }
        }
        button.header__btn{
            border:0px;
        }
    }
</style>