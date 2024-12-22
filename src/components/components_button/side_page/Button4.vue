<template>
      <div class="container">
      <h1>Страница "5-6 лет"</h1>
      <p>Здесь будет информация о 5-6.</p>
      <button @click="goToButtonGame5_6" class="custom4-button">Игры</button> 
    <button @click="goToButtonPPT5_6" class="custom4-button">Презентации</button> 
    <button @click="goToButtonDOCX5_6" class="custom4-button">Сценарий</button> 
    </div>
</template>
  
<script>
export default {
    name: 'Button4',
    methods: { 
    goToButtonGame5_6() { 
      this.$router.push('/ButtonGame5_6');
    }, 
    goToButtonPPT5_6() { 
      this.$router.push('/ButtonPPT5_6');
    }, 
    goToButtonDOCX5_6() { 
      this.$router.push('/ButtonDOCX5_6');
    },
  } 
};
  
</script>
  
<style> 
</style>