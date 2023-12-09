<script setup lang="ts">
import { computed, onMounted } from 'vue'
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

</script>

<template>
  <Layout>
    <template #home-hero-before>
        <div v-for="item in route">
            <h2>{{ item.text }}</h2>
            <ul>
                <li v-for="item2 in item.items">
                    <p>{{ item2.text }} <a :href="item2.link">{{ item2.link }}</a></p>                   
                </li>
            </ul>
        </div>
    </template>
  </Layout>
  
</template>