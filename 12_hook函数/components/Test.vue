<template>
	<h2>Test组件当前点击时的鼠标坐标为：x：{{point.x}}，y：{{point.y}}</h2>
</template>

<script>
	import usePoint from '../hooks/usePoint.js'
	
	export default {
		name: 'Test',
		setup(){
			let point = usePoint()
			
			return {point,}
		}
	}
</script>

<style>
</style>
