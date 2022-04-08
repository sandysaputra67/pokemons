<template>
  <v-list class="grey lighten-5">
    <v-list-item
      v-for="a in abilities"
      :key="a.ability.name"
    >
      <v-list-item-icon>
        <v-icon class="blue--text darken-1" v-text="'mdi-pokeball'"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title  :class="'capitalize'" >{{ a.ability.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'ListAbilities',
  props: {
    abilities: Array
  }

}
</script>

<style lang="scss" scoped>
.capitalize {
  text-transform: capitalize;
}
</style>