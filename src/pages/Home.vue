<template>
  <div class="home">
    <ServicesOnTop />
    <Hero />
    <ServicesCard />
    <Information />
    <AboutTechnicians />
    <ChooseUs />
    <Partners />
    <Testimonials />
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
import Testimonials from "@/components/home/Testimonials.vue";

export default {
  name: "Home",
  components: {
      Testimonials,
    ChooseUs,
    ServicesOnTop,
    Hero,
    ServicesCard,
    Information,
    AboutTechnicians,
    Partners
  },
  mounted() {
    let whatConvertsScript = document.createElement('script')
    whatConvertsScript.setAttribute('src', '//scripts.iconnode.com/100729.js')
    document.head.appendChild(whatConvertsScript)
  },
  methods: {},
  metaInfo: {
    title: 'UK Local Locksmith',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        vmid: 'description',
        name: 'description',
        content: '24/7 emergency locksmith services. UK Local Locksmith also provide a range of services and supplies designed to improve the security of your home or business'
      }
    ]
  }
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
