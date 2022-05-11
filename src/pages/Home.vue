<template>
  <div class="home">
    <ServicesOnTop />
    <Hero />
    <ServicesCard />
    <Information />
    <AboutTechnicians />
    <ChooseUs />
    <Partners />
  </div>
</template>

<script>
import Hero from '../components/home/Hero';
import ServicesCard from "../components/home/ServicesCard";
import Information from "../components/home/Information";
import AboutTechnicians from "../components/home/AboutTechnicians";
import Partners from "../components/home/Partners";
import ServicesOnTop from "../components/home/ServicesOnTop";
import ChooseUs from "../components/home/ChooseUs";

export default {
  name: "Home",
  components: {
    ChooseUs,
    ServicesOnTop,
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
