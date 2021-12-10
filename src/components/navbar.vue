<template>
	<div class="navbar">
	<van-tabbar route>
		<van-tabbar-item v-for="(item,index) in navs" :key="index" replace :to="item.path" icon="home-o">{{item.name}}</van-tabbar-item>
		
		
	</van-tabbar>
	</div>
</template>indexindex

<script>
	export default{
		data(){
			return{
				navs:[
					{path:'/',name:'首页',icon:'home-o'},
					{path:'/',name:'分类',icon:'home-o'},
					{path:'/',name:'签到',icon:'home-o'},
					{path:'/',name:'购物车',icon:'home-o'},
					{path:'/',name:'个人中心',icon:'home-o'},
					]
			}
		}
	}
</script>

<style>
</style>
