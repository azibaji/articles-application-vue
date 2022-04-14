<template>
  <div>
    <main-header/>
    <router-view class="container main"/>
    <main-footer/>
  </div>
</template>
<script>
import MainFooter from './components/shared/MainFooter.vue'
import MainHeader from './components/shared/MainHeader.vue'
export default {
  components:{
    MainHeader,
    MainFooter
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  display: flex;
  flex-direction: column;
  
  
  &>div{
    display: flex;
    flex-direction:column; 
    min-height: 100vh;
    justify-content: space-between;
  }

}
  .main{
    padding-top:70px;
    padding-bottom: 70px;
    
  }

</style>
