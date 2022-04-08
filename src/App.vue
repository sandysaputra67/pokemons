<template>
  <v-app>
    <nav-bar />
    <v-main class="grey lighten-5 ">
      <router-view />
    </v-main>
    <footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import footer from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    footer
  },

  data: () => ({
  }),
};
</script>
