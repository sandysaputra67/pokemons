<template>
  <nav>
    <v-app-bar app height="70px" >
      <v-container class="d-flex">
          <v-img src="../assets/pokemon.svg" width="130px" height="65px" contain transition="scale-transition" @click.stop="goHome" :class="'pointer'" />
          
      </v-container>
    </v-app-bar>


  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    selectedItem: 1,

  }),
  methods: {
    goHome () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>
  .pointer {
    cursor: pointer;
  }
</style>