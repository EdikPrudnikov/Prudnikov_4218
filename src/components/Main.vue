<template>
    <div class="sidebar">
      <button @click="goToHome"class="custom-button">Главная</button>
      <p><button @click="goToButton1"class="custom2-button">2-3 года</button></p>
      <p><button @click="goToButton2"class="custom2-button">3-4 года</button></p>
      <p><button @click="goToButton3"class="custom2-button">4-5 лет</button></p>
      <p><button @click="goToButton4"class="custom2-button">5-6 лет</button></p>
      <p><button @click="goToButton5"class="custom2-button">6-7 лет</button></p>
    </div>
  </template>
  
  <script>
  import './components_style/style_button.css';
  export default {
    methods: {
      goToHome() {
        this.$router.push('/'); // переход на главную страницу
      },
      goToButton1() {
        this.$router.push('/Button1'); // переход на страницу "2-3"
      },
      goToButton2() {
        this.$router.push('/Button2'); // переход на страницу "3-4"
      },
      goToButton3() {
        this.$router.push('/Button3'); // переход на страницу "4-5"
      },
      goToButton4() {
        this.$router.push('/Button4'); // переход на страницу "5-6"
      },
      goToButton5() {
        this.$router.push('/Button5'); // переход на страницу "6-7"
      },

    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 170px; /* Ширина боковой панели */
    background-color: #50c878; /* Цвет фона */
    padding: 10px; /* Отступы внутри панели */
    margin-top: 10px; /* Задаем отступ сверху */
    border: none; 
    border-radius: 5px; 
  }
  </style>
  