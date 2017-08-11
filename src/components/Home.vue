<template>  
    <div>  
        <h1>Home</h1>  
        <p>{{msg1}}<router-link to="/play/home/time" class="btn">获取当前日期</router-link></p>  
        <router-view></router-view>  
    </div>  
      
</template>  
<script>  
export default{  
    name:'home',  
    data(){  
        return{  
            msg1:'This is Home page!'  
        }  
    }  
}  
</script> 