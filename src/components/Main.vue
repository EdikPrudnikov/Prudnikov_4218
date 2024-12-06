
<template>  
  <div>  
    <button class="reset-button"></button>
    <div class="navbar">  
      <div class="button-container">  
        <button @click="goToHome" class="custom2-button">Главная</button>  
        <button @click="goToButton1" class="custom2-button">2-3 года</button>  
        <button @click="goToButton2" class="custom2-button">3-4 года</button>  
        <button @click="goToButton3" class="custom2-button">4-5 лет</button>  
        <button @click="goToButton4" class="custom2-button">5-6 лет</button>  
        <button @click="goToButton5" class="custom2-button">6-7 лет</button> 
        <button @click="goBack" class="back-button">Назад</button> <!-- Кнопка "Назад" -->    
      </div>  
    </div>  
    <div class="sidebar">  
      <button @click="goToLapbooks" class="custom5-button">Лэпбуки</button>  
      <button @click="goToPsychologicalTraining" class="custom5-button">Психологические тренинги</button>  
      <button @click="goToWorkingWithParents" class="custom5-button">Опыт работы с родителями</button>  
      <button @click="goToElectronicLibrary" class="custom5-button">Электронная библиотека</button>     
      <button @click="goToElectronicResources" class="custom5-button">Электронные ресурсы</button>  
      <button @click="goToMultStudio" class="custom5-button" @mouseover="showTooltip = true" @mouseleave="showTooltip = false">МультСтудия</button>  
      <div v-if="showTooltip" class="tooltip">Здесь Вы сможете посмотреть мультфильмы в соответствии с вашими интересами</div> <!-- Всплывающее окно -->  
    </div>  
  </div>  
</template>  

<script>     
import './components_style/style_button.css';     
export default {     
  data() {   
    return {   
      showTooltip: false, // Переменная для управления отображением всплывающего окна   
    };   
  },   
  methods: {     
    goBack() { // Метод для возврата на предыдущую страницу  
      this.$router.go(-1);     
    },  
    goToHome() {     
      this.$router.push('/');     
    },     
    goToButton1() {     
      this.$router.push('/Button1');     
    },     
    goToButton2() {     
      this.$router.push('/Button2');     
    },     
    goToButton3() {    this.$router.push('/Button3');     
    },     
    goToButton4() {     
      this.$router.push('/Button4');     
    },     
    goToButton5() {     
      this.$router.push('/Button5');     
    },     
    goToLapbooks() {     
      this.$router.push('/Lapbooks');     
    },     
    goToPsychologicalTraining() {     
      this.$router.push('/PsychologicalTraining');     
    },     
    goToWorkingWithParents() {     
      this.$router.push('/WorkingWithParents');     
    },     
    goToElectronicLibrary() {     
      this.$router.push('/ElectronicLibrary');     
    },     
    goToMultStudio() {      
      this.$router.push('/MultStudio');     
    },  
    goToElectronicResources() {   
      this.$router.push('/ElectronicResources');   
    },  
  },     
};     
</script>     

<style scoped>     

</style>

