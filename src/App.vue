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
  <Button type="warning" plain>warning</Button><br><br>


  
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import Button from './components/Button/Button.vue';
import type { ButtonInstance } from './components/Button/types';

const ButtonRef = ref<ButtonInstance | null>(null)

onMounted(()=>{
  if (ButtonRef.value) {
    console.log('button ref',ButtonRef.value.ref)
  }
})

</script>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
