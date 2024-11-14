<template>
      <div class="container">
      <h1>Страница "6-7 лет"</h1>
      <p>Здесь будет информация о 6-7.</p>
      <button @click="goToButtonGame6_7" class="custom4-button">Игры</button> 
    <button @click="goToButtonPPT6_7" class="custom4-button">Презентации</button> 
    <button @click="goToButtonDOCX6_7" class="custom4-button">Сценарий</button> 
    </div>
</template>
  
<script>
export default {
    name: 'Button5',
    methods: { 
    goToButtonGame6_7() { 
      this.$router.push('/ButtonGame6_7'); // переход на страницу "игры" 
    }, 
    goToButtonPPT6_7() { 
      this.$router.push('/ButtonPPT6_7'); // переход на страницу "презентации" 
    }, 
    goToButtonDOCX6_7() { 
      this.$router.push('/ButtonDOCX6_7'); // переход на страницу "презентации" 
    },
  } 
};
  
</script>
  
<style> 
</style>