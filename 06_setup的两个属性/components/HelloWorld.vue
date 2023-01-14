<template>
  <!-- vue3组件中可以没有根标签 -->
  <h1>一个人的信息</h1>
  <!-- 必须返回才能使用！ -->
  <h1 v-show="person.name">姓名：{{ person.name }}</h1>
  <h1 v-show="person.age">年龄：{{ person.age }}</h1>
  <button @click="test">测试触发Hello组件的Hello事件</button>
</template>


<script>
// 要使用h必须先引入
import { reactive } from "vue";
export default {
  name: "App",
  props: ['msg', 'status'], // App的属性
  emits:['hello'],//App声明的自定义事件，emits主要处理触发事件
  slots:['span'],
  setup(props, context) {
    // console.log('setup.props-->', props);
    // console.log('setup.context.attrs-->', context.attrs); // 和vue2中的$attrs一样
    // console.log('setup.context.emit-->', context.emit); //触发自定义事件
    console.log('setup.context.slots-->', context.slots); //插槽
    //数据
    //全部用reactive
    let person = reactive({
      name: '张三',
      age: 18,
    })

    //方法
    function test(){
      context.emit('hello', 666);
    }

    return {
      // 返回的是对象且键值对一样，可以省略键名！
      person,
      test,
    };
  },
};
</script>
