import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import category from './category'
// import categoryItem from './categoryItem'

Vue.use(Router)

export default new Router({
	routes: [
		{path:"/",redirect:"/home"},
		home,category 
	]
})
