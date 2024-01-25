## props
Props 是一种特别的 attributes，你可以在组件上声明注册,下面是用ts标注props类型
 ```js
// 定义一个接口，限制每个Person对象的格式
 export interface PersonInter {
  id:string,
  name:string,
     age:number
    }
    
 // 定义一个自定义类型Persons
 export type Persons = Array<PersonInter>
 ```
 
 `App.vue`中代码：

 ```vue
<template>
 	<Person :list="persons"/>
 </template>
   
 <script lang="ts" setup name="App">
   import Person from './components/Person.vue'
   import {reactive} from 'vue'
     import {type Persons} from './types'
   
     let persons = reactive<Persons>([
      {id:'e98219e12',name:'张三',age:18},
       {id:'e98219e13',name:'李四',age:19},
        {id:'e98219e14',name:'王五',age:20}
      ])
    </script>
   
 ```
 
 `Person.vue`中代码：
使用 `defineProps` 宏
 ```Vue
<template>
 <div class="person">
  <ul>
      <li v-for="item in list" :key="item.id">
         {{item.name}}--{{item.age}}
       </li>
     </ul>
    </div>
    </template>
   
 <script lang="ts" setup name="Person">
 import {defineProps} from 'vue'
 import {type PersonInter} from '@/types'
   
   // 第一种写法：仅接收
 // const props = defineProps(['list'])
   
   // 第二种写法：接收+限制类型
 // defineProps<{list:Persons}>()
   
   // 第三种写法：接收+限制类型+指定默认值+限制必要性
 let props = withDefaults(defineProps<{list?:Persons}>(),{
      list:()=>[{id:'asdasg01',name:'小猪佩奇',age:18}]
   })
    console.log(props)
   </script>
   ```
 
