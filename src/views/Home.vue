<template> 
  <div class="main-page"> 
    <div class="content"> 
      <img src="@/assets/51.png" alt="Описание изображения" class="image" />
      <h1>Методическая копилка Детского сада номер 51  
        Красносельского района</h1> 
      <p>Этот сайт создан для обмена полезными ссылками, играми и презентациями, чтобы иметь возможность быстро и без проблем подготовиться и провести занятия.</p> 
    </div> 
  </div> 
</template> 

<script> 
export default { 
  name: 'MainPage', 
} 
</script> 

<style scoped> 
.main-page { 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 80vh; 
  flex-direction: column;
} 
 
.content { 
  text-align: center; 
  margin: 20px; 
} 

.image { 
  width: 200px;
  height: 200px; 
  margin-bottom: 10px;
} 
 
h1 { 
  font-size: 2em; 
  color: #1e10e5; 
} 
.dark-theme h1 { 
color: #EFE11A; 
} 
p { 
  font-size: 1.7em; 
  color: #555; 
} 
.dark-theme p { 
color: #ffffff; 
} 
</style> 

