<template>  
    <div class="container">  
        <div class="row">  
            <div class="col-md-2 col-md-offset-2">  
                <div class="list-group">  
                    <router-link to="/play/home" class="list-group-item">Home</router-link>    
                    <router-link to="/play/about" class="list-group-item">About</router-link>   
                </div>  
            </div>  
            <div class="col-md-6">  
                <div class="panel">  
                    <div class="panel-body">  
                        <router-view></router-view>  
                    </div>  
                </div>  
            </div>  
        </div>  
    </div>  
</template>  
<script>  
export default{  
    name:'play'  
}  
</script> 