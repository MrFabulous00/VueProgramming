<template>
  <button @click="activeTab = 'TabA'">TabA</button>
  <button @click="activeTab = 'TabB'">TabB</button>
  <button @click="activeTab = 'TabC'">TabC</button>

  <TabA v-if="activeTab === 'TabA'" />
  <TabB v-if="activeTab === 'TabB'" />
  <TabC v-if="activeTab === 'TabC'" />
</template>

<script>
import TabA from "./TabA.vue";
import TabB from "./TabB.vue";
import TabC from "./TabC.vue";
export default {
  name: "App",
  components: { TabA, TabB, TabC },
  data() {
    return {
      activeTab: "TabA",
    };
  },
};
</script>
<!--이 방법으로 컴포넌트가 추가될 때마다 template에 추가해줘야하고 v-if에다가 렌더해줘야 하는 번거로움이 있다. 만약 여러 뎁스로 이루어진 컴포넌트를
구현하려고 거의 불가능에 가깝다.   -->

//
<component :is="activeTab" />
