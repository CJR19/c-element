<template>
    <div class="md-shadows">
      <div class="shadow-box inset-shadow">
        .inset-shadow
      </div>
      <div class="shadow-box inset-shadow-down">
        .inset-shadow-down
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .md-shadows{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    justify-content: center;
    gap: 50px;
    background-color: #fff;
  }
  .shadow-box {
    width: 130px;
    height: 130px;
    line-height: 130px;
    text-align: center;
    border-radius: 50%;
    white-space: nowrap;
  }

  </style>