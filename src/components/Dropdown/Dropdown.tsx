import { defineComponent ,Fragment,ref} from 'vue'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { MenuOption } from './types'
import type { PropType } from 'vue'
import type { Placement, Options } from '@popperjs/core'
import type { TooltipInstance } from '../Tooltip/types'

export default defineComponent({
    name:"CDropdown",
    props: {
        menuOptions: {
            type: Array as PropType<MenuOption[]>,
            required:true
        },
        placement: {
            type: String as PropType<Placement>,
            default: 'bottom'
        },
        trigger : {
            type: String as PropType<'hover' | 'click'>,
            default: 'hover'
        },
        transition: {
            type: String,
            default: 'fade'
        },
        openDelay: {
            type: Number,
            default: 0
        },
        closeDelay: {
            type: Number,
            default: 0
        },
        popperOptions: {
            type: Object as PropType<Options>,
        },
        munuOptions: {
            type: Array as PropType<MenuOption[]>
        },
        hideAfterClick: {
            type: Boolean,
            default: true
        },
        manual: {
            type: Boolean
        }
    },
    emits:['visible-change', 'select'],
    setup(props, { slots,emit,expose }) {
        const tooltipRef = ref<TooltipInstance | null>(null)
        const itemClick = (e:MenuOption)=>{
            if (e.disabled) {
                return
            }
            emit('select',e)
            if (props.hideAfterClick) {
                tooltipRef.value?.hide()
            }
        }
        const visibleChange = (e:boolean)=> {
            emit('visible-change',e)
        }
        expose({
            show: ()=>tooltipRef.value?.show(),
            hide: ()=>tooltipRef.value?.hide()
        })
        return ()=>(
            <div class="c-dropdown">
                <Tooltip
                    trigger={props.trigger}
                    placement={props.placement}
                    popper-options={props.popperOptions}
                    open-delay={props.openDelay}
                    close-delay={props.closeDelay}
                    manual={props.manual}
                    ref={tooltipRef}
                    onVisible-change={visibleChange}
                >    
                    {{
                        default: ()=> slots.default && slots.default(),
                        content: ()=> (
                            <ul class="c-dropdown__menu">
                                {
                                    props.menuOptions.map(item=>{
                                        return (
                                            <Fragment key={item.key}>
                                                { item.disabled ? <li role="spearator" class="divided-placeholder"></li>: '' }
                                                <li  
                                                    id={`dropdown-item-${item.key}`}
                                                    class={{
                                                        'c-dropdown__item': true,
                                                        'is-disabled': item.disabled,
                                                        'is-divided' : item.divided
                                                    }}
                                                    onClick={()=> itemClick(item)}
                                                >
                                                    {item.label}
                                                </li>
                                            </Fragment>
                                        )
                                    })
                                }
                            </ul>
                        )
                    }}
                </Tooltip>
            </div>
        )
    },
})