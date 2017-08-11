<template>  
    <table class="table table-striped">  
        <tr>  
            <td>年份</td>  
            <td>月份</td>  
            <td>日</td>  
        </tr>  
        <tr v-for="t in dates">  
            <td>{{t.year}}</td>  
            <td>{{t.month}}</td>  
            <td>{{t.day}}</td>  
        </tr>  
    </table>  
</template>  
<script>  
export default{  
    name:'time',  
    data(){  
        const D = new Date();  
        return{  
            dates:[{  
                year:D.getFullYear(),  
                month:D.getMonth()+1,  
                day:D.getDate()  
            }]  
        }  
    }  
}  
</script> 