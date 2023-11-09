<template>
    <div class="c-py-sm">
        <Button>hello</Button>
        <Button plain>plain</Button>
        <Button round>round</Button>
        <Button circle>circle</Button>
        <Button disabled>disabled</Button>
    </div>
    <div class="c-py-sm"> 
        <Button type="primary">primary</Button>
        <Button type="success">success</Button>
        <Button type="info">info</Button>
        <Button type="danger">danger</Button>
        <Button type="warning">warning</Button>
    </div>
    <div class="c-py-sm">
        <Button type="primary" plain>primary</Button>
        <Button type="success" plain>success</Button>
        <Button type="info" plain>info</Button>
        <Button type="danger" plain>danger</Button>
        <Button type="warning" plain>warning</Button>
    </div>
    <div class="c-py-sm">
        <Button type="primary" loading >warning</Button>
        <Button type="primary"  icon="fa-solid fa-user-secret" >warning</Button>        
    </div>        
</template>

<script setup lang="ts">
import Button from "@/components/Button/Button.vue"

</script>

