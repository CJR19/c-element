import { defineComponent } from 'vue'


// 接收一个虚拟节点（vNode）并将其渲染出来。
const RenderVnode = defineComponent({
    name: 'CRenderVnode',
    props: {
        vNode: {
            type: [String, Object],
            required: true
        }
    },
    setup(props) {
        return ()=> props.vNode
    }
})

export default RenderVnode