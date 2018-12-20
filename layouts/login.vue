<template>
  <v-app >
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      right: true,
      title: 'Vet2Vet'
    }
  }
}
</script>

<style>
span#v2v {
  padding-left: 20px;
  cursor: default;
}
</style>
