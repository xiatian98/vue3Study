<template>
  <h2>当前的求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  
</template>


<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
export default {
  name: "App",
  setup() {
    
    //数据
    let sum = ref(0);
	
	//组合式API的形式
	onBeforeMount(()=>{
		console.log('onBeforeMount')
	})
	
	onMounted(()=>{
			console.log('onMounted')
	})
	
	onBeforeUpdate(()=>{
		console.log('onBeforeUpdate')
	})
	
	onUpdated(()=>{
		console.log('onUpdated')
	})
	
	onBeforeUnmount(()=>{
		console.log('onBeforeUnmount')
	})
	
	onUnmounted(()=>{
		console.log('onUnmounted')
	})
	
    return {
      sum,
    };
  },
  //通过配置项的形式使用生命周期钩子函数
  // beforeCreate() {
	 //  // 创建之前
  // 	console.log('---beforeCreate---')
  // },
  // created() {
	 //  // 创建之后
  // 	console.log('---created---')
  // },
  // beforeMount() {
	 //  // 挂在之前
  // 	console.log('---beforeMount---')
  // },
  // mounted() {
	 //  // 挂在之后
  // 	console.log('---mounted---')
  // },
  // beforeUpdate() {
	 //  // 更新之前
  // 	console.log('---beforeUpdate---')
  // },
  // updated() {
	 //  // 更新之后
  // 	console.log('---updated---')
  // },
  // beforeUnmount() {
	 //  //卸载之前
  // 	console.log('---beforeUnmount---')
  // },
  // unmounted() {
	 //  // 卸载后
  // 	console.log('---unmounted---')
  // }
};
</script>
