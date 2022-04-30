<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>

    <v-main>
      <MainPage />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import MainPage from "../pages/index.vue";

export default Vue.extend({
  name: "HomeView",

  components: {
    MainPage,
  },

  data: () => ({
    //
  }),
});
</script>
