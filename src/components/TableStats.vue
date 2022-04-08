<template>
  <v-simple-table class="blue-grey lighten-4 rounded-xl">
    <template v-slot:default  >
      <thead >
        <tr>
          <th class="text-left purple--text lighten-1 ">
            Nama karakter 
          </th>
          <th class="text-left purple--text lighten-1 ">
            Perlawanan
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in stats" :key="item.stat.name">
          <td class="blue--text darken-1" :class="'capitalize'">{{ item.stat.name }}</td>
          <td class="blue--text darken-1">{{ item.base_stat }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  
</template>

<script>
export default {
  name: 'TableStats',
  props: {
    stats: Array
  }

}
</script>

<style lang="scss" scoped>
.capitalize {
  text-transform: capitalize;
}

</style>

