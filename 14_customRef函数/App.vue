<template>
	<input type="text" v-model="keyWord"/>
	<h3>{{keyWord}}</h3>
</template>

<script>
	import { ref, customRef } from 'vue'; // 必须放在最前面
	
	export default {

		name: "App",
		setup() {
			//自定义的ref
			function myRef(value, delay){
				let timer;
				return customRef((track, trigger)=>{
					return {
						get(){
							console.log(`有人读取了我的自定义ref`)
							track() //通知vue追踪数据的变化
							return value
						},
						set(newValue){
							console.log(`有人使用了自定义ref修改了${value},修改后的值为：${newValue}`)
							clearTimeout(timer) // 如果之前有定时器，就清理定时器
							timer = setTimeout(()=>{
								value = newValue
								trigger() //通知vue重新解析模板
							}, delay)
						}
					}
				})
			}
			
			// let keyWord = ref('hello')  // vue内置的ref
			let keyWord = myRef('hello', 500)
			return {
				// 返回出去，模板才能使用
				keyWord,
			}
		}
	};
</script>
