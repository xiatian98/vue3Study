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
	let person = ref({
		name:"张三",
		age:18,
		salary:{
			monthSalary:{
				daySalary: 20,
			}
		},
	})
	
	watch(sum, (newValue, oldValue)=>{
		{
			console.log('sum的值改变了！原来的值：' + oldValue + "，新的值：" + newValue);
		}
	})
	
	watch(person, (newValue, oldValue)=>{
		console.log('person的值改变了！原来的值：' + oldValue + "，新的值：" + newValue);
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
