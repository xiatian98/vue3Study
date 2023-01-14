<template>
	<div class="app">
		<h3>我是App组件</h3>
		<Suspense>
			<template v-slot:default>
				<!-- 当组件可以直接加载出来时 -->
				<Child/>
			</template>
			<template v-slot:fallback>
				<!-- 当组件无法及时加载，用fallback插槽提示用户 -->
				<h3>稍等，加载中。。。</h3>
			</template>
		</Suspense>
	</div>
</template>

<script>
	import {defineAsyncComponent} from 'vue';
	//静态引入，子组件和父组件同时加载，同时显示，如果该组件没有引入成功，页面就阻塞
	// import Child from './components/Child.vue';
	//异步引入，App可以先展示，然后再展示Child.vue
	const Child = defineAsyncComponent(()=>import('./components/Child.vue'));
	export default{
		name: 'App',
		components:{Child},
		
	}
</script>

<style>
	.app {
		background-color: gray;
		padding: 10px;
	}
</style>
