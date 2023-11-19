<template>

  <CDropdown :menu-options="menuOptions" content="你好" placement="top" trigger="hover"  >
    <Icon icon="fa-solid fa-user-secret"  size="5x" color="pink"/>
  </CDropdown>
  <CDropdown placement="bottom" :menu-options="menuOptions">
      <c-button type="primary"> Hover 下拉菜s单 </c-button>
  </CDropdown>
  <Tabs v-model="tabsActive">
    <Tab name="1" label="Template">
      Template
    </Tab>
    <Tab name="2" label="Script">
      Script
    </Tab>
    <Tab name="3" label="Style">
      Style
    </Tab>
    <Tab name="4" label="All">
      All
    </Tab>
  </Tabs>

  <TabPanels v-model="tabsActive">
    <TabPanel name="1">
      <div style="background-color: aqua;">
        <h1>Template</h1>
        <p>
          tttt
        </p>
      </div>
    </TabPanel>
    <TabPanel name="2">
      <div style="background-color: pink;">
        <h1>Script</h1>
        <p>
          ssss
        </p>
      </div>
    </TabPanel>
    <TabPanel name="3">
      <div style="background-color: red;">
        <h1>Style</h1>
        <p>
          aaaa
        </p>
      </div>
    </TabPanel>
    <TabPanel name="4">
      <div style="background-color: chartreuse;">
        <h1>All</h1>
        <p>
          bbb
        </p>
      </div>
    </TabPanel>
  </TabPanels>



    <br>
    <br>
    <br>
    <br>



  <cSelect v-model="SelectVal" placeholder="基础选择器" :options="options2"></cSelect>
  <p>可清除</p>
  <cSelect v-model="SelectVal" placeholder="基础选择器" :options="options2" clearable></cSelect>
  <p>自定义模板</p>
  <cSelect v-model="SelectVal" :render-label="customRender" placeholder="基础选择器" :options="options2" clearable></cSelect>
  <p>可筛选</p>
  <cSelect v-model="SelectVal" filterable placeholder="基础选择器" :options="options2" clearable></cSelect>
  <p>远程搜索</p>
  <cSelect v-model="SelectVal" filterable remote :remote-method="remoteFilter" placeholder="基础选择器" ></cSelect>
  <br>
  <Switch v-model="swtichVal" active-value="right" inactive-value="wrong"></Switch>
  <br>
  <Switch v-model="swtichVal" active-value="right" inactive-value="wrong" active-text="ON" inactive-text="OFF" ></Switch>
  <div style="width: 200px;">
    <Input clearable show-password  v-model="inputVal" placeholder="aaa" type="password"></Input>
    <Input clearable  v-model="inputVal" placeholder=""></Input>
    <Input clearable disabled  v-model="inputVal" placeholder=""></Input>
    <Input clearable readonly  v-model="inputVal" placeholder=""></Input>
  </div>
  <br>

  <Icon icon="fa-solid fa-user-secret"  :size="iconSize" />
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="primary"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="success"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="warning"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="info"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" type="danger"/>
  <Icon icon="fa-solid fa-user-secret"  size="5x" color="pink"/>
  <br>
  <Tooltip content="你好" placement="top">
    <template #content>
      你好
    </template>
    <Icon icon="fa-solid fa-user-secret"  size="5x" color="pink"/>
  </Tooltip>



  <Tooltip content="你好" :popper-options="options" placement="top" trigger="click" manual ref="TooltipRef">
    <template #content>
      <div style="display: inline-block;background-color: #fff;padding: 0px;border:1px solid #ccc">你好</div>
    </template>
    <Icon icon="fa-solid fa-user-secret"  size="5x" color="pink"/>
  </Tooltip>
  <Button type="primary" @click="openTooltip">打开</Button>
  <Button type="primary" @click="closeTooltip">关闭</Button>
  <br>
  <a href="#">
    link
  </a>
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
  <Button type="primary" loading >warning</Button>
  <Button type="primary"  icon="fa-solid fa-user-secret" >warning</Button>
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
  <Alert type="success" title="通知" description="描述" show-icon></Alert>
  <Alert type="info" title="通知" description="描述" show-icon></Alert>
  <Alert type="warning" title="通知" description="描述" show-icon></Alert>
  <Alert type="danger" title="警告" show-icon>
    <template #description>
      <h3>
        <a href="https://www.baidu.com">自定义链接</a>
      </h3>
    </template>
  </Alert>
  
  <Alert type="success" title="通知" description="描述" show-icon effect="dark"></Alert>
  <Alert type="info" title="通知" description="描述" show-icon effect="dark"></Alert>
  <Alert type="warning" title="通知" description="描述" show-icon effect="dark"></Alert>
  <Alert type="danger" title="警告" show-icon effect="dark">
    <template #description>
      <h3>
        <a href="https://www.baidu.com">自定义链接</a>
      </h3>
    </template>
  </Alert>
  <!-- <Message show-close :duration="0" >12312321</Message> -->
</template>

<script setup lang="ts">
import { ref,onMounted, h } from 'vue';
import Button from './components/Button/Button.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';
import Collapse from './components/Collapse/Collapse.vue';
import Icon from './components/Icon/Icon.vue'
import Alert from './components/Alert/Alert.vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import Input from '@/components/Input/Input.vue'
import Switch from '@/components/Switch/Switch.vue';
import cSelect from '@/components/Select/Select.vue';
import TabPanels from '@/components/TabPanels/TabPanels.vue'
import TabPanel from '@/components/TabPanels/TabPanel.vue'

import { createMessage } from './components/Message/method';
import type { ButtonInstance } from './components/Button/types';
import type { TooltipInstance } from './components/Tooltip/types';
import type { size } from './components/Icon/types';
import type { Options } from '@popperjs/core';
import type { MenuOption } from './components/Dropdown/types';
import type { SelectOption } from './components/Select/types';


const ButtonRef = ref<ButtonInstance | null>(null)
const TooltipRef = ref<TooltipInstance | null>(null)
const openValue = ref<string[]>([])
const trigger = ref<'hover' | 'click'>('hover')
const iconSize = ref<size>('5x')
const options: Partial<Options> = { placement: 'top-end', strategy: 'fixed' }
const menuOptions:MenuOption[] = [
  { key:1,label:'1111' },
  { key:2,label:h('b','this is bold') },
  { key:3,label:'333' },
  { key:4,label:'444' },
]
const openTooltip = () => {
  TooltipRef.value?.show()
}
const closeTooltip = () => {
  TooltipRef.value?.hide()
}

const tabsActive = ref('1')

const inputVal = ref()

const swtichVal = ref('right')

const SelectVal = ref('2')
const options2 = [
  { label: 'hello', value: '1' },
  { label: 'xyz', value: '2' },
  { label: 'testing', value: '3',disabled: true },
  { label: 'check', value: '4' }
]
const customRender = (option:any) => {
  return h('div',{ className: 'customStyle' },[
    h('b',{},option.label),
    h('span',{},option.value)
  ])
}
const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const remoteFilter = (query:string):Promise<SelectOption[]> => {
  return new Promise((resolve) => {
    if (query) {
      setTimeout(() => {
        const options = states.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase())
        }).map(label => {
          return { label, value: label }
        })
        resolve(options)
      }, 500)
    } else {
      resolve([])
    }
  })
}
const handleFetch = (query:string) => {
  if (!query) return Promise.resolve([])
  return fetch(`https://api.github.com/search/repositories?q=${query}`)
  .then(res => res.json())
  .then(( { items }) => {
    return items.slice(0, 10).map((item:any) => ({ label: item.name, value: item.node_id }))
  })
}

onMounted(()=>{

  createMessage({message:'hello world1',duration:2000,showClose:true,})
  setTimeout(() => {
    createMessage({message:'hello world1',duration:2000,showClose:true,type:'success'})
  }, 1000);
  setTimeout(() => {
    createMessage({message:'hello world2',duration:2000,showClose:true,type: 'danger'})
  }, 2000);
  setTimeout(() => {
    createMessage({message:'hello world3',duration:2000,showClose:true, type: 'warning'})
  }, 3000);
  setTimeout(() => {
    createMessage({message:'hello world3',duration:2000,showClose:true, type: 'info'})
  }, 4000);
  if (ButtonRef.value) {
    console.log('button ref',ButtonRef.value.ref)
  }
  setTimeout(() => {
    trigger.value = 'click'
    openValue.value = ['title1','title2']

  }, 2000);
})

</script>


<style>
.c-alert {
  margin-top: 10px;
}
.customStyle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
