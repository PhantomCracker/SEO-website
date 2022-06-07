<template>
  <div class="about-us">
    <div class="container about-us-bg pt-4 mt-4 pb-4 mb-4">
      <div class="row">
        <div class="col-12 col-lg-6 mx-auto d-block mb-3 mt-3 my-yellow">
          <h1>Locksmith near you - A Tad About Us</h1>
        </div>
      </div>
      <div class="row text-start">
        <div class="col-12 col-lg-4">
          <img src="../../../public/images/MaskGroup.png" class="rounded mx-auto d-block  mb-3" alt="about-us-photo"/>
        </div>
        <div class="col-12 col-lg-8 ps-5">
          <p>We're a <span class="fw-bold">UK Local Locksmith Business</span> that started as a small but ambitious adventure in <span class="fw-bold">2002</span> providing emergency and 24h locksmith services. In only a few years we have grown the quality of our services and the reliability of our professional locksmiths. We helped build the good name of our business and with a natural growth the maturity of our company soon followed.</p>
          <p>We are licensed as a full service locksmithing company, successfully and efficiently servicing the entire UK area – Greater London, Milton Keynes, Coventry, Birmingham, Nottingham, Sheffield, Leeds, Manchester, Liverpool, Bristol, Bath, Swindon, Reading, York, Cambridge, Derby, Doncaster. We are equally covered by our network of highly experienced professionals.</p>
          <p>All our locksmiths are fully certified and we invest time and energy to constantly update both our standard toolkits and our locksmithing knowledge – techniques, materials, best practices and latest technologies.</p>
          <div>
            <b-button v-b-toggle="'read-more'" class="collapse-button d-flex">Read more</b-button>
            <b-collapse id="read-more">
              <p>We provide full locksmith services, emergency locksmith services, business locksmith services, urgent locksmith services, and many more. Our experienced team of locksmithing professionals can provide you with the best level of service required by your situation, from simple lock replacements and front door lock-outs to more advanced security systems planning or improvements. Our assistance is ready to be delivered in just 25 minutes from the moment you have placed your call – we believe in the importance of delivering a fast service and restoring our customers’ mobility and security in the shortest time possible. We believe in the quality of our locksmith work and offer a one year guarantee on all locks.</p>
              <p>Our dedication to service quality and customer satisfaction has helped us to build a strong reputation as a professional provider of locksmithing services for all types and sizes of customers and problems. It is an ongoing mission for us to preserve and continue to strengthen this reputation through the delivery of the best locksmithing services, the highest quality of workmanship and utterly pleasant customer experiences.</p>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  components: {},
  // mounted() {
  //   this.$gtag.event('page', { method: 'Visited page' })
  // },
  methods: {}
}
</script>

<style scoped lang="scss">
  .about-us {
    h1 {
      font-weight: 500;
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