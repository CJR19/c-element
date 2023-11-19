<template>
    <div class="md-alert">
      <c-alert type="success">this is the alert</c-alert>
      <c-alert type="warning">this is the alert</c-alert>
      <c-alert type="info">this is the alert</c-alert>
      <c-alert type="danger">this is the alert</c-alert>
    </div>
</template>

<style scoped>
.md-alert{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>