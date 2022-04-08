<template>
  <v-row class="d-flex justify-space-around">
    <v-col cols="12" md="9">
      <v-text-field
        v-model="search"
        label="cari pokemon"
        filled
        rounded
        dense
      >
      </v-text-field>
    </v-col>
    <v-col cols="12" md="2" >
      <v-btn elevation="2" large rounded class="my-1">
        Mencari pokemon
      </v-btn>
    </v-col>
  </v-row>
  
</template>

<script>
export default {
  name: 'search',
  data: () => ({
    search: ''
  }),
  methods: {
  },
  mounted () {
    this.$emit('filtered', this.search)
  }

}
</script>

<style>

</style>