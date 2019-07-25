<template>
  <v-app>
     <v-toolbar dark class="amber">
      <v-toolbar-title>Sugarpine Software CRM</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="$router.push('customers')">customers</v-btn>
        <v-btn flat @click="$router.push('projects')">projects</v-btn>
        <v-btn flat @click="$router.push('/')">log in</v-btn>      
      </v-toolbar-items>   
    </v-toolbar>
      <main>
        <router-view></router-view>
      </main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data: () => ({
    //
  }),
};
</script>
