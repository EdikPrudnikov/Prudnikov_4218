<template>
  <div class="container">
      <h1>Страница "презентация"</h1>
      <p>Здесь будет информация о презентациях.</p>
      <button @click="openLink" class="custom3-button">Скачать презентацию ""</button>
      </div>
</template>
  
<script>

export default {
    name: 'goToButtonPPT5_6',

    methods: {
    openLink() {
      window.open('https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/VdzUBt0Z-QUWjQ', '_blank');
    }
  }
  };
</script>
  
<style scoped>

</style>