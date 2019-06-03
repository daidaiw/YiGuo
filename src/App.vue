<template>
    <div id="app">
    	<router-view></router-view>
		<tabBar></tabBar>
    </div>
</template>
<script>
	import tabBar from "@/components/tabBar/"
	export default{
		components:{
			tabBar
		}
	}
</script>
<style lang="scss" scoped>
	#app{
		display:flex;
		flex-direction: column;
	}
</style>
