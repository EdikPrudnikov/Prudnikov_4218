
<template>
  <div>
    <div class="container">
      <h1>Страница "Сценарии 4-5 лет"</h1>
      <div class="search-container">
        <input type="text" v-model="searchQuery" placeholder="Поиск..." />
        <ul class="no-bullet">
          <li v-for="item in filteredItems" :key="item.id" class="item">
            <div class="item-content">
              <span class="item-title large-title">{{ item.name }}</span>
              <div class="button-group">
                <button @click="toggleTooltip(item)" class="custom3-button preview-button">Предосмотр</button>
                <button @click="openLink(item, 'скачать')" class="custom3-button">Скачать</button>
                <div v-if="tooltipVisible && tooltipItem === item" class="tooltip" ref="tooltip" @mouseenter="keepTooltipVisible" @mouseleave="hideTooltip">
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
  </div>
</template>

<script>
export default {
  name: 'goToButtonDOCX4_5',
  data() {
    return {
      searchQuery: '',
      items: [
        { id: 1, name: 'Приложении к ВКР' },
        { id: 2, name: 'Сценарий 2' },
        { id: 3, name: 'Сценарий 3' },
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
        'Приложении к ВКР': { скачать: 'https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/so8tIKr9pec20Q' },
        'Сценарий 2': { скачать: 'https://link-to-script-2' },
        'Сценарий 3': { скачать: 'https://link-to-script-3' },
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
      // Проверяем существование элемента tooltip
      if (tooltipElement && !tooltipElement.contains(event.target) && !this.$el.contains(event.target)) {
        this.hideTooltip();
      }
    },
    getImages(item) {
      const images = { 
        'Приложении к ВКР': ['src/assets/Приложении к ВКР/Приложении к ВКР1.png','src/assets/Приложении к ВКР/Приложении к ВКР2.png','src/assets/Приложении к ВКР/Приложении к ВКР3.png','src/assets/Приложении к ВКР/Приложении к ВКР4.png'], 
        'Сценарий 2': ['src/assets/солнце.png','src/assets/солнце.png','src/assets/солнце.png','src/assets/солнце.png','src/assets/солнце.png','src/assets/солнце.png','src/assets/солнце.png','src/assets/солнце.png','src/assets/солнце.png','src/assets/солнце.png','src/assets/солнце.png'], 
        'Сценарий 3': ['image3-1.jpg', 'image3-2.jpg'], 
      }; 
      return images[item.name] || []; 
    }, 
  }, 
}; 
</script> 

<style scoped> 

</style>
