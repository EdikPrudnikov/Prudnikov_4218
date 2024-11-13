<template>
    <div class="sidebar">
      <button @click="goToHome"class="custom-button">Главная</button>
      <p><button @click="goToLol"class="custom2-button">О Lol</button></p>
      <p><button @click="goToAbout"class="custom2-button">О нас</button></p>
      <p><button @click="goToAbout"class="custom2-button">О нас</button></p>
      <p><button @click="goToAbout"class="custom2-button">О нас</button></p>
      <p><button @click="goToAbout"class="custom2-button">О нас</button></p>
      <p><button @click="goToAbout"class="custom2-button">О нас</button></p>
      <p><button @click="goToAbout"class="custom2-button">О нас</button></p>
      <p><button @click="goToAbout"class="custom2-button">О нас</button></p>
      <p><button @click="goToAbout"class="custom2-button">О нас</button></p>

      <button @click="goToDowland"class="custom2-button">Скачать презентацию</button>
    </div>
  </template>
  
  <script>
  import './components_style/style_button.css';
  export default {
    methods: {
      goToHome() {
        this.$router.push('/'); // переход на главную страницу
      },
      goToAbout() {
        this.$router.push('/about'); // переход на страницу "О нас"
      },
      goToLol() {
        this.$router.push('/Lol'); // переход на страницу "О lol"
      },
      goToDowland() {
        this.$router.push('/Dowland'); // переход на страницу
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 150px; /* Ширина боковой панели */
    background-color: #50c878; /* Цвет фона */
    padding: 10px; /* Отступы внутри панели */
    margin-top: 10px; /* Задаем отступ сверху */
    border: none; 
    border-radius: 5px; 
  }
  </style>
  