<template>
  <!-- vue3组件中可以没有根标签 -->
  <h1>一个人的信息</h1>
  <!-- 必须返回才能使用！ -->
  <h1>姓名：{{ person.name }}</h1>
  <h1>年龄：{{ person.age }}</h1>
  <h2>工作：{{ person.job.type }}</h2>
  <h2>薪资：{{ person.job.salary }}</h2>
  <h2>爱好：{{ person.hobbies }}</h2>
  <h2>测试：{{ person.job.test.test1.test2.test3 }}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
// 要使用h必须先引入
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    //全部用reactive
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端',
        salary: '10k',
        test: {
          test1: {
            test2: {
              test3: 666,
            },
          },
        },
      },
      hobbies: ['抽烟', '喝酒', '烫头'],
    })
    
    //函数
    function changeInfo() {
      person.name = "李四";
      person.age = 22;
      //修改对象类型的值时，需要用`对象名.value.键 = xxx`
      person.job.type = "Vue工程师";
      person.job.salary = "20k";
      person.job.test.test1.test2.test3 = 999;
      person.hobbies[0] = "卷前端";
      person.hobbies[1] = "卷后端";
      person.hobbies[2] = "卷算法";
    }

    return {
      // 返回的是对象且键值对一样，可以省略键名！
      person,
      changeInfo,
    };
  },
};
</script>
