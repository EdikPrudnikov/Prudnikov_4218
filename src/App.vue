<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <router-view /> <!-- Это будет отображать маршруты -->
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'; // Импорт Sidebar

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
#app {
  display: flex; /* flexbox для боковой панели и контента */
}
.content {
  margin-left: 20px; /* Отступ, чтобы не перекрывать боковую панель */
  padding: 1em; /* Отступы для контента */
  flex: 1; /* Заполняется оставшееся пространство */
}
</style>
