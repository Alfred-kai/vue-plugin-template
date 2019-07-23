import Vue from "vue";
import App from "./App.vue";
import "font-awesome";

Vue.config.productionTip = false;

const aa="@BASE_URL";

new Vue({
  render: h => h(App)
}).$mount("#app");
