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
import { ref, reactive, watchEffect} from "vue";
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
	
	/**
	 * 不指明监视哪个属性，监视的回调函数中用到哪个属性，就监视哪个属性
	 * 下面的例子中，只要sum和person.age以及person.salary.monthSalary.daySalary发生了改变
	 * watchEffect就会监视到并打印
	 * */
	watchEffect(()=>{
		// 报错
		const x1 = sum.value
		const x2 = person.age
		const x3 = person.salary.monthSalary.daySalary
		console.log("我改变了！")
	})
	
    return {
      // 返回的是对象且键值对一样，可以省略键名！
      sum,
	  msg,
	  person,
    };
  },
};
</script>
