<template>
  <h2>{{person}}</h2>
  <hr >
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{salary.monthSalary.daySalary}}k</h2>
  <button type="button" @click="name+='~'">修改姓名</button>
  <button type="button" @click="age++">增加年龄</button>
  <button type="button" @click="salary.monthSalary.daySalary++">增加薪资</button>
</template>


<script>
import { reactive, toRef, toRefs} from "vue";
export default {
  name: "App",
  setup() {
    
    //数据
	let person = reactive({
		name:"张三",
		age:18,
		salary:{
			monthSalary:{
				daySalary: 20,
			}
		},
	})
	
	console.log("xxx", toRefs(person));
	
    return {
      // 返回的是对象且键值对一样，可以省略键名！
	  person,
	  ...toRefs(person),
    };
  },
};
</script>
