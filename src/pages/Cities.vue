<template>
  <div class="cities">
    <City city="Bristol" />
  </div>
</template>

<script>
import City from "../components/locksmith-near-me/cities/Bristol";

export default {
  name: "Cities",
  components: {
    City
  },
  mounted() {
    let whatConvertsScript = document.createElement('script')
    whatConvertsScript.setAttribute('src', '//scripts.iconnode.com/100729.js')
    document.head.appendChild(whatConvertsScript)
  }
}
</script>

<style scoped lang="scss">
</style>