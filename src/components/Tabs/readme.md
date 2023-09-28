# 开发思路


期望的组件使用效果 ,可以单独使用，用过 v-model 来切换


<c-tabs v-model="tab">
    <c-tab name="mails" icon="mail" label="Mails" />
    <c-tab name="alarms" icon="alarm" label="Alarms" />
    <c-tab name="movies" icon="movie" label="Movies" />
</c-tabs>

<q-tab-panels v-model="tab" >
    <q-tab-panel name="mails">
        <div class="text-h6">Mails</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
    <q-tab-panel name="alarms">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
    <q-tab-panel name="movies">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
</q-tab-panels>

<script setup>
import { ref } from 'vue'

const tab = ref('mails')

</script>

分析
tabs 是一个可以滚动的容器，
tab 是其中的项