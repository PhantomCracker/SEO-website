<template>
  <div class="home">
    <Hero />
    <ServicesCard/>
  </div>
</template>

<script>
import Hero from '../components/home/Hero';
import ServicesCard from "../components/home/ServicesCard";

export default {
  name: "Home",
  components: {
    Hero,
    ServicesCard
  },
  methods: {}
}
</script>

<style scoped>
</style>