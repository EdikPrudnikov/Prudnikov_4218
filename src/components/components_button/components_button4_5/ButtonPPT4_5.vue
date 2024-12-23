<template>   
  <div> 
  </div> 
  <div class="container">   
    <h1>Страница "Презентации 4-5 лет"</h1>   
    <div class="search-container">   
      <input type="text" v-model="searchQuery" placeholder="Поиск..." />   
      <ul class="no-bullet">   
        <li v-for="item in filteredItems" :key="item.id" class="item">   
          <div class="item-content">   
            <span class="item-title large-title">{{ item.name }}</span>   
            <div class="button-group">   
              <button @click="toggleTooltip(item)" class="custom3-button preview-button">Предосмотр</button>  
              <button @click="openLink(item, 'скачать')" class="custom3-button">Скачать</button>    
              <div v-if="tooltipVisible && tooltipItem === item" class="tooltip" @mouseenter="keepTooltipVisible" @mouseleave="hideTooltip">   
                <p>Предосмотр для {{ item.name }}</p>   
                <div v-for="(image, index) in getImages(item)" :key="index"> 
                  <img :src="image" alt="Предосмотр изображения" class="responsive-image" />  
                </div>
              </div>   
            </div>   
          </div>   
        </li>   
      </ul>   
    </div>   
  </div>   
</template> 

<script>  
export default {  
  name: 'GoToButtonPPT4_5',  
  data() {  
    return {  
      searchQuery: '',  
      items: [  
        { id: 1, name: 'Загадки для детей' },  
        { id: 2, name: 'Найди лишнее' },  
        { id: 3, name: 'Выбери из фигур четырехугольник' },  
      ],  
      tooltipVisible: false,  
      tooltipItem: null,  
    };  
  },  
  computed: {  
    filteredItems() {  
      return this.items.filter(item =>  
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())  
      );  
    },  
  },  
  methods: {  
    openLink(item, action) {  
      const links = {  
        'Загадки для детей': { скачать: 'https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/_RtVUIox9ii08A' },  
        'Найди лишнее': { скачать: 'https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/8NTIcFB_Utje3g' },  
        'Выбери из фигур четырехугольник': { скачать: 'https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/hmGzknCC0hHChw' },  
      };  
      if (links[item.name] && links[item.name][action]) {  
        window.open(links[item.name][action], '_blank');  
      }  
    },  
    toggleTooltip(item) {  
      if (this.tooltipItem === item) {  
        this.tooltipVisible = !this.tooltipVisible;  
      } else {  
        this.tooltipVisible = true;  
        this.tooltipItem = item;  
      }  
      this.addClickListener();  
    },  
    keepTooltipVisible() {  
      this.tooltipVisible = true;  
    },
    hideTooltip() {  
      this.tooltipVisible = false;  
      this.tooltipItem = null;  
    },  
    addClickListener() {
      document.addEventListener('click', this.handleClickOutside);
    },
    removeClickListener() {
      document.removeEventListener('click', this.handleClickOutside);
    },
    handleClickOutside(event) {
      const tooltipElement = this.$refs.tooltip;
      if (tooltipElement && !tooltipElement.contains(event.target) && !this.$el.contains(event.target)) {
        this.hideTooltip();
      }  
    },
    getImages(item) { 
      const images = { 
        'Загадки для детей': ['src/assets/возраст 4-5 лет/Загадки для детей ЛР №3/Загадки для детей (1).png','возраст 4-5 лет/Загадки для детей ЛР №3/Загадки для детей (2).png','src/assets/возраст 4-5 лет/Загадки для детей ЛР №3/Загадки для детей (3).png','src/assets/возраст 4-5 лет/Загадки для детей ЛР №3/Загадки для детей (4).png'], 
        'Найди лишнее': ['src/assets/возраст 4-5 лет/найди лишнее ЛР №3/Найди лишнее (1).png','src/assets/возраст 4-5 лет/найди лишнее ЛР №3/Найди лишнее (2).png','src/assets/возраст 4-5 лет/найди лишнее ЛР №3/Найди лишнее (3).png','src/assets/возраст 4-5 лет/найди лишнее ЛР №3/Найди лишнее (4).png'], 
        'Выбери из фигур четырехугольник': ['src/assets/возраст 4-5 лет/Выбери из фигур четырехугольник ЛР№3/Выбери из фигур четырехугольник.png'], 
      };
      return images[item.name] || []; 
    },  
  },  
};  
</script>  

<style scoped>  

</style>

