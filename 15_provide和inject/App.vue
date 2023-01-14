<template>
	<div class="app">
		<h3>我是App组件（祖宗）{{name}}--{{price}}</h3>
		<Child/>
	</div>
</template>

<script>
	import {reactive, toRefs, provide} from 'vue';
	import Child from './components/Child.vue';
	export default{
		name: 'App',
		components:{Child},
		setup(){
			let car = reactive({name: '仰望', price: '120W'})
			//给自己的后代组件传递数据，第一个参数是给传递的数据起个名，第二个参数是要传递的数据名
			provide('car', car)
			return {...toRefs(car)}
		}
	}
</script>

<style>
	.app {
		background-color: gray;
		padding: 10px;
	}
</style>
