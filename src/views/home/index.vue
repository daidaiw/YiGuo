<template>
	<div class="home">
		<homeHeader></homeHeader>
		<homeBanner></homeBanner>
		<!-- 端午送礼，全场八折 -->
		<div class="navbox">
			<nav v-for="nav in navs">
				<img :src="nav.img" alt="">
				<span>{{nav.title}}</span>
			</nav>
		</div>
		<div class="imgbox"><img src="@/assets/9710950597142206_1125x344.gif" alt=""></div>
		<div class="imgbox"><img src="@/assets/9288738132862654_1125x480.jpg" alt=""></div>
		<!-- 商品列表，左右滑动 -->
		<div class="dataBanner" v-for="dataBanner in dataBanners">
			<div class="imgBox"><img :src="dataBanner.adPictures[0].pictureUrl" alt=""></div>
			<div class="goodsBanner">
		      <div class="good" v-for="Component in dataBanner.commoditysComponentList">
		      	<img :src="Component.pictureUrl" alt="">
		      	<p class="goodName">{{Component.commodityName}}</p>
		      	<p class="goodPrice">￥{{Component.commodityPrice}}</p>
		      </div>
			</div>
		</div>
		<!-- 两张图片 -->
		<div class="twoImages">
			<img src="@/assets/9288737491789412_658x819.jpg" alt="">
			<img src="@/assets/9288737670440573_658x819.jpg" alt="">
		</div>
		<!-- 商品列表，竖直方向 -->
		<div class="dataList" v-for="data in dataList">
			<img :src="data.commoditysComponentList[0].pictureUrl" alt="">
			<div class="right">
				<p class="p1">{{data.commoditysComponentList[0].commodityName}}</p>
				<p class="p2">{{data.commoditysComponentList[0].subTitle}}</p>
				<p class="p3">
					<span class="span1">￥{{data.commoditysComponentList[0].commodityPrice}}</span>
					<span class="span2">{{data.commoditysComponentList[0].commoditySpec}}</span>
				</p>
			</div>
		</div>
		<!-- 商品分类 -->
		<div class="dataSort">
			<span>新鲜水果</span>
			<div>
				<img src="" alt="">
				<p class="p1">adsada</p>
				<p class="p2">
					<span class="span1">sasad</span>
					<span class="span2">asdad</span>
				</p>
			</div>
		</div>
		<!-- 底部 -->
		<footer>
			<p>沪IPC备09008015号</p>
			<p>上海易果电子商务有限公司</p>
		</footer>
	</div>
</template>
<script>
	import homeHeader from "@/components/header"
	import homeBanner from "@/components/banner"
	import Swiper from "swiper"
	export default{
		components:{
			homeHeader,
			homeBanner
		},
		data(){
			return{
				navs:[
					{id:1,title:"买二付一",img:require("@/assets/9570213054949047_144.png")},
					{id:2,title:"原箱礼盒",img:require("@/assets/9570213054981815_144.png")},
					{id:3,title:"会员福利",img:require("@/assets/9570213055014583_144.png")},
					{id:4,title:"银行活动",img:require("@/assets/9570213055047351_144.png")},
					{id:5,title:"免费兑卡",img:require("@/assets/9570213055080119_144.png")},
					{id:6,title:"精选肉类",img:require("@/assets/9570213055112887_144.png")},
					{id:7,title:"海鲜水产",img:require("@/assets/9570213055145655_144.png")},
					{id:8,title:"食品饮料",img:require("@/assets/9570213055178423_144.png")},
				],
				dataBanners:[],
				dataList:[],
				dataSort:[]
			}
		},
		created(){
			this.$http.get("/api/yg/dataBanner").then(res=>{
				this.dataBanners = res.data.data.object_list;
			});
			this.$http.get("/api/yg/dataList").then(res=>{
				this.dataList = res.data.data.object_list;
			})
			this.$http.get("/api/yg/allFruit_list").then(res=>{
				// this.dataList = res.data.data.object_list;
				console.log(res)
			})
		}
	}
</script>
<style lang="scss" scoped>
	.home{
		display:flex;
		flex-direction: column;
		padding-top: 0.35rem;
		padding-bottom: 0.4rem;
		align-items: center;
		.navbox{
			display: flex;
			flex-wrap: wrap;
			padding:0 0.2rem;
			nav{
				display: flex;
				flex-direction: column;
				width:0.7rem;
				height:0.8rem;
				align-items: center;
				img{
					width:0.5rem;
					height:0.5rem;
				};
				span{
					font-size: 0.12rem;
					color:#666;
				}
			}
		};
		.imgbox{
			width:100%;
			height:1rem;
			img{
				width:100%;
				height:100%;
			}
		};
		.dataBanner{
			width:3.2rem;
			height:3.5rem;
			.imgBox{
				width:100%;
				height:2rem;
				img{
					width:100%;
					height:100%;
				}
			};
			.goodsBanner{
				display:flex;
				overflow: auto;
				margin:0 10px;
				.good{
					width:1.2rem;
					height:1.5rem;
					margin:0 5px;
					img{
						width:1rem;
						height:1rem;
					};
					.goodName{
						color:#333;
						font-size: 0.12rem;
						overflow:hidden;
					    text-overflow:ellipsis;
					    white-space:nowrap
					};
					.goodPrice{
						color:#f00;
						font-size: 0.1rem;
					}
				}	
			}
		};
		.twoImages{
			width:3.2rem;
			height:2rem;
			padding:0 0.2rem;
			display: flex;
			justify-content: space-between;
			background: #f3f3f3;
			img{
				width:1.4rem;
				height:2rem;
			}
		};
		.dataList{
			width:2.8rem;
			height:1rem;
			margin:0.1rem 0.2rem;
			display: flex;
			img{
				width:1rem;
				height:1rem;
			};
			.right{
				width:1.8rem;
				height:1rem;
				.p1{
					color:#000;
					font-size: 12px;
					height:25px;
					line-height: 25px;
				};
				.p2{
					color:#666;
					font-size: 12px;
					height:20px;
					line-height: 20px;
					overflow:hidden;
				    text-overflow:ellipsis;
				    white-space:nowrap
				};
				.p3{
					margin-top: 20px;
					.span1{
						font-size: 14px;
						font-weight: bolder;
						color:#f00;
					};
					.span2{
						font-size: 10px;
						color: #666;
					};
				}
			}
		};
		
	}
</style>