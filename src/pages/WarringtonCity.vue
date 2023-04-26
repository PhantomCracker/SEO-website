<template>
  <div class="city">
    <div class="hero">
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-lg-12 d-flex align-self-center flex-column mt-3 mt-md-0 pb-4">
            <h1 class="text-white text-start text-center">Local locksmith in  <span class="my-yellow">Warrington</span></h1>
            <ul class="text-center ps-0 pt-2">
              <li class="text-white"><h3><span class="fw-bold">Emergency</span> Locksmith in Warrington</h3></li>
              <li class="text-white">In case of a burglary, call us and we will repair the damage</li>
              <li class="text-white">Best Price: Labour from 39£ and locks from 25£</li>
              <li class="text-white">Refund: Money back guaranteed if we couldn’t fix</li>
              <li class="text-white">Full range of items to provide access for required services</li>
            </ul>
            <button class="btn btn-primary align-self-center my-primary-btn mt-4">
              <a class="text-white text-decoration-none" href="tel:01183100429"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ServicesOnTop />
    <ServiceCard />
    <Information />
    <AboutTechnicians />
    <ChooseUs />
    <Partners />
    <Testimonials />
  </div>
</template>

<script>

import ServicesOnTop from "@/components/home/ServicesOnTop";
import ServiceCard from "@/components/home/ServicesCard";
import Information from "@/components/home/Information";
import AboutTechnicians from "@/components/home/AboutTechnicians";
import ChooseUs from "@/components/home/ChooseUs";
import Partners from "@/components/home/Partners";
import Testimonials from "@/components/home/Testimonials.vue";
export default {
  name: "WarringtonCity",
  components: {Testimonials, Partners, ChooseUs, AboutTechnicians, Information, ServiceCard, ServicesOnTop},
  mounted() {
    let whatConvertsScript = document.createElement('script')
    whatConvertsScript.setAttribute('src', '//scripts.iconnode.com/100729.js')
    document.head.appendChild(whatConvertsScript)
  },
  metaInfo: {
    title: 'Emergency locksmith in Warrington',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        vmid: 'description',
        name: 'description',
        content: '24/7 emergency locksmith services in Warrington. UK Local Locksmith also provide a range of services and supplies designed to improve the security of your home or business'
      }
    ]
  }
}
</script>

<style scoped lang="scss">
.hero {
  background-image: url("../../public/images/hero-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 500px;
  border-bottom: 10px solid #000000;

  ul {
    list-style-type: none;
  }

  @media (max-width: 700px) {
    max-height: 100%;
  }

  .my-primary-btn {
    width: 25%;
    @media (max-width: 700px) {
      width: 50%;
    }
  }

  .hero-man {
    background-image: url("../../public/images/header-man.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 300px;
    @media (max-width: 700px) {
      border-top: 10px solid black;
    }
  }
  li {
    font-family: 'Ubuntu', sans-serif;
  }
}
h1 {
  font-size: 2.5rem;
  &.with-border {
    border-left: 10px solid $ourYellow;
    padding-left: 25px;
    @media (max-width: 700px) {
      font-size: 3.5rem;
      padding-left: 5px;
    }
  }
}
.btn-primary {
  background-color: $ourYellow !important;
  border: none;
  &:focus, :active, :target, :visited {
    border: none;
    box-shadow: none;

  }
  a {
    text-align: center;
  }
}
</style>