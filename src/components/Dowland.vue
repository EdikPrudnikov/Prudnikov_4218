
<template>
  <button @click="openLink" class="custom-button3">Нажми меня</button>
</template>

<script>
export default {
  methods: {
    openLink() {
      window.open('https://downloader.disk.yandex.ru/disk/13bb2daf63e77c19362ba6e483595e6196df733e5a4d48e780b54071c802852a/67328830/-AJm42DAx2Rjoa9qPX4FwEQsxlbCOf3MbP3B4tAcouFehLa9XCzWxC0riK9mBYk5OCNcjJssLSVdeWylW7VD2w%3D%3D?uid=0&filename=Загадки%20для%20детей%20ЛР%20№3.pptx&disposition=attachment&hash=D/e1ZoplUBl4sgT9HEJukWzMZpmCyERCyZMkdJD2%2B%2Bj/JWa/5BQlYMK8c/Rdam%2BQq/J6bpmRyOJonT3VoXnDag%3D%3D%3A&limit=0&content_type=application%2Fvnd.openxmlformats-officedocument.presentationml.presentation&owner_uid=1530059686&fsize=367197&hid=b2fc3056f4a726cac03976302b6e6488&media_type=document&tknv=v2', '_blank'); // замените url на свою ссылку
    }
  }
}
</script>

<style>

</style>

