<template>
      <div class="container">
      <h1>Страница "4-5 года"</h1>
      <p>Здесь будет информация о 4-5.</p>
      <button @click="goToButtonGame4_5" class="custom4-button">Игры</button> 
    <button @click="goToButtonPPT4_5" class="custom4-button">Презентации</button> 
    <button @click="goToButtonDOCX4_5" class="custom4-button">Сценарий</button> 
    </div>
</template>
  
<script>
export default {
    name: 'Button3',
    methods: { 
    goToButtonGame4_5() { 
      this.$router.push('/ButtonGame4_5'); // переход на страницу "игры" 
    }, 
    goToButtonPPT4_5() { 
      this.$router.push('/ButtonPPT4_5'); // переход на страницу "презентации" 
    }, 
    goToButtonDOCX4_5() { 
      this.$router.push('/ButtonDOCX4_5'); // переход на страницу "Сценарий" 
    },
  } 
};
  
</script>
  
<style> 
</style>