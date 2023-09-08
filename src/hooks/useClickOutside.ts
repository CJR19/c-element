import { onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue'

const useClickOutside = (elementRef:Ref<HTMLElement | undefined>,callback:(e:MouseEvent)=>void) => {

  const handleClickOutside = (event:MouseEvent) => {
    if (elementRef.value && event.target && !elementRef.value.contains(event.target as HTMLElement)) {     
        callback(event)    
    } 
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });

}
export default useClickOutside