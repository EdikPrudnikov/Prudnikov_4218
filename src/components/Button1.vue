<template> 
  <div class="container"> 
    <h1>Страница "2-3"</h1> 
    <p>Здесь будет информация о 2-3 годах.</p> 
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
      this.$router.push('/ButtonGame2_3');
    }, 
    goToButtonPPT2_3() { 
      this.$router.push('/ButtonPPT2_3'); 
    }, 
    goToButtonDOCX2_3() { 
      this.$router.push('/ButtonDOCX2_3');
    },
  } 
}; 
</script> 
 
<style> 
.dark-theme h1 { 
color: #ffffff; 
} 
.dark-theme p { 
color: #ffffff; 
} 
@import url('./components_style/mystyles.css'); 
</style>