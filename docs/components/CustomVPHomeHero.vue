<script lang="ts" setup>
import { computed, h, onMounted,ref,nextTick } from 'vue'
import { useData } from 'vitepress'
import * as pagesData from '../pages.data'
import { loadSlim } from "tsparticles-slim"; 
import paticlesOptions from './particles.js'
import Ferris from './Ferris.vue';
import Pointer from './Pointer.vue';
// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, page, theme } = useData()

const route = computed(() => {
  return theme.value.sidebar
})

const sidebar = (props: any) => {
  let level = props.level || 1
  const list = props.route.map((item: any) => {
    let content: any
    if (item.items && item.items.length > 0) {
      content = h('div', [
        h('h' + level, item.text),
        h(sidebar, { route: item.items, level: level + 1 })
      ])
    } else {
      content = h(`${level === 1 ? 'h1' : 'p'}`, [
        item.text,
        h('a', { href: item.link }, item.link)
      ])
    }
    return h('li', content)
  })
  return h('ul',
    {
      style: { 'padding-left': '15px' }
    }
    , list)
}               
const data = [
  {
    name: 'css',
    color: '#f00'
  },
  {
    name: 'css',
    color: '#222'
  },
  {
    name: 'html',
    color: '#0f0'
  },

  {
    name: '组件',
    color: '#f0f'
  },
  {
    name: '指令',
    color: '#ff0'
  },
  {
    name: '前端知识',
    color: '#0f2'
  },
  {
    name: '前端知识',
    color: '#0ff'
  },
]

const particlesInit = async engine => {
    await loadSlim(engine);
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

const ferrisRef = ref<any>(null)

const move = async () => {
    await nextTick()
    ferrisRef.value.move()
}
const back = async () => {
    await nextTick()
    ferrisRef.value.back()
}


</script>
<template>
  <!-- 自定义 VPHomeHero 组件 -->
  <!-- <sidebar :route="route" /> -->
  <Pointer />

  <div class="c-hero">
    <div class="c-hreo-menu">
      <Ferris :data="data" ref="ferrisRef"/>
    </div>
    <c-button @click="move">move</c-button>    
  </div>
  <!-- particles 背景 -->
  <vue-particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="paticlesOptions"
  />
</template>


<style scoped lang="scss">
.c-hero {
  position: relative;
  display: flex;
  background-color: rgba($color: #fff, $alpha: .3);
  width: 100%;
  height: 560px;
  overflow: hidden;
  z-index: 1;
  // pointer-events: none;
}

.c-hreo-menu {
  // width: 500px;
  height: 100%;
}

</style>






