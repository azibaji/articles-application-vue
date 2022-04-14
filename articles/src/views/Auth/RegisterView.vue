<template>
    <div>
        <div class="auth col-6">
            <div class="auth__header">Login</div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputUsername1">UserName</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Username" v-model="username">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
                </div>
                <div class="submit-btn">
                    <button class="btn auth__btn" @click.prevent="register">Register</button>
                </div>
               
            </form>
            <div class="auth__footer">
                <p>
                    <span>
                        I have an account. / 
                    </span>
                    <router-link to="/login">Login</router-link>
                </p>
            </div>
        </div>
        
    </div>
</template>
<script>
import store from '@/store/index.js';
export default {
    data:()=>({
        email:'',
        password:'',
        username:'',
        user:{}
    }),
    methods:{
        register(){
            let userObj = {
                user:{
                    email:this.email,
                    password:this.password,
                    username:this.username
                    }
                }
            this.axios.post(`${process.env.VUE_APP_URL}/users`,
                 userObj)
                .then( response=> {
                    if(response.data.user){
                        this.$toast.success(`Register successfully. :)`);
                        store.commit('SET_USER', response.data.user)
                        this.$router.push({ path:'/'})
                    }
                })
                .catch( error => {
                    error.response.status === 422 && Object.keys(error.response.data.errors).map(error=>{
                        this.$toast.error(`${error} has already been taken.`);
                    })
                })
        }
    }
}
</script>
<style lang="scss" scoped>
</style>