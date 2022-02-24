<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Заголовок</label>
        <input v-model="post_body.site_name" class="form-control" type="text" placeholder="Default input">
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">Ссылка</label>
        <input v-model="post_body.site_host" class="form-control" id="exampleFormControlTextarea1" typre="text"></input>
      </div>


      <input v-on:click="postData" class="btn btn-primary" value="Отправить">
      <p>{{ out_message }}</p>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      endpoint: 'http://127.0.0.1:55555/myapp/site/',
      post_body: {
        "site_name": '',
        "site_host": ''

      },
      out_message:  null,
    }
  },

  methods: {
    postData() {
      for (const [key, value] of Object.entries(this.post_body)) {
        console.log(key, value);
        if (!value) {
          this.out_message = "Ошибка";
          return;
        }
      }
      axios.post(this.endpoint, this.post_body)
          .then(response => {
            console.log(response.data);
            this.out_message = "Отправлено";
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
            this.out_message = "Ошибка";
          })
    },
  }
}
</script>

<style>
.search-bar{
  margin-left: 10%;
  margin-top: 50px;
  width: 800px;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  box-sizing: border-box;
}


.search-bar-logo{
  width: 30%;
  margin-left: 0;
  height: 2em;
}

.search-bar-bar{
  width: 65%;
  height: 2em;
  margin-left: 1em;
  margin-right: 1em;
}

.search-bar-bar:hover {
  -webkit-box-shadow: 5px 5px 3px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 3px 3px rgba(0, 0, 0, 0.3);
}


.logo {
  height: 3em;
}

#search-button{
  outline: none;
}

#search-input{
  outline: none;
}
.list_element {
  text-align: left;
  margin-left: 50px;
  font-size: x-large;
}
.list_element div {
  text-align: left;
  margin-left: 50px;
  font-size: large;
}
form {
  text-align: left;
  margin-left: 50px;
  font-size: large;
}
</style>