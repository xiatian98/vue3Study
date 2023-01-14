<template>
  <HelloWorld @hello="showHelloMsg" msg="插槽？" status="200">
    <template v-slot:qwe>
      <span>夏天qwe</span>
    </template>
    <template v-slot:asd>
      <span>夏天asd</span>
    </template>
  </HelloWorld>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: {HelloWorld},
  setup(){
    function showHelloMsg(value){
      alert(`你触发了hello事件，收到的参数是：${value}！`);
    }
    return {
      showHelloMsg,
    }
  },
};
</script>
