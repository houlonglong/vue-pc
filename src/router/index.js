import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/page/index'
import DetailPage from '@/page/Detail'
import Forecast from '@/page/detail/forecast'
import Analysis from '@/page/detail/analysis'
import Count from '@/page/detail/count'
import Publish from '@/page/detail/publish'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
     // component: Layout
     component: IndexPage
    },
    {
      path: '/detail',
     // component: Layout
     redirect:'/detail/analysis',
     component: DetailPage,
     children:[
        {
          path:'analysis',
          component:Analysis
        },
        {
          path:'count',
          component:Count
        },
        {
          path:'publish',
          component:Publish
        },
        {
          path:'forecast',
          component:Forecast
        }
     ]
    },
  ]
})
