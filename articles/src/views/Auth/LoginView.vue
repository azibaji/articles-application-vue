<template>
    <div>
        <div class="auth col-6">
            <div class="auth__header">Login</div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input 
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        v-model="email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input 
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        v-model="password">
                </div>
                <div class="submit-btn">
                    <button class="btn auth__btn" @click.prevent="login">Login</button>
                </div>
            </form>
            <div class="auth__footer">
                <p>
                    <span>
                        I haven't registered. / 
                    </span>
                    <router-link to="/register">Register</router-link>
                </p>
            </div>
        </div>
        
    </div>
</template>
<script>
import store from '@/store/index.js';
export default {
    data: () => ({
        email:'',
        password:'',
    }),
    methods:{
        login(){
            let userObj = {
                user:{
                    email:this.email,
                    password:this.password
                    }
                }
            this.axios.post(`${process.env.VUE_APP_URL}/users/login`,
                 userObj
                )
                .then(response => {
                    store.commit('SET_USER', response.data.user)
                    this.$toast.success(`Login successfully. :)`);
                    this.$router.push({ path:'/'})
                })
                .catch(error=> {
                    error.response.status === 403 && this.$toast.error(`Email or password is invalid. :(`);
                })
        }
    }
}
</script>
<style lang="scss" scoped>
</style>