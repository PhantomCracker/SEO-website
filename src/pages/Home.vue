<template>
  <div class="home">
    <Hero />
    <FindLocksmith />
    <ServicesCard />
    <Information />
    <AboutTechnicians />
    <Partners />
  </div>
</template>

<script>
import Hero from '../components/home/Hero';
import FindLocksmith from "../components/home/FindLocksmith";
import ServicesCard from "../components/home/ServicesCard";
import Information from "../components/home/Information";
import AboutTechnicians from "../components/home/AboutTechnicians";
import Partners from "../components/home/Partners";

export default {
  name: "Home",
  components: {
    FindLocksmith,
    Hero,
    ServicesCard,
    Information,
    AboutTechnicians,
    Partners
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