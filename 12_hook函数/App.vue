<template>
	<button type="button" @click="isShow=!isShow">点击切换样式</button>
	<HelloWorld v-if="isShow" />
	<hr >
	<Test/>
</template>

<script>
	import { ref } from 'vue'; // 必须放在最前面
	import HelloWorld from "./components/HelloWorld";
	import Test from './components/Test.vue';
	
	export default {

		name: "App",
		components: {
			HelloWorld,
			Test,
		},
		setup() {
			let isShow = ref(true)

			return {
				// 返回出去，模板才能使用
				isShow,
			}
		}
	};
</script>
