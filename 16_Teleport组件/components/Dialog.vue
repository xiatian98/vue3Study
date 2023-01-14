<template>
	<div>
		<button type="button" @click="isShow=true">点我弹窗</button>
		<teleport to="body">  <!--把这个块级元素传递给了body，现在块级元素的内容都是相对于body而言的-->
			<div class="mask" v-if="isShow">
				<div class="dialog">
					<h3>我是一个弹窗</h3>
					<h3>我是内容</h3>
					<h3>我是内容</h3>
					<h3>我是内容</h3>
					<button type="button" @click="isShow=false">关闭弹窗</button>
				</div>
			</div>
		</teleport>
	</div>
</template>

<script>
	import {ref} from 'vue';
	export default {
		name: 'Dialog',
		setup(){
			let isShow = ref(false)
			return {isShow}
		}
	}
</script>

<style>
	.mask{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgb(0,0,0,0.5);
	}
	.dialog{
		position: absolute;
		text-align: center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 300px;
		height: 300px;
		background-color: #42B983;
	}
</style>
