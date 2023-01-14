<template>
  <!-- vue3组件中可以没有根标签 -->
  <h1>一个人的信息</h1>
  <!-- 必须返回才能使用！ -->
  <h1>姓名：{{name}}</h1>
  <h1>年龄：{{age}}</h1>
  <button @click="sayHello">说话</button>
</template>

<script>
// 要使用h必须先引入
import {h} from 'vue'
export default {
  name: "App",
  setup() {
    //数据
    // let name = "张三";
    // let age = 18;
    //函数
    // function sayHello() {
    //   alert(`我的名字是：${name}，我${age}岁了！哈哈哈哈！`);
    // }
    // return {
    //   // 返回的是对象且键值对一样，可以省略键名！
    //   name,
    //   age,
    //   sayHello,
    // };
    
    return ()=> h('h1', '简写')
  },
};
</script>
