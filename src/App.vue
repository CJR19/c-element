<template>
  <Tabs v-model="tabsActive">
    <Tab name="1" label="label1" icon="fa-solid fa-user-secret"></Tab>
    <Tab name="2" label="label2" icon="fa-solid fa-user-secret"></Tab>
    <Tab name="3" label="label3" icon="fa-solid fa-user-secret"></Tab>
  </Tabs>
  <Icon icon="fa-solid fa-user-secret"  :size="iconSize" />
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="primary"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="success"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="warning"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="info"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="danger"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" color="pink"/>
  <br>
  <Tooltip content="你好" placement="top">
    <template #content>
      你好
    </template>
    <Icon icon="fa-solid fa-user-secret"  size="5x" color="pink"/>
  </Tooltip>

  <Dropdown :menu-options="menuOptions" content="你好" placement="top" trigger="hover"  >
    <Icon icon="fa-solid fa-user-secret"  size="5x" color="pink"/>
  </Dropdown>

  <Tooltip content="你好" :popper-options="options" placement="top" trigger="click" manual ref="TooltipRef">
    <template #content>
      <div style="display: inline-block;background-color: #fff;padding: 0px;border:1px solid #ccc">你好</div>
    </template>
    <Icon icon="fa-solid fa-user-secret"  size="5x" color="pink"/>
  </Tooltip>
  <Button type="primary" @click="openTooltip">打开</Button>
  <Button type="primary" @click="closeTooltip">关闭</Button>
  <br>
  <a href="#">
    link
  </a>
  <h1>hello</h1>
  <h2>hello</h2>
  <h3>hello</h3>
  <h4>hello</h4>
  <Button plain>plain</Button>
  <Button round>round</Button>
  <Button circle>circle</Button>
  <Button disabled>disabled</Button>
  <br><br>
  <Button type="primary">primary</Button>
  <Button type="success">primasuccessry</Button>
  <Button type="info">info</Button>
  <Button type="danger">danger</Button>
  <Button type="warning">warning</Button>
  <br><br>
  <Button type="primary" plain>primary</Button>
  <Button type="success" plain>primasuccessry</Button>
  <Button type="info" plain>info</Button>
  <Button type="danger" plain>danger</Button>
  <Button type="warning" plain>warning</Button>
  <br><br>
  <Button type="primary" loading >warning</Button>
  <Button type="primary"  icon="fa-solid fa-user-secret" >warning</Button>
  <br><br>
  {{ openValue }}

  <Collapse v-model="openValue">
    <CollapseItem name="title1">
      <div>
        content1
      </div>
    </CollapseItem>
    <CollapseItem name="title2">
      <div>
        content2
      </div>
    </CollapseItem>
    <CollapseItem name="title3" >
      <div>
        content3
      </div>
    </CollapseItem>
  </Collapse>
  <br><br>
  <Alert type="success" title="通知" description="描述" show-icon></Alert>
  <Alert type="info" title="通知" description="描述" show-icon></Alert>
  <Alert type="warning" title="通知" description="描述" show-icon></Alert>
  <Alert type="danger" title="警告" show-icon>
    <template #description>
      <h3>
        <a href="https://www.baidu.com">自定义链接</a>
      </h3>
    </template>
  </Alert>
  
  <Alert type="success" title="通知" description="描述" show-icon effect="dark"></Alert>
  <Alert type="info" title="通知" description="描述" show-icon effect="dark"></Alert>
  <Alert type="warning" title="通知" description="描述" show-icon effect="dark"></Alert>
  <Alert type="danger" title="警告" show-icon effect="dark">
    <template #description>
      <h3>
        <a href="https://www.baidu.com">自定义链接</a>
      </h3>
    </template>
  </Alert>

  <!-- <Message show-close :duration="0" >12312321</Message> -->
</template>

<script setup lang="ts">
import { ref,onMounted, h } from 'vue';
import Button from './components/Button/Button.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';
import Collapse from './components/Collapse/Collapse.vue';
import Icon from './components/Icon/Icon.vue'
import Alert from './components/Alert/Alert.vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Dropdown from '@/components/Dropdown/Dropdown'
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'

import { createMessage } from './components/Message/method';
import type { ButtonInstance } from './components/Button/types';
import type { TooltipInstance } from './components/Tooltip/types';
import type { size } from './components/Icon/types';
import type { Options } from '@popperjs/core';
import type { MenuOption } from './components/Dropdown/types';


const ButtonRef = ref<ButtonInstance | null>(null)
const TooltipRef = ref<TooltipInstance | null>(null)
const openValue = ref<string[]>([])
const trigger = ref<'hover' | 'click'>('hover')
const iconSize = ref<size>('5x')
const options: Partial<Options> = { placement: 'top-end', strategy: 'fixed' }
const menuOptions:MenuOption[] = [
  { key:1,label:'1111' },
  { key:2,label:h('b','this is bold') },
  { key:3,label:'333' },
  { key:4,label:'444' },
]
const openTooltip = () => {
  TooltipRef.value?.show()
}
const closeTooltip = () => {
  TooltipRef.value?.hide()
}

const tabsActive = ref('abc')

onMounted(()=>{

  createMessage({message:'hello world1',duration:2000,showClose:true,})
  setTimeout(() => {
    createMessage({message:'hello world1',duration:2000,showClose:true,type:'success'})
  }, 1000);
  setTimeout(() => {
    createMessage({message:'hello world2',duration:2000,showClose:true,type: 'danger'})
  }, 2000);
  setTimeout(() => {
    createMessage({message:'hello world3',duration:2000,showClose:true, type: 'warning'})
  }, 3000);
  setTimeout(() => {
    createMessage({message:'hello world3',duration:2000,showClose:true, type: 'info'})
  }, 4000);
  if (ButtonRef.value) {
    console.log('button ref',ButtonRef.value.ref)
  }
  setTimeout(() => {
    trigger.value = 'click'
    openValue.value = ['title1','title2']
    tabsActive.value = 'ccc'
  }, 2000);
})

</script>


<style scoped>
.c-alert {
  margin-top: 10px;
}
</style>
