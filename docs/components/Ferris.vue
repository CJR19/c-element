<template>
    <div class="c-ferris" ref="ferrisRef">
        <div class="c-ferris--item" ref="ferrisItemRefs" v-for="(item, index) in ferris" :key="index" :style="{
            left: `${item.x}px`,
            top: `${item.y}px`,

            backgroundColor: item.color,
            opacity: index === activeIndex ? 1 : 0.5,
            filter: `blur(${index === activeIndex ? 0 : 5}px)`,
            cursor: index === activeIndex ? 'pointer' : 'default',

            zIndex: index === activeIndex ? 100 : 'auto',
        }">
            <p style="font-size: 25px;color: #fff; ">{{ index }}</p>
        </div>
        <div 
            class="c-ferris--center" 
            ref="ferrisCenterRef" 
            v-if="ferris && ferris.length" 
            :style="{
                backgroundColor: ferris[activeIndex].color,
            }"
        >1</div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref, onMounted, watch, nextTick, watchEffect } from 'vue'

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    itemWidth: {
        type: Number,
        default: 100
    },
    itemHeight: {
        type: Number,
        default: 100
    }
})

const ferris = ref()
const ferrisRef = ref<HTMLElement>()
const ferrisCenterRef = ref()
const ferrisItemRefs = ref<HTMLElement[]>([])


const activeTimes = ref(0)
const activeIndex = ref(0)
watch(activeIndex, (newVal, oldVal) => {
    if (newVal < 0) {
        activeIndex.value = props.data.length - 1
    }
    if (newVal > props.data.length - 1) {
        activeIndex.value = 0
    }
})

watchEffect(()=>{
    if (ferrisRef.value) {
        ferrisRef.value.style.setProperty('--item-width', `${props.itemWidth}px`)
        ferrisRef.value.style.setProperty('--item-height', `${props.itemHeight}px`)
        const parentDomCenter = {
            x: ferrisRef.value!.clientWidth / 2,
            y: ferrisRef.value!.clientHeight / 2
        }
        const positions = getPosition(parentDomCenter.x, parentDomCenter, props.data.length, 0)
        const ferrisWidth = getComputedStyle(ferrisRef.value!).getPropertyValue("--item-width")
        const ferrisHeight = getComputedStyle(ferrisRef.value!).getPropertyValue("--item-height")
      
        const offsetPosition = positions.map(item => {
            return {
                x: item.x - parseInt(ferrisWidth) / 2,
                y: item.y - parseInt(ferrisHeight) / 2
            }
        })
        ferris.value = props.data.map((item, index) => {
            return {
                ...(item as object),
                ...offsetPosition[index]
            }
        })
    }

})

const move = async () => {
    activeTimes.value++
    await nextTick()
    const angleStep = 360 / props.data.length;
    ferrisRef.value!.style.transform = `rotate(${angleStep * (activeTimes.value)}deg)`
    ferrisCenterRef.value.style.transform = `rotate(${-angleStep * (activeTimes.value)}deg)`
    ferrisItemRefs.value.forEach((item: any, index: number) => {
        item.style.transform = `rotate(${-angleStep * (activeTimes.value)}deg)`
    })
    activeIndex.value = activeIndex.value - 1
}

const back = async () => {
    activeTimes.value--
    await nextTick()
    const angleStep = 360 / props.data.length;
    ferrisRef.value!.style.transform = `rotate(${angleStep * (activeTimes.value)}deg)`
    ferrisCenterRef.value.style.transform = `rotate(${-angleStep * (activeTimes.value)}deg)`
    ferrisItemRefs.value.forEach((item: any, index: number) => {
        item.style.transform = `rotate(${-angleStep * (activeTimes.value)}deg)`
    })
    activeIndex.value = activeIndex.value + 1
}

defineExpose({
    move,
    back
})

// 角度转为弧度
function angleToRadian(angle: number) {
    return angle * Math.PI / 180
}

type position = {
    x: number,
    y: number
}
/**
 * @description: 获取每个顶点位置
 * @param {number} r 半径
 * @param {position} center 原点
 * @param {number} count 个数
 * @param {number} startAngle 起始角度
 */
function getPosition(
    r: number,
    center: position,
    count: number,
    startAngle: number = 0) {
    const positions: position[] = [];
    const angleStep = 360 / count;
    for (let i = 0; i < count; i++) {
        const angle = angleToRadian(startAngle + i * angleStep);
        const x = center.x + r * Math.cos(angle);
        const y = center.y + r * Math.sin(angle);
        positions.push({ x, y });
    }

    return positions
}


onMounted(() => {

})


</script>
    
<style lang="scss" scoped>

.c-ferris {
    --item-width: 100px;
    --item-height: 100px;
    --item-left-offset: calc(var(--item-width) / -2);
    --item-top-offset: calc(var(--item-height) / -2);
    height: 100%;
    aspect-ratio: 1;
    position: relative;
    background-color: #ccc;
    transition: all 0.8s;

    &--item {
        width: var(--item-width);
        height: var(--item-height);
        position: absolute;
        transition:
            transform 0.9s,
            width 0.9s,
            height 0.9s,
            filter 1s,
            left 0.9s,
            top 0.9s,
            background-color 0.8s,
            z-index 1.8s ease-in-out;
        // border-radius: 50%;
    }

    &--center {
        width: var(--item-width);
        height: var(--item-height);
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: var(--item-top-offset);
        margin-left: var(--item-left-offset);
        // background-color: #ccc;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        color: #000;
        transition: all 0.8s;
    }

}
</style>