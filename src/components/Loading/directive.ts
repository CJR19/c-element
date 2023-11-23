import type { Directive } from 'vue'
import { createLoading,removeLoading } from './methods'

export const vLoading:Directive = {
    mounted(el, binding) {
        if (binding.value) {
            el.classList.add('c-loading-position');
            createLoading({},el);
        }
    },
    updated(el, binding) {
        if (binding.value && binding.value !== binding.oldValue) {
            el.classList.add('c-loading-position');
            createLoading({},el);
        } else if (!binding.value) {
            removeLoading(el);
            el.classList.remove('c-loading-position');        
            el.removeAttribute('loading_child_id');
        }
    },
    unmounted(el) {
        removeLoading(el);
        el.classList.remove('c-loading-position');
        el.removeAttribute('loading_child_id');
        
    }
}