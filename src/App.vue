<template>
  <Icon icon="fa-solid fa-user-secret"  :size="iconSize" />
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="primary"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="success"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="warning"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="info"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="danger"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" color="pink"/>
  <br>
  <Tooltip content="你好" placement="top" :trigger="trigger">
    <template #content>
      你好
    </template>
    <Icon icon="fa-solid fa-user-secret"  size="5x" color="pink"/>
  </Tooltip>

  <Tooltip content="你好" placement="top" trigger="hover"  :open-delay="200">
    <Icon icon="fa-solid fa-user-secret"  size="5x" color="pink"/>
  </Tooltip>

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


</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import Button from './components/Button/Button.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';
import Collapse from './components/Collapse/Collapse.vue';
import Icon from './components/Icon/Icon.vue'
import Alert from './components/Alert/Alert.vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'

import type { ButtonInstance } from './components/Button/types';
import type { TooltipInstance } from './components/Tooltip/types';
import type { size } from './components/Icon/types';
import type { Options } from '@popperjs/core';

const ButtonRef = ref<ButtonInstance | null>(null)
const TooltipRef = ref<TooltipInstance | null>(null)
const openValue = ref<string[]>([])
const trigger = ref<'hover' | 'click'>('hover')
const iconSize = ref<size>('5x')
const options: Partial<Options> = { placement: 'top-end', strategy: 'fixed' }

const openTooltip = () => {
  TooltipRef.value?.show()
}
const closeTooltip = () => {
  TooltipRef.value?.hide()
}
onMounted(()=>{
  if (ButtonRef.value) {
    console.log('button ref',ButtonRef.value.ref)
  }
  setTimeout(() => {
    trigger.value = 'click'
    openValue.value = ['title1','title2']
  }, 2000);
})

</script>


<style scoped>
.c-alert {
  margin-top: 10px;
}
</style>
