<template>
  <!-- vue3组件中可以没有根标签 -->
  <h1>一个人的信息</h1>
  <!-- 必须返回才能使用！ -->
  <h1>姓名：{{name}}</h1>
  <h1>年龄：{{age}}</h1>
  <h2>工作：{{job.type}}</h2>
  <h2>薪资：{{job.salary}}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
// 要使用h必须先引入
import {ref} from 'vue'
export default {
  name: "App",
  setup() {
    //数据
    let name = ref("张三");
    let age = ref(18);
    //新增一个对象
    let job = ref({
      type: '前端',
      salary:'10k'
    });
    //函数
    function changeInfo() {
      name.value = "李四";
      age.value = 22;
      //修改对象类型的值时，需要用`对象名.value.键 = xxx`
      job.value.type = 'Vue工程师';
      job.value.salary = '20k';
    }
    return {
      // 返回的是对象且键值对一样，可以省略键名！
      name,
      age,
      job,
      changeInfo,
    };
    
  },
};
</script>
