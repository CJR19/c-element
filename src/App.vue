<template>
  <div class="test" v-loading="visible" >
    asd
  </div>
  <div class="test" v-loading="visible2">
    asd
  </div>
    c-input
  <Uploader />
</template>

<script setup lang="ts">

import { onMounted,ref } from 'vue';
import { createLoading } from './components/Loading/methods';
import Uploader from './components/Uploader/Uploader.vue'
const visible = ref(true)
const visible2 = ref(true)




onMounted(()=>{
  // const loading = createLoading()
  // console.log(loading)
  // setTimeout(() => {
  //   loading.close()
  // }, 2000);
})

</script>


<style>
.test {
  width: 200px;
  height: 200px;
}
</style>
