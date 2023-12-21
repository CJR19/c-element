<script lang="ts" setup>
import { computed, h } from 'vue'
import { useData } from 'vitepress'
import * as pagesData from '../pages.data'
// import { tsParticles } from "@tsparticles/engine";
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

function raf(callback) {
  requestAnimationFrame(() => {
    requestAnimationFrame(callback)
  })
}



</script>
<template>
  <!-- 自定义 VPHomeHero 组件 -->
  <!-- <sidebar :route="route" /> -->
  <div class="c-hero">
    <div class="c-hreo-menu">

    </div>
  </div>
</template>


<style scoped lang="scss">



</style>






