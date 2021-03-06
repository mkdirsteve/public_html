import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
  watch: {
    $route: {
      immediate: true,
      handler(to, _) {
        document.title = to.meta.title || "mkdirSteve";
      },
    },
  },
}).$mount("#app");
