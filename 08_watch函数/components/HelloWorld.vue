<template>
  <h2>当前的求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr >
  <h2>当前的msg为：{{msg}}</h2>
  <button type="button" @click="msg+='~'">点我修改msg</button>
  <hr >
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{person.salary.monthSalary.daySalary}}k</h2>
  <button type="button" @click="person.name+='^'">修改姓名</button>
  <button type="button" @click="person.age++">增加年龄</button>
  <button type="button" @click="person.salary.monthSalary.daySalary++">增加薪资</button>
</template>


<script>
// 要使用h必须先引入
import { ref, watch, reactive} from "vue";
export default {
  name: "App",
  setup() {
    
    //数据
    let sum = ref(0);
	let msg = ref("你好啊");
	let person = reactive({
		name:"张三",
		age:18,
		salary:{
			monthSalary:{
				daySalary: 20,
			}
		},
	})
	
	
	/*
	情况一：监视ref定义的一个响应式数据，watch的第三个参数可以传一个对象
	当监视的对象是一个基本数据类型时，设置immediate后第一次加载的oldValue为undefined
	*/
	// watch(sum, (newValue, oldValue)=>{
	// 	{
	// 		console.log('sum的值改变了！原来的值：' + oldValue + "，新的值：" + newValue);
	// 	}
	// }, {immediate: true})
	
	/*
	情况二：监视ref定义的多个响应式数据
	监视的对象是一个数组时，设置immediate后第一次加载的oldValue为一个空数组
	*/
	// watch([sum, msg], (newValue, oldValue)=>{
	// 	{
	// 		console.log('sum或msg的值改变了！原来的值：' + oldValue + "，新的值：" + newValue);
	// 	}
	// }, {immediate:true})
	
	/*
	情况三：监视reactive定义的响应式数据
	注意：
	1.oldValue的值也被修改了，所以无法获取正确的oldValue
	2.强制开启了deep配置
	*/
	// watch(person, (newValue, oldValue)=>{
	// 	{
	// 		console.log('person的值改变了！原来的值：' + oldValue + "，新的值：" + newValue);
	// 	}
	// }, {deep:false}) //deep无效
	
	//情况四：监视reactive定义的响应式数据中的某一个
	// watch(()=>person.age, (newValue, oldValue)=>{
	// 	{
	// 		console.log('person的age改变了！原来的值：' + oldValue + "，新的值：" + newValue);
	// 	}
	// })
	
	//情况五：监视reactive定义的响应式数据中的某些
	// watch([()=>person.age, ()=>person.name], (newValue, oldValue)=>{
	// 	{
	// 		console.log('person的age或name改变了！原来的值：' + oldValue + "，新的值：" + newValue);
	// 	}
	// })
	
	// 特殊情况
	watch(()=>person.salary, (newValue, oldValue)=>{
		{
			console.log('person的salary改变了！原来的值：' + oldValue + "，新的值：" + newValue);
		}
	}, {deep:true})
	
    return {
      // 返回的是对象且键值对一样，可以省略键名！
      sum,
	  msg,
	  person,
    };
  },
};
</script>
