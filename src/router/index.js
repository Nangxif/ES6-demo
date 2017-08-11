import Vue from 'vue'  
import Router from 'vue-router'  
import Home from '@/components/Home'  
import Play from '@/components/Play'  
import Time from '@/components/Time'  
import About from '@/components/About'  
  
Vue.use(Router)  
  
  
export default new Router({   
  routes: [    
    {   
      path: '/play',    
      name: 'play',    
      component: Play,    
      children: [    
        {    
          path: '/play/home',    
          name: 'home',    
          component: Home,  
          children:[{  
            path:'/play/home/time',  
            name:'time',  
            component:Time  
          }]    
        },    
        {    
          path: '/play/about',    
          name: 'about',    
          component: About    
        }     
      ]    
    }]  
}) 