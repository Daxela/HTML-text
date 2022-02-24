<template>
  <div class="home">
    <div>
      <HelloWorld/>
    </div>
  <div class="panel panel-primary" style="margin-top: 10px">
    <div class="panel-body">
      <router-link role="button" class="btn btn-lg btn-block btn-default" to="/newsite">
        Добавить
      </router-link>
    </div>
      <table class="table table-striped">
        <thead>
        <tr>
          <th>№</th>
          <th style="width: 40%">Host</th>
          <th style="width: 40px">Name</th>
          <th style="width: 20px"></th>
          <th style="width: 20px"></th>
        </tr>
        </thead>

      <tbody>
      <tr
          v-for="post in posts" :key="post.id"
          active-class="is-active"
          class="link"
          :to="{ name: 'post', params: { id: post.id } }">
          <td>{{post.site_id}}</td>
          <td>{{post.site_host}}</td>
          <td>{{post.site_name}}</td>
      </tr>
      </tbody>
    </table>
  </div>

  </div>
</template>

<script>
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "Site",
  components: {
    HelloWorld
  },
  data() {
    return {
      posts: null,
      endpoint: 'http://127.0.0.1:55555/myapp/site/',
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