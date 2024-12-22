<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
#app {
  display: flex;
}
.content {
  margin-left: 10px;
  padding: 1em;
  flex: 1;
}
</style>
