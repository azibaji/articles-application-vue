<template>
    <div>
        <div class="auth col-6">
            <div class="auth__header">Login</div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputUsername1">UserName</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Username">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button class="btn auth__btn" @click.prevent="login">Submit</button>
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
export default {
    
}
</script>
<style lang="scss" scoped>
    .auth{
        margin:70px auto;
        border: 1px solid #ced4da;
        border-radius: 5px;
        padding: 0px;
        padding-top:0px;
        &__header{
            background-color: #30cf9e;
            padding: 10px;
            text-align: left;
            color: white;
            font-weight: 700;
        }
        form{
            margin-top:20px;
            text-align: left;
            padding: 10px;
        }
        &__btn{
            background: rgb(11,221,197);
            background: linear-gradient(90deg, rgba(11,221,197,1) 0%, rgba(51,205,153,1) 56%, rgba(0,255,96,1) 100%);
            border-radius: 10px;
            padding: 7px 30px;
            color: white;
            text-decoration: none;
            border:0px;
            margin-top:10px;
            font-weight: 600;
            &:hover{
                
                cursor: pointer;
            }
        }
        &__footer{
            span{
            }
            a{
                color:rgb(11,221,197);
                font-weight: 600;
            }
        }
    }
</style>