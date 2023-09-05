<template>
    <i 
        class="c-icon" 
        :class="{[`c-icon--${type}`]:type}"
        :style="curstomStyle"
        v-bind="$attrs"
    >
        <font-awesome-icon v-bind="fontawesomeProps" />
    </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { omit } from 'lodash-es'
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineOptions({
    name: 'CIcon',
    inheritAttrs: false
})
const props = defineProps<IconProps>()

const fontawesomeProps = computed(()=> omit(props, ['type', 'color']));

const curstomStyle = computed(()=> props.color ? { color: props.color }:{ })

</script>

<style scoped>

</style>