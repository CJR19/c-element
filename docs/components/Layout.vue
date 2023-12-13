<script setup lang="ts">
import { computed, h, onMounted } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import * as pagesData from '../pages.data'
const { Layout } = DefaultTheme
// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter,page,theme } = useData()

console.log(pagesData.data)

const route = computed(() => {
  return theme.value.sidebar
})
console.log(route.value)

const sidebar = (props:any)=> {
  let level = props.level || 1
  const list = props.route.map((item:any)=>{
    let content:any
    if (item.items && item.items.length > 0) {
      content = h('div',[
        h('h'+level,item.text),
        h(sidebar,{route:item.items,level:level+1})
      ])
    }else {
      content = h(`${level===1?'h1':'p'}`,[
        item.text,
        h('a',{href:item.link},item.link)
      ])
    }
    return h('li',content) 
  })
  return h('ul',
  {
    style: {'padding-left': '15px'}
  }
  ,list)
}


</script>

<template>
  <Layout>
    <template #home-hero-before>
      <sidebar :route="route" />
    </template>
  </Layout>
  
</template>

