import { render,h,shallowReactive } from 'vue'
import type { createMessageProps,MessageContext } from './types'
import MessageConstructor from './Message.vue'
import { useIndex } from '@/hooks/useZindex'
let seed = 1
const instances:MessageContext[] = shallowReactive([])

export const createMessage = (props: createMessageProps) => {
    const { nextZIndex } = useIndex()  
    const id = `message_${seed++}`
    const container = document.createElement('div')
    const onDestory = ()=>{   
        const index = instances.findIndex(item => item.id === id)
        if(index === -1) return
        instances.splice(index,1)   
        render(null,container)      
    }
    const manualDestroy = ()=>{
        const instance = instances.find(item => item.id === id)
        if (instance) {
            instance.vm.exposed!.visible.value = false
        }
    }
    const newProps = {
        ...props,
        onDestory,
        id,
        zIndex:nextZIndex()
    }
    const vnode = h(MessageConstructor,newProps)
    render(vnode,container)
    document.body.appendChild(container.firstElementChild!)
    const vm = vnode.component!
    const instance: MessageContext = {
        id,
        vnode,
        vm,
        props:newProps,
        destory:manualDestroy
    }
    instances.push(instance)
    return instance
}

export const getLastInstance = () => {
    return instances[instances.length - 1]
}

export const getLastBottomOffset = (id:string) => {
    const index = instances.findIndex(item => item.id === id)
    if(index <= 0 ) { 
        return 0
    } else {
        const preInstance = instances[index - 1]
        return preInstance.vm.exposed!.bottomOffset.value
    }
}

export const closeAll = () => {
    instances.forEach(instance => {
        instance.destory()
      })
}