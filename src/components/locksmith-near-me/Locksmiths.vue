<template>
  <div class="locksmiths">
    <div class="container">
      <div class="row pt-5 pb-5">
        <div class="col-12 pb-5">
          <h1>The main reason to choose us</h1>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card shadow">
            <div class="card-body">
              <ul class="d-flex flex-column align-items-center">
                <li>Emergency Locksmith 24/7 in your location</li>
                <li>Labour from 49£ and locks from 25£</li>
                <li>Money back guaranteed if we couldn’t fix</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card shadow">
            <div class="card-body">
              <ul class="d-flex flex-column align-items-center">
                <li>After burglary Repair</li>
                <li>24/7 for Residential or Comercial</li>
                <li>Full range of items to provide access for required services</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 pt-4">
          <button class="btn btn-primary align-self-center w-25 my-primary-btn mt-4">
            <a class="text-white text-decoration-none" href="tel:03333446467"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
          </button>
        </div>
      </div>
      <div class="row pt-4 pb-5">
        <div class="col-12">
          <img src="../../../public/images/Main-Logo.png" alt="main-logo" class="pb-5" />
          <h5 class="pb-4">We cover multiple areas around London with professional locksmiths right near you: </h5>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>B</h2>
              <p>Locksmith in Brighton</p>
              <p>Locksmith in Bristol</p>
              <p>Locksmith in Birgmingham</p>
            </div>
            <div class="col-12 col-md-3">
              <h2>C</h2>
              <p>Locksmith in Crewe</p>
              <p>Locksmith in Colchester</p>
              <p>Locksmith in Chester</p>
              <p>Locksmith in Chelmsford</p>
              <p>Locksmith in Cambridge</p>
              <p>Locksmith in Coventry</p>
            </div>
            <div class="col-12 col-md-3">
              <h2>D</h2>
              <p>Locksmith in Durham</p>
              <p>Locksmith in Derby</p>
              <p>Locksmith in Doncaster</p>
            </div>
            <div class="col-12 col-md-3">
              <h2>G</h2>
              <p>Locksmith in Guildford</p>
              <p>Locksmith in Glouchester</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>I</h2>
              <p>Locksmith in Ipswich</p>
            </div>
            <div class="col-12 col-md-3">
              <h2>L</h2>
              <p>Locksmith in Leeds</p>
              <p>Locksmith in Liverpool</p>
              <p>Locksmith in Luton</p>
              <p>Locksmith in Leicester</p>
            </div>
            <div class="col-12 col-md-3">
              <h2>M</h2>
              <p>Locksmith in Middlesbrough</p>
              <p>Locksmith in Milton Keynes</p>
              <p>Locksmith in Manchester</p>
            </div>
            <div class="col-12 col-md-3">
              <h2>N</h2>
              <p>Locksmith in Nottingham</p>
              <p>Locksmith in Northampton</p>
              <p>Locksmith in Newcastle</p>
              <p>Locksmith in Norwich</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>O</h2>
              <p>Locksmith in Oxford</p>
              <p>Locksmith in Oldham</p>
            </div>
            <div class="col-12 col-md-3">
              <h2>P</h2>
              <p>Locksmith in Peterborough</p>
            </div>
            <div class="col-12 col-md-3">
              <h2>R</h2>
              <p>Locksmith in Reading</p>
            </div>
            <div class="col-12 col-md-3">
              <h2>S</h2>
              <p>Locksmith in Stoke on Trent</p>
              <p>Locksmith in Sheffield</p>
              <p>Locksmith in Stevenage</p>
              <p>Locksmith in Swindon</p>
              <p>Locksmith in Sunderland</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>W</h2>
              <p>Locksmith in Wigan</p>
              <p>Locksmith in Warrington</p>
            </div>
            <div class="col-12 col-md-3">

            </div>
            <div class="col-12 col-md-3">

            </div>
            <div class="col-12 col-md-3">

            </div>
          </div>
<!--          <ul class="cities">-->
<!--              <router-link v-for="(city, id) in cities" :key="id" :to="'/locksmith-' + city.name.toLowerCase()" tag="li">Professional locksmith in {{ city.name }}</router-link>-->
<!--          </ul>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Locksmiths",
  components: {},
  data() {
    return {
      cities: [
        { id: 1, name: "Bristol" },
        { id: 2, name: "Sheffield" },
        { id: 3, name: "Chester" },
        { id: 4, name: "Milton Keynes" },
        { id: 5, name: "Oxford" },
        { id: 6, name: "Middlesbrough" },
        { id: 7, name: "Stevenage" },
        { id: 8, name: "Reading" },
        { id: 9, name: "Leeds" },
        { id: 10, name: "Guildford" },
        { id: 11, name: "Newcastle" },
        { id: 12, name: "Colchester" },
        { id: 13, name: "Ipswich" },
        { id: 14, name: "Wigan" },
        { id: 15, name: "Birmingham" },
        { id: 16, name: "Derby" },
        { id: 17, name: "Leicester" },
        { id: 18, name: "Brighton" },
        { id: 19, name: "Stoke on Trent" },
        { id: 20, name: "Crewe" },
        { id: 21, name: "Peterborough" },
        { id: 22, name: "Norwich" },
        { id: 23, name: "Gloucester" },
        { id: 24, name: "Swindon" },
        { id: 25, name: "Sunderland" },
        { id: 26, name: "Cambridge" },
        { id: 27, name: "Coventry" },
        { id: 28, name: "Warrington" },
        { id: 29, name: "Manchester" },
        { id: 30, name: "Oldham" },
        { id: 31, name: "Liverpool" },
        { id: 32, name: "Chelmsford" }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.locksmiths {
  background: #fff8f6;
}
ul {
  padding-left: 1rem;
  li {
    list-style-type: '✓';
    text-align: left;
    color: $ourYellow;
    padding-left: 10px;
  }
  &.cities li{
    list-style-type: circle;
    color: $ourBlack;
  }
}

</style>