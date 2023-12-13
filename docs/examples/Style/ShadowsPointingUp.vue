<template>
    <div class="md-shadows">
      <div class="shadow-box" v-for="n in 24" :class="'shadow-up-' + n" :key="`b-${n}`">
        .shadow-up-{{ n }}
      </div>
    </div>
  </template>
  
  <style lang="scss">
  .md-shadows{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    justify-content: center;
    gap: 50px;
    background-color: #fff;

  }
  .shadow-box {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-radius: 50%;
  }

  </style>