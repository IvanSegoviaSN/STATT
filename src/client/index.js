import Vue from "vue";

import app from "./app.vue";
import router from "./routes";

new Vue({
    router,
    render: h => h(app)
}, Vue.config.devtools = false, Vue.config.productionTip = false).$mount('#launchApp');
