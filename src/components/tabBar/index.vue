<template>
	<div class="tabBar">
		<!-- <tabItem icon="home" txt="首页"></tabItem>
		<tabItem icon="plus-square-o" txt="分类"></tabItem>
		<tabItem icon="cutlery" txt="吃饭吧"></tabItem>
		<tabItem icon="shopping-cart" txt="购物车"></tabItem>
		<tabItem icon="user" txt="我的易果"></tabItem> -->

		<tabItem v-for="bar in bars"
			:key="bar.id"
			:txt="bar.name"
			:icon="bar.icon"
			:flag='bar.flag'
		   ></tabItem>
	</div>
</template>
<script>
	import tabItem from "./tabItem.vue"
	export default{
		data(){
			return {
				bars:[
					{id:1,name:"首页",flag:"home",icon:"home"},
					{id:2,name:"分类",flag:"category",icon:"plus-square-o"},
					{id:3,name:"吃饭吧",flag:"eat",icon:"cutlery"},
					{id:4,name:"购物车",flag:"shoppingCar",icon:"shopping-cart"},
					{id:5,name:"我的易果",flag:"mine",icon:"user"},
				]
			}
		},
		components:{
			tabItem
		}
	}
</script>
<style lang="scss" scoped>
	.tabBar{
		display:flex;
		position:fixed;
		bottom:0;
		width:100%;
		height:0.4rem;
		justify-content: space-around;
		background: #fff;
		padding-top: 0.04rem;
	}
</style>