<template> 
  <div class="container"> 
    <h1>Страница "3-4 года"</h1> 
    <p>Здесь будет информация о 3-4 годах.</p> 
    <button @click="goToButtonGame3_4" class="custom4-button">Игры</button> 
    <button @click="goToButtonPPT3_4" class="custom4-button">Презентации</button> 
    <button @click="goToButtonDOCX3_4" class="custom4-button">Сценарий</button> 
  </div> 
</template> 
  
<script> 
export default { 
  name: 'Button2', 
  methods: { 
    goToButtonGame3_4() { 
      this.$router.push('/ButtonGame3_4');
    }, 
    goToButtonPPT3_4() { 
      this.$router.push('/ButtonPPT3_4'); 
    }, 
    goToButtonDOCX3_4() { 
      this.$router.push('/ButtonDOCX3_4');
    },
  } 
}; 
</script>
  
<style>  
@import url('./components_style/mystyles.css');
</style>
  