/**
 * 自定义的钩子函数
 */
import { reactive, onMounted, onBeforeUnmount } from "vue";

// 需要export，外部文件才能使用
export default function () {
	//数据
	let point = reactive({
		x: 0,
		y: 0,
	})
	
	function savePoint(event){
		point.x = event.pageX
		point.y = event.pageY
		console.log(event.pageX, event.pageY)
	}
	
	onMounted(()=>{
		window.addEventListener('click', savePoint)
	})
	
	onBeforeUnmount(()=>{
		window.removeEventListener('click', savePoint)
	})
	
	return point
}
