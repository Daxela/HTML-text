<template>
  <div class="hello">
    <router-link to="/">
      <button class="tablink">Home</button>
    </router-link>
    <router-link :to="{name:'Site'}">
      <button class="tablink" >Сайты</button>
    </router-link>
    <router-link :to="{name: 'Page'}">
      <button class="tablink">Страницы</button>
    </router-link>
    <router-link to="/about">
      <button class="tablink">About</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tablink {
  background-color: #155;
  color: white;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 18px;
  width: 25%;
}

.tablink:hover {
  background-color: #717;
}
</style>
