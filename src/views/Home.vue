<template>
  <div class="home">
    <pokemonlist :pokemons="pokemons" :spinner="spinner" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import pokemonlist from '@/components/pokemonlist.vue'

export default {
  name: 'Home',
  components: {
    pokemonlist

  },
  data: () => ({
    spinner: false
  }),
  methods: {
    ...mapActions(['getPokemons']),
  },
  computed: {
    ...mapState(['pokemons'])
  },
  created () {
    this.spinner = true
    setTimeout(() => {
      this.getPokemons().finally(() => this.spinner = false)
    }, 1500)
  }
}
</script>
