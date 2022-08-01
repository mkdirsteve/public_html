<template>
  <v-container>
    <v-row>
      <v-col align="fit">
        <v-card class="mx-auto" max-width="600">
          <v-img
            class="black--text align-end"
            height="600px"
            src="../assets/nft.jpg"
          >
            <v-card-title class="justify-center"> </v-card-title
          ></v-img>
          <button>
            <v-btn
              class="mx-auto"
              color="primary"
              dark
              large
              href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/39007217774439461473867705879301898938110689285563594455870305926884431495169/"
              outlined
              tile
            >
              <v-icon left> {{ mdiVideo3d }} </v-icon> View on openSea
            </v-btn>
          </button>
          <v-card-text>
            Interests: Defi, NFTs, DAOs, Web3, Artificial Intelligence + Pre
            trained Machine learning models, GPT-3
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "TopContainer",
  data() {
    return {};
  },
});
</script>
<style scoped></style>
