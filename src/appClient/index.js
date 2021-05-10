import Vue from "vue";
import setUsernameOrID from "./components/setUsernameOrID.vue";
import getUsernameOrID from "./components/getUsernameOrID.vue";

import App from "./components/app.vue";



new Vue({
    render: h => h(App)
}).$mount('#app');


Vue.config.productionTip = false;
/*
new Vue({
    render: h => h(getUsernameOrID)
}).$mount('#getUsernameOrID');
*/