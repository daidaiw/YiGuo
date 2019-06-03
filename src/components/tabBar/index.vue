<template>
	<div class="tabBar">
		<tabItem icon="home" txt="首页"></tabItem>
		<tabItem icon="plus-square-o" txt="分类"></tabItem>
		<tabItem icon="cutlery" txt="吃饭吧"></tabItem>
		<tabItem icon="shopping-cart" txt="购物车"></tabItem>
		<tabItem icon="user" txt="我的易果"></tabItem>
	</div>
</template>
<script>
	import tabItem from "./tabItem.vue"
	export default{
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