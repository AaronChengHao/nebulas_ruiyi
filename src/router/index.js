import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Upload from '@/components/Upload'
import Explain from '@/components/Explain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/explain',
      name: 'explain',
      component: Explain
    }
  ]
})
