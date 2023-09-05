<template>
  <Icon icon="fa-solid fa-user-secret"  size="5x" />
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="primary"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="success"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="warning"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="info"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="danger"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" color="pink"/>
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

import type { ButtonInstance } from './components/Button/types';

const ButtonRef = ref<ButtonInstance | null>(null)
const openValue = ref([])

onMounted(()=>{
  if (ButtonRef.value) {
    console.log('button ref',ButtonRef.value.ref)
  }
})

</script>


<style scoped>
.c-alert {
  margin-top: 10px;
}
</style>
