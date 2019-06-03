<template>
	<div class="banner">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide" v-for="nav in navs" :key="nav.id">
		      	<img :src="nav.img" alt="">
		      </div>
		    </div>
		    <div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<script>
import Swiper from "swiper"
	export default{
		data(){
			return{
				navs:[
					{id:1,img:require("@/assets/pic1.jpg")},
					{id:2,img:require("@/assets/pic2.jpg")},
					{id:3,img:require("@/assets/pic3.jpg")},
					{id:4,img:require("@/assets/pic4.jpg")},
					{id:5,img:require("@/assets/pic5.jpg")},
					{id:6,img:require("@/assets/pic6.jpg")},
					{id:7,img:require("@/assets/pic7.jpg")}
				]
			}
		},
		created(){
			this.$nextTick(()=>{
				new Swiper('.swiper-container', {
			      spaceBetween: 30,
			      centeredSlides: true,
			      autoplay: {
			        delay: 2500,
			        disableOnInteraction: false,
			      },
			      pagination: {
			        el: '.swiper-pagination',
			        clickable: true,
			      },
			      navigation: {
			        nextEl: '.swiper-button-next',
			        prevEl: '.swiper-button-prev',
			      },
			    });
			})
		},
	}
</script>
<style lang="scss">
	.banner{
		width:3.2rem;
		height:1.86rem;
		img{
			width:100%;
			height:100%;
		}
	}
</style>