<template> 
  <div class="container"> 
    <h1>Страница "2-3"</h1> 
    <p>Здесь будет информация о играх.</p> 
    <button @click="goToButtonGame2_3" class="custom4-button">Игры</button> 
    <button @click="goToButtonPPT2_3" class="custom4-button">Презентации</button> 
    <button @click="goToButtonDOCX2_3" class="custom4-button">Сценарий</button> 
  </div> 
</template> 
 
<script> 
export default { 
  name: 'Button1', 
  methods: { 
    goToButtonGame2_3() { 
      this.$router.push('/ButtonGame2_3'); // переход на страницу "игры" 
    }, 
    goToButtonPPT2_3() { 
      this.$router.push('/ButtonPPT2_3'); // переход на страницу "презентации" 
    }, 
    goToButtonDOCX2_3() { 
      this.$router.push('/ButtonDOCX2_3'); // переход на страницу "презентации" 
    },
  } 
}; 
</script> 
 
<style> 
@import url('./components_style/mystyles.css'); 
</style>

