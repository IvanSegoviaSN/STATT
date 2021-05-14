<template>
  <component-index/>
</template>

<script>
import componentIndex from "./componentsIndex/index.vue";

export default {
  name: "appInd",
  data() {
    return {
      casa: false
    };
  },
  methods: {

  },
  components: {
    componentIndex
  }
}
</script>

<style scoped>

</style>