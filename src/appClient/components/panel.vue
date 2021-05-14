<template>
<div>

  <component-navigation/>

  <component-header/>

  <component-mobile-bar/>

  <component-content/>

</div>
</template>

<script>
import componentHeader from "./componentsPanel/header/componentHeader.vue";
import componentNavigation from "./componentsPanel/header/componentNavigation.vue";
import componentMobileBar from "./componentsPanel/body/componentBar.vue";
import componentContent from "./componentsPanel/body/componentContent.vue";

export default {
  name: "panelapp",
  data() {
    return {
      casa: false
    };
  },
  components: {
    componentHeader,
    componentNavigation,
    componentMobileBar,
    componentContent
  }
}
</script>

<style scoped>

</style>