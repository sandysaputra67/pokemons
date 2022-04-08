<template>
  <v-container >

    <div v-if="!loading">
      <h2 :class="'capitalize'" class="my-2">nama: {{pokemonDetail.name}}</h2>
    </div>

    <v-row class="mb-4" v-if="!loading">
      <v-col cols="12" md="6" class="d-flex justify-center" >
        <v-img
          height="220"
          max-width="200"
          class="blue-grey lighten-4 rounded-circle mt-4"
          contain
          :src="pokemonDetail.sprites.front_default"
          alt="Pokemón"
          transition="fab-transition"
          :class="'shadow'"
          
        >
        </v-img>

      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center">


      </v-col>
    </v-row>
    <v-divider v-if="!loading" class="mt-7"></v-divider>
    
    <div v-if="!loading">
      <h2 :class="'capitalize'" class="my-5">fitur</h2>
      <p>tinggi: <strong class="purple--text lighten-1">{{ pokemonDetail.height }} cm</strong> </p>
      <p>beratbadan: <strong class="purple--text lighten-1">{{ pokemonDetail.weight }} kg</strong></p>
      <p>jenis: <strong :class="'capitalize'" class="purple--text lighten-1">{{ typeMap[0].type.name }}</strong></p>
      <v-divider class="mt-6"></v-divider>
      <p> about karakter :Pokémon is a series of video games developed by Game Freak and published by Nintendo and The Pokémon Company under the Pokémon media franchise</p>
    </div>

    <div v-if="!loading">
      <h2 :class="'capitalize'" class="mt-5">keterampilan</h2>
      <list-abilities class="my-3" :abilities="abalitiesMap" />
      <v-divider class="mt-4"></v-divider>
    </div>

    <div v-if="!loading">
      <h2 :class="'capitalize'" class="my-5">statistik</h2>
      <table-stats class="my-7" :stats="statsMap"  />
    </div>
    
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TableStats from '@/components/TableStats.vue'
import ListAbilities from '@/components/ListAbilities.vue'


export default {
  name: 'pokemondetail',
  components: { TableStats, ListAbilities },
  data: () => ({
    loading: false,
    ImageNotFound: '../assets/404notfound.png'
  }),
  computed: {
    ...mapState(['pokemonDetail']),
    statsMap () {
      return this.pokemonDetail.stats.map(item => item)
    },
    abalitiesMap () {
      return this.pokemonDetail.abilities.map(item => item)
    },
    typeMap () {
      return this.pokemonDetail.types.map(item => item)
    }
    
  },
  methods: {
    ...mapActions(['detailPokemon'])
  },
  created () {
    const id = this.$route.params.pokemon
    this.loading = true
    this.detailPokemon(id).finally(() => this.loading = false)
  }

}
</script>

<style lang="scss" scoped>
  .capitalize {
    text-transform: capitalize;
    @media only screen and (max-width: 586px) {
      text-align: center;
    }
  }
  .shadow {
    box-shadow: 0px 2px 3px 3px rgba(0,0,0,0.45)
  }
  .spinner {
    height: 75vh;
    display: flex;
    &__element {
      margin: auto;
    }
  }

</style>
