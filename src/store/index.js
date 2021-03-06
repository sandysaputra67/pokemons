import Vue from 'vue'
import Vuex from 'vuex'
import InfiniteLoading from 'vue-infinite-loading';
Vue.use(Vuex)
Vue.use(InfiniteLoading)

const API = 'https://pokeapi.co/api/v2/generation/1/'

export default new Vuex.Store({
  state: {
    pokemons: [],
    pokemonDetail: {},
    favorites: [],
  },
  mutations: {
    GET_WISHLIST(state, pokemons) {
      state.favorites.push(pokemons)
    },
    DELETE_WISHLIST(state, isFavorite){
      state.favorites.splice(isFavorite, 1)
    },
    GET_POKEMONS (state, pokemons) {
      state.pokemons = pokemons
    },

    DETAIL_POKEMON (state, detail) {
      state.pokemonDetail = detail
    },
    
  },
  actions: {
    getPokemons ({commit}) {
      return fetch(API)
        .then( res => {
          if(res.status === 200)
            return res.json()
        })
        .then( data => {
          commit('GET_POKEMONS',
            data.pokemon_species.map(pokemon => {
              pokemon.id = pokemon.url.split('/')
                .filter(part => {return !!part}).pop()
              return pokemon
            })
          )
          
        })
        .catch( error => console.log(error) )
    },
    async detailPokemon ({ commit }, idPoke) {
      try {
        let api = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}/`)
        let res = await api.json()
        let data = await commit('DETAIL_POKEMON', res)
        return data
      } catch (rej) {
        console.error(rej)
      }
    },
    addFavorites(state,{commit}, pokemons) {
       isFavorite = state.favorites.map(pokemons);
      if(isFavorite >= 0) {
        commit('DELETE_WISHLIST', isFavorite)
      } else{
        commit('GET_WISHLIST', pokemons)
      }
    }
  },

})
