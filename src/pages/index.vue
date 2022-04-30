<template>
  <v-container>
    <TopContainer />
    <SocialLinksContainer />
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import TopContainer from '../components/TopContainer.vue'
  import SocialLinksContainer from '../components/SocialLinksContainer.vue'
  
  export default Vue.extend({
    name: 'Index',
    components : {
      TopContainer,
      SocialLinksContainer, 
    },
    data: () => ({
    
    }),
  })
</script>
