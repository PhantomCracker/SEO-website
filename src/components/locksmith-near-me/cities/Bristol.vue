<template>
  <div class="city">
    <ServicesOnTop />
    <div class="hero">
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-lg-12 d-flex align-self-center flex-column mt-3 mt-md-0 pb-4">
            <h1 class="text-white text-start text-center">Local locksmith in  <span class="my-yellow">{{ city }}</span></h1>
            <ul class="text-center">
              <li class="text-white">Emergency Locksmith in {{ city }}</li>
              <li class="text-white">In case of a burglary, call us and we will repair the damage</li>
              <li class="text-white">Best Price: Labour from 49£ and locks from 25£</li>
              <li class="text-white">Refund: Money back guaranteed if we couldn’t fix</li>
              <li class="text-white">Full range of items to provide access for required services</li>
            </ul>
            <button class="btn btn-primary align-self-center w-25 my-primary-btn mt-4">
              <a class="text-white text-decoration-none" href="tel:01183100429"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ServiceCard />
    <Information />
    <AboutTechnicians />
    <ChooseUs />
    <div class="container">
      <div class="row pb-5 pt-5">
        <div class="col-12 col-lg-4 d-block text-start mb-5">
          <img src="../../../../public/images/icons/emergency.svg" class="fa-pull-left" alt="emergency" />
          <div class="text">
            <h5>Emergency Locksmith</h5>
            <p class="mr-gray">24/7 in {{ city }}</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-block text-start mb-5">
          <img src="../../../../public/images/icons/best.svg" class="fa-pull-left" alt="emergency" />
          <div class="text">
            <h5>Best Price</h5>
            <p class="mr-gray">Labour from 49£ and locks from 25£</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-block text-start mb-5">
          <img src="../../../../public/images/icons/refund.svg" class="fa-pull-left" alt="emergency" />
          <div class="text">
            <h5>Refund</h5>
            <p class="mr-gray">Money back guaranteed if we couldn’t fix</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-block text-start mb-5">
          <img src="../../../../public/images/icons/burglary.svg" class="fa-pull-left" alt="emergency" />
          <div class="text">
            <h5>Burglary Repair</h5>
            <p class="mr-gray">In case of a burglary, call us and we will repair the damage</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-block text-start mb-5">
          <img src="../../../../public/images/icons/247.svg" class="fa-pull-left" alt="emergency" />
          <div class="text">
            <h5>24 / 7</h5>
            <p class="mr-gray">For Residential or Comercial</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-block text-start mb-5">
          <img src="../../../../public/images/icons/best_equip.svg" class="fa-pull-left" alt="emergency" />
          <div class="text">
            <h5>Best equipment</h5>
            <p class="mr-gray">Full range of items to provide access for required services</p>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12">
          <button class="btn btn-primary align-self-center my-primary-btn mt-4">
            <a class="text-white text-decoration-none" href="tel:01183100429"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
          </button>
        </div>
      </div>
      <div class="row pb-5">
        <div class="col-12 pb-5">
          <a class="text-white text-decoration-none d-none d-lg-block" href="tel:01183100429"><img src="../../../../public/images/CallUs.png" width="100%" alt="main-logo" /></a>
        </div>
        <div class="col-12 text-start">
          <p>UK Local Locksmith are always the best locksmiths near you, including in {{ city }} with after hours locksmith services. Our Emergency locksmiths in {{ city }} offers same day locksmith with 24 hours coverage and is your best option with any problem, like lock-in, lock-out, residential or even business locksmith requirements. UK Local Locksmith in {{ city }} offers the best and cheap solution for your low price locksmithing needs in the least amount of time. We react quickly to problems and calls-outs for best locksmith in {{ city }} with emergency lock-in and locksmith lock-out services and we can be there with our Emergency Locksmith in {{ city }} team in 25 minutes.</p>
          <b-button v-b-toggle="'read-more'" class="collapse-button d-flex">Read more</b-button>
          <b-collapse id="read-more">
            <p>We are a reliable emergency locksmith company, that offers 24 h locksmith services or nonstop {{ city }} locksmith service with full after hours locksmith needs. We are able to totally alter or repair, entrance stupors and letter drop locks. The locksmiths from UK Local Locksmith located in {{ city }} use top of the range tools and materials for locksmithing interventions, or key duplication. Customer opinions and satisfaction are key elements for our business. For this reason we work hard to provide cheap locksmith services and a “locksmith near me” type of solution. If you find yourself in {{ city }} and in a locksmith emergency crisis, call us and we’ll be there in 25 minutes!</p>
          </b-collapse>
        </div>
      </div>
    </div>
    <Partners />
  </div>
</template>

<script>

import ServicesOnTop from "../../home/ServicesOnTop";
import ServiceCard from "../../home/ServicesCard";
import Information from "../../home/Information";
import AboutTechnicians from "../../home/AboutTechnicians";
import ChooseUs from "../../home/ChooseUs";
import Partners from "../../home/Partners";

export default {
  name: "City",
  components: {Partners, ChooseUs, AboutTechnicians, Information, ServiceCard, ServicesOnTop},
  data() {
    let city = this.$route.params.city
    return {
      city: city
    }
  }
}
</script>

<style scoped lang="scss">
.city {
  h5 {
    font-weight: 600;
  }
  .my-title {
    background: $ourBlack;
    color: #ffffff;
    border-radius: 0 0 10px 10px;
  }
  .text {
    h5, .mr-gray {
      margin-left: 70px;
    }
    .mr-gray {
      color: #8D94AF;
      font-size: 0.8rem;
    }
  }
  .collapse-button {
    color: $ourYellow;
    background-color: transparent;
    border: none;
    border-top: 5px solid $ourYellow;
    border-radius: 0;
    text-align: left;
    padding-left: 0;
    &:focus {
      box-shadow: none;
    }
  }
}

.hero {
  background-image: url("../../../../public/images/hero-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 500px;

  @media (max-width: 700px) {
    max-height: 100%;
  }
  .w-25 {
    @media (max-width: 700px) {
      width: 80% !important;
    }
  }
  ul {
    padding-left: 0;
    li {
      list-style-type: none;
      text-align: center;
      @media (max-width: 700px) {
        margin-left: 30px;
        list-style-type: circle;
        text-align: left;
      }
    }
  }
}
h1 {
  font-size: 4rem;
  font-weight: 600;
  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
  &.with-border {
    border-left: 10px solid $ourYellow;
    padding-left: 25px;
    @media (max-width: 700px) {
      font-size: 3.5rem;
    }
  }
}
.btn-primary {
  backgorund-color: $ourYellow !important;
  a {
    text-align: center;
  }
}
</style>