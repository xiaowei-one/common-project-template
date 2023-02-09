import { ref } from 'vue'

export default {
  setup(){
    const count = ref<number>(0)

    return ()=>(
      <div>
        <span class="mr-2">tsx: { count.value }</span>
        <button onClick={() => count.value++ }>++</button>
      </div>
    )
  }
}