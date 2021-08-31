<template>
  <div class="city">
    <div class="container">
      <div class="row pb-5">
        <div class="col-12 pb-3">
          <h1 class="pb-3 pt-3 my-title">Local locksmith in {{ city }}</h1>
          <h3 class="pt-3">The main reason to choose us</h3>
        </div>
        <div class="col-12 col-lg-6">
          <ul class="d-flex flex-column align-items-center">
            <li>Emergency Locksmith 24/7 in {{ city }}</li>
            <li>Labour from 49£ and locks from 25£</li>
            <li>Money back guaranteed if we couldn’t fix</li>
          </ul>
        </div>
        <div class="col-12 col-lg-6">
          <ul class="d-flex flex-column align-items-center">
            <li>After burglary Repair</li>
            <li>24/7 for Residential or Comercial</li>
            <li>Full range of items to provide access for required services</li>
          </ul>
        </div>
        <div class="col-12">
          <button class="btn btn-primary align-self-center my-primary-btn mt-4">
            <a class="text-white text-decoration-none" href="tel:03333446467"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <img src="../../../public/images/Main-Logo.png" alt="main-logo" class="pb-5" />
        </div>
        <div class="col-12 col-lg-6">
          <p>UK Local Locksmith are always the best locksmiths near you, including in Peterborough with after hours locksmith services. Our Emergency locksmiths in Peterborough offers same day locksmith with 24 hours coverage and is your best option with any problem, like lock-in, lock-out, residential or even business locksmith requirements. UK Local Locksmith in Peterborough offers the best and cheap solution for your low price locksmithing needs in the least amount of time. We react quickly to problems and calls-outs for best locksmith in Peterborough with emergency lock-in and locksmith lock-out services and we can be there with our Emergency Locksmith in Peterborough team in 25 minutes.</p>
        </div>
        <div class="col-12 col-lg-6">
          <p>We are a reliable emergency locksmith company, that offers 24 h locksmith services or nonstop Peterborough locksmith service with full after hours locksmith needs. We are able to totally alter or repair, entrance stupors and letter drop locks. The locksmiths from UK Local Locksmith located in Peterborough use top of the range tools and materials for locksmithing interventions, or key duplication. Customer opinions and satisfaction are key elements for our business. For this reason we work hard to provide cheap locksmith services and a “locksmith near me” type of solution. If you find yourself in Peterborough and in a locksmith emergency crisis, call us and we’ll be there in 25 minutes!</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  props: {
    city: {
      type: String
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
ul {
  padding-left: 1rem;
  li {
    list-style-type: '✓';
    text-align: left;
    color: $ourYellow;
    padding-left: 10px;
  }
}
.city {
  .my-title {
    background: $ourBlack;
    color: #ffffff;
    border-radius: 0 0 10px 10px;
  }
}
</style>