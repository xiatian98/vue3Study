<template>
	<h2>当前的求和为：{{sum}}</h2>
	<button @click="sum++">点我+1</button>
	<hr>
	<h2>当前点击时的鼠标坐标为：x：{{point.x}}，y：{{point.y}}</h2>
</template>


<script>
	import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
	//引入自定义钩子函数
	import usePoint from "../hooks/usePoint"
	export default {
		name: "App",
		setup() {
			let sum = ref(0)
			
			let point = usePoint()
			
			return {
				sum,
				point,
			};
		},
	};
</script>
