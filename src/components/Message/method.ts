import { render,h } from 'vue'
import type { createMessageProps,MessageContext } from './types'
import MessageConstructor from './Message.vue'

let seed = 1
const instances: MessageContext[] = []

export const createMessage = (props: createMessageProps) => {
    const id = `message_${seed++}`
    const container = document.createElement('div')
    const onDestory = ()=>{   
        const index = instances.findIndex(item => item.id === id)
        if(index === -1) return
        instances.splice(index,1)   
        render(null,container)      
    }
    const newProps = {...props,onDestory}
    const vnode = h(MessageConstructor,newProps)
    render(vnode,container)
    document.body.appendChild(container.firstElementChild!)
    const instance: MessageContext = {
        id,
        vnode,
        props:newProps
    }
    instances.push(instance)
    return instance
}

export const getLastInstance = () => {
    return instances[instances.length - 1]

}