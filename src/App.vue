<template>

  <a href="#">link</a>
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
  
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import Button from './components/Button/Button.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';
import Collapse from './components/Collapse/Collapse.vue';
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

</style>
