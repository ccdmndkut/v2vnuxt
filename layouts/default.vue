<template>
  <v-app >

    <v-toolbar
      fixed
      app
    >
      <v-btn
        icon
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      fixed
      app
    >
      <span id="v2v">&copy; Vet2Vet</span>
    </v-footer>
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
