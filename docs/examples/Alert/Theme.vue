<template>
    <div class="md-alert">
      <c-alert type="success" effect="dark">this is the alert</c-alert>
      <c-alert type="warning" effect="dark">this is the alert</c-alert>
      <c-alert type="info" effect="dark">this is the alert</c-alert>
      <c-alert type="danger" effect="dark">this is the alert</c-alert>
    </div>
</template>

<style scoped>
.md-alert{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>