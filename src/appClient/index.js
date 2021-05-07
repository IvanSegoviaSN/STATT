import Vue from "vue";
import setUsernameOrID from "./components/setUsernameOrID.vue";
import getUsernameOrID from "./components/getUsernameOrID.vue";

new Vue({
    render: h => h(setUsernameOrID)
}).$mount('#setUsernameOrID');


new Vue({
    render: h => h(getUsernameOrID)
}).$mount('#getUsernameOrID');
