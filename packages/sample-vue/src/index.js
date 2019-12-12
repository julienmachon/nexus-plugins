import Vue from "vue";
import Hello from "./Hello.vue";

export default ref => {
  new Vue({
    render(h) {
      return h(Hello);
    }
  }).$mount(ref);
};
