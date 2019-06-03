<template>
	<div class="header">
		<span>北京</span>
		<i class="fa fa-sort-down"></i>
		<div>
			<i class="fa fa-search"></i>
			<input type="text" placeholder="请输入商品名称">
		</div>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style lang="scss" scoped>
	.header{
		display:flex;
		position:fixed;
		z-index: 10;
		top:0;
		width:100%;
		height:0.35rem;
		background:#01b27a;
		color:#fff;
		align-items: center;
		justify-content: space-between;
		padding:0 0.1rem;
		div{
			height:0.24rem;
			background: #fff;
			width:2.5rem;
			padding:0 0.1rem;
			border-radius:10px;
			i{
				color:#666;
				font-size: .12rem;
			};
			input{
				color:#666;
				border:none;
				font-size: .12rem;
				margin-left: 5px;
				width:2rem;
				height:0.24rem;
			}
		}
	}
</style>