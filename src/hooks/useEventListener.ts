import {  onMounted,onBeforeMount,isRef, watch,unref} from 'vue'
import type { Ref } from 'vue'
export default function useEventListener(
    target: Ref<EventTarget | null> | EventTarget,
    event: string,
    handler: (e:Event) => any
){
    if (isRef(target)) {
        watch(target, (val, oldVal) => {
            oldVal?.removeEventListener(event, handler)
            val?.addEventListener(event, handler)     
        })
    }else {
        onMounted(()=>{
            target.addEventListener(event,handler)
        })
    }
    onBeforeMount(()=>{
        unref(target)?.removeEventListener(event,handler)
    })
}