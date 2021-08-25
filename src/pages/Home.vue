<template>
  <div class="home">
    <Hero />
    <ServicesCard />
    <Information />
  </div>
</template>

<script>
import Hero from '../components/home/Hero';
import ServicesCard from "../components/home/ServicesCard";
import Information from "../components/home/Information";

export default {
  name: "Home",
  components: {
    Hero,
    ServicesCard,
    Information
  },
  methods: {}
}
</script>

<style scoped>
.span4 img {
  margin-right: 10px;
}
.span4 .img-left {
  float: left;
}
.span4 .img-right {
  float: right;
}
</style>