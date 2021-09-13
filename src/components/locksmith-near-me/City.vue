<template>
  <div class="city">
    <div class="container">
      <div class="row pb-5">
        <div class="col-12 pb-3">
          <h1 class="pb-3 pt-3 my-title">Local locksmith in {{ city }}</h1>
          <h2 class="pt-3 my-yellow pt-4 pb-4 mt-4">Why us</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-4 d-block text-start mb-5">
          <img src="../../../public/images/icons/emergency.svg" class="fa-pull-left" alt="emergency" />
          <div class="text">
            <h5>Emergency Locksmith</h5>
            <p class="mr-gray">24/7 in {{ city }}</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-block text-start mb-5">
          <img src="../../../public/images/icons/best.svg" class="fa-pull-left" alt="emergency" />
          <div class="text">
            <h5>Best Price</h5>
            <p class="mr-gray">Labour from 49£ and locks from 25£</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-block text-start mb-5">
          <img src="../../../public/images/icons/refund.svg" class="fa-pull-left" alt="emergency" />
          <div class="text">
            <h5>Refund</h5>
            <p class="mr-gray">Money back guaranteed if we couldn’t fix</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-block text-start mb-5">
          <img src="../../../public/images/icons/burglary.svg" class="fa-pull-left" alt="emergency" />
          <div class="text">
            <h5>Burglary Repair</h5>
            <p class="mr-gray">In case of a burglary, call us and we will repair the damage</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-block text-start mb-5">
          <img src="../../../public/images/icons/247.svg" class="fa-pull-left" alt="emergency" />
          <div class="text">
            <h5>24 / 7</h5>
            <p class="mr-gray">For Residential or Comercial</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-block text-start mb-5">
          <img src="../../../public/images/icons/best_equip.svg" class="fa-pull-left" alt="emergency" />
          <div class="text">
            <h5>Best equipment</h5>
            <p class="mr-gray">Full range of items to provide access for required services</p>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12">
          <button class="btn btn-primary align-self-center my-primary-btn mt-4">
            <a class="text-white text-decoration-none" href="tel:03333446467"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 pb-5">
          <a class="text-white text-decoration-none d-none d-lg-block" href="tel:03333446467"><img src="../../../public/images/CallUs.png" width="100%" alt="main-logo" /></a>
        </div>
        <div class="col-12 text-start">
          <p>UK Local Locksmith are always the best locksmiths near you, including in Peterborough with after hours locksmith services. Our Emergency locksmiths in Peterborough offers same day locksmith with 24 hours coverage and is your best option with any problem, like lock-in, lock-out, residential or even business locksmith requirements. UK Local Locksmith in Peterborough offers the best and cheap solution for your low price locksmithing needs in the least amount of time. We react quickly to problems and calls-outs for best locksmith in Peterborough with emergency lock-in and locksmith lock-out services and we can be there with our Emergency Locksmith in Peterborough team in 25 minutes.</p>
          <b-button v-b-toggle="'read-more'" class="collapse-button d-flex">Read more</b-button>
          <b-collapse id="read-more">
            <p>We are a reliable emergency locksmith company, that offers 24 h locksmith services or nonstop Peterborough locksmith service with full after hours locksmith needs. We are able to totally alter or repair, entrance stupors and letter drop locks. The locksmiths from UK Local Locksmith located in Peterborough use top of the range tools and materials for locksmithing interventions, or key duplication. Customer opinions and satisfaction are key elements for our business. For this reason we work hard to provide cheap locksmith services and a “locksmith near me” type of solution. If you find yourself in Peterborough and in a locksmith emergency crisis, call us and we’ll be there in 25 minutes!</p>
          </b-collapse>
        </div>
      </div>
      <div class="row mt-5 mb-5">
        <div class="col-12">
          <GoogleMap />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from "../maps/GoogleMap";

export default {
  name: "City",
  props: {
    city: {
      type: String
    }
  },
  components: {
    GoogleMap
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
</style>