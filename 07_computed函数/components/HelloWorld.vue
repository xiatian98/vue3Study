<template>
  <!-- vue3组件中可以没有根标签 -->
  <h1>一个人的信息</h1>
  <!-- 必须返回才能使用！ -->
  姓：<input type="text" v-model="person.firstName">
  <br>
  名：<input type="text" v-model="person.lastName">
  <br>
  全名：<input type="text" v-model="person.fullName">
</template>


<script>
// 要使用h必须先引入
import { reactive, computed } from "vue";
export default {
  name: "App",
  setup() {
    
    //数据
    //全部用reactive
    let person = reactive({
      firstName: '张',
      lastName: '三',
    })

    //计算属性
    //简写，没有考虑计算属性被修改的情况
    // person.fullName = computed(()=>{
    //   return person.firstName + "-" + person.lastName
    // })
	
	//完整写法，考虑到了计算属性被修改的情况
	person.fullName = computed({
		get(){
			return person.firstName + "-" + person.lastName
		},
		
		set(value){
			const nameArr = value.split("-")
			person.firstName = nameArr[0]
			person.lastName = nameArr[1]
		}
	})

    return {
      // 返回的是对象且键值对一样，可以省略键名！
      person,

    };
  },
};
</script>
