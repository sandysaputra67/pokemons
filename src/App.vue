<template>
  <v-app>
    <nav-bar />
    <v-main class="grey lighten-5 ">
      <router-view />
    </v-main>
  
  </v-app>
</template>

<script>
import NavBar from '@/components/navbar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },

  data: () => ({
  }),
};
</script>
