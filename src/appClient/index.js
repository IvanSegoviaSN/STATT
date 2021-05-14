import Vue from "vue";
import setUsernameOrID from "./components/setUsernameOrID.vue";
import getUsernameOrID from "./components/getUsernameOrID.vue";

import appInd from "./components/index.vue";
import appPanel from "./components/panel.vue";

Vue.config.productionTip = true;
Vue.config.devtools = true;

const index = new Vue({
    render: h => h(appInd)
}).$mount('#appIndex');

const panel = new Vue({
    render: h => h(appPanel)
}).$mount('#appPanel');

/*
new Vue({
    render: h => h(getUsernameOrID)
}).$mount('#getUsernameOrID');
*/