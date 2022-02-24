<template>
  <div class="home">
    <div>
      <Hello-world/>
    </div>
  <div class="panel panel-primary" style="margin-top: 10px">
    <div class="panel-body">
      <router-link role="button" class="btn btn-lg btn-block btn-default" to="/newpage">
        Добавить
      </router-link>
    </div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>№</th>
        <th style="width: 40%">Url</th>
        <th style="width: 40px">Site_id</th>
        <th style="width: 40px"></th>
        <th style="width: 40px"></th>
      </tr>
      </thead>

      <tbody>
      <tr
          v-for="post in posts" :key="post.id"
          active-class="is-active"
          class="link"
          :to="{ name: 'post', params: { id: post.id } }">
        <td>{{post.page_id}}</td>
        <td>{{post.page_url}}</td>
        <td>{{post.page_site_id}}</td>
      </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
export default {
  name: "Page",
  components: {
    HelloWorld
  },
  data() {
    return {
      posts: null,
      endpoint: 'http://127.0.0.1:55555/myapp/page/',
      query: '',
      count: null,
    }
  },

  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      axios.get(this.endpoint)
          .then(response => {
            this.posts = response.data;
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
          })
    }
  }
}
</script>

<style scoped>

</style>