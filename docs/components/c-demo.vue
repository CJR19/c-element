<template>
    <div class="demo-wrapper">
      <component :is="asyncComp"></component>
      <div 
        class="demo-source language-vue" 
        v-for="item,index in def.tabs" 
        :key="index" 
        v-html="def.parts[item]" 
      />
    </div>
  </template>

<script lang="ts" setup>
import "prismjs/themes/prism.css";
import { reactive ,onMounted,inject} from 'vue';
import { highlight } from '../utils/highlight'
import { defineAsyncComponent } from 'vue'
const props = defineProps<{
  path: string
  rawSource: string
  description?: string
}>()

type TabsType = Array<'Template'|'Script'|'Style'|'All'>
type Def = {
  tabs: TabsType,
  parts: {
    Template?: string,
    Script?: string,
    Style?: string,
    All?: string,
  }
}


const def = reactive<Def>({
  tabs: [],
  parts: {}
})

const modules = inject('c-examples') as Record<string, any>
const asyncComp = defineAsyncComponent(modules[`../../examples/${props.path}.vue`])

function parseTemplate (target:string, template:string) {
  const
    string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`,
    regex = new RegExp(string, 'g'),
    parsed = regex.exec(template) || []

  let res = ''
  if (parsed[1]) {
    res = highlight(parsed[1],'vue')
  }
  return res
}

function parseComponent (comp: string) {
  def.parts = {
    Template: parseTemplate('template', comp),
    Script: parseTemplate('script', comp),
    Style: parseTemplate('style', comp)
  }

  const tabs = [ 'Template', 'Script', 'Style' ]
    .filter(type => def.parts[ type ] )

  if (tabs.length > 1) {
    def.parts.All = highlight(comp,'vue')
    tabs.push('All')
  }

  def.tabs = tabs as TabsType
}

onMounted(() => {
  parseComponent(decodeURIComponent(props.rawSource))
})


</script>

<style scoped>

</style>
