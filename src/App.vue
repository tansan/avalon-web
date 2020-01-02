<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn
        to="/"
        text>
        <v-toolbar-title
          to="/">Role decider of AVALON</v-toolbar-title>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
