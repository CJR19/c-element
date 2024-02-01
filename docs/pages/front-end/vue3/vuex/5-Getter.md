# getters
getters类似于vue中的计算属性，使用场景：当state中的数据需要处理后再获取
```javascript
// index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{  // 用于存储数据
        count: 1,
        number: 2
    },
    getters:{ 
        getCount(state){
            return '您需要访问的值为' + state.count
        }
    }
    mutations:{
    },
    actions:{ 
    },
    modules:{
    }
})
```

## 获取getters数据方式1

```vue
<template>
	<div>
        <p>{{$store.state.count}}</p>
        <p>{{$store.getters.getCount}}</p>
    </div>
</template>

<script>
 export default {

 }
</script>
```

## 获取getters数据方式2

```vue
<template>
	<div>
        <p>{{count}}</p>
        <p>{{getCount}}</p>
    </div>
</template>

<script>
 import { mapState, mapGetters } from 'vuex'
 export default {
     computed: {
         ...mapState(['count'])
         ...mapGetters(['getCount'])
     }
 }
</script>
```

