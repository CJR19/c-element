<template>
  <div class="demo-wrapper">

    <div class="c-card">

      <div class="c-card__header">
        <div class="c-card__header__title">{{ decodeURIComponent(description || "example") }}</div>
        <div class="c-card__header__options">
          <c-tooltip content="View on Github" placement="bottom">
            <a :href="github?decodeURIComponent(github): ''" target="_blank">
              <c-icon icon="fa-brands fa-github" size="2x" color="#616161"></c-icon>             
            </a>
          </c-tooltip>
          <c-tooltip content="View Source" placement="bottom">
            <c-icon @click="openSource" icon="fa-solid fa-code" size="2x" color="#616161" style="font-size: 10px;"></c-icon>
          </c-tooltip>
        </div>
      </div>

      <Transition v-on="transitionEvent">
        <div class="c-collapse-item__warpper " v-show="showSource">
          <div class="c-collapse-item__content source-box">
            <c-tabs v-model="tabsActive">
              <c-tab v-for="item, index in def.tabs" :name="item" :label="item">
              </c-tab>
            </c-tabs>

            <c-tab-panels v-model="tabsActive">
              <c-tab-panel v-for="item, index in def.tabs" :name="item">
                <div class="demo-source override language-vue" :key="index" v-html="def.parts[item]" />
              </c-tab-panel>
            </c-tab-panels>
          </div>
        </div>
      </Transition>

      <div class="c-card__content">
        <component :is="asyncComp"></component>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import "prismjs/themes/prism.css";
import { reactive, onMounted, inject, ref } from 'vue';
import { highlight } from '../utils/highlight'
import { defineAsyncComponent } from 'vue'
import { examplesKey } from "../utils/symbolKey";
const props = defineProps<{
  path: string
  rawSource: string
  description?: string
  github?: string
}>()



type TabsType = Array<'Template' | 'Script' | 'Style' | 'All'>
type Def = {
  tabs: TabsType,
  parts: {
    Template?: string,
    Script?: string,
    Style?: string,
    All?: string,
  }
}
const tabsActive = ref('Template')
const openSource = () => {
  showSource.value = !showSource.value
}

const def = reactive<Def>({
  tabs: [],
  parts: {}
})

const modules = inject(examplesKey) as Record<string, any>
const asyncComp = defineAsyncComponent(modules[`../../examples/${props.path}.vue`])

const showSource = ref(false)

const transitionEvent: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.classList.add("collapse-transition")
    el.style.height = "0"
  },
  enter(el) {
    el.style.height = el.scrollHeight + "px"
  },

  afterEnter(el) {
    el.classList.remove("collapse-transition")
    el.style.height = ""
  },

  beforeLeave(el) {
    el.style.height = el.scrollHeight + "px"

  },

  leave(el) {
    el.classList.add("collapse-transition")
    el.style.height = '0'
  },

  afterLeave(el) {
    el.classList.remove("collapse-transition")
    el.style.height = ""

  }
}

function parseTemplate(target: string, template: string) {
  const
    string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`,
    regex = new RegExp(string, 'g'),
    parsed = regex.exec(template) || []

  let res = ''
  if (parsed[1]) {
    res = highlight(parsed[1], 'vue')
  }
  return res
}

function parseComponent(comp: string) {
  def.parts = {
    Template: parseTemplate('template', comp),
    Script: parseTemplate('script', comp),
    Style: parseTemplate('style', comp)
  }

  const tabs = ['Template', 'Script', 'Style']
    .filter(type => def.parts[type])

  if (tabs.length > 1) {
    def.parts.All = highlight(comp, 'vue')
    tabs.push('All')
  }

  def.tabs = tabs as TabsType
}

onMounted(() => {
  parseComponent(decodeURIComponent(props.rawSource))
})


</script>

<style scoped lang="scss">
.override {
  margin: 0 !important;
  border-radius: 0 !important;
}

.demo-wrapper {
  margin: 20px 0;
}

.c-card {
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px 8px 4px 4px;


  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 500;
    color: #616161;
    border-bottom: 1px solid #e0e0e0;

    &__title {
      margin-left: -24px;
      padding: 2px 10px 2px 24px;
      background: #e0e0e0;
      color: #616161;
      position: relative;
      border-radius: 3px 5px 5px 0;

      &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        height: 0;
        border: 0 solid transparent;
        border-top-color: #bebebe;
        border-width: 9px 0 0 11px;
      }
    }

    &__options {
      font-size: 10px;
      display: flex;
      gap: 5px;

      .c-icon {
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;

        &:hover {
          background-color: #ccc;

        }
      }
    }
  }

  &__content {
    padding: 10px;
    max-height: 500px;
    overflow-y: auto;
            /* 调整滚动条样式 */
        &::-webkit-scrollbar {
            width: 8px; /* 设置滚动条宽度 */
        }
    
        &::-webkit-scrollbar-track {
            background-color: #f1f1f1; /* 设置滚动条背景颜色 */
        }
    
        &::-webkit-scrollbar-thumb {
            background-color: #888; /* 设置滚动条滑块颜色 */
            border-radius: 4px; /* 设置滚动条滑块圆角 */
        }
    
        &::-webkit-scrollbar-thumb:hover {
            background-color: #555; /* 设置滚动条滑块悬停时的颜色 */
        }
  }
}

.source-box {
  border: 1px solid #e0e0e0;
  padding-bottom: 0 !important;
}
</style>
