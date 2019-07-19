import Vue from "vue";
import App from "./App.vue";
import "font-awesome";

const aa="@BASE_URL";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
