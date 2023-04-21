<template>
  <div class="information">
    <div class="container pt-5 pb-5">
      <div class="row">
        <h4 class="fw-bold">24/7 Emergency locksmith services</h4>
        <h4 class="pt-3 pb-3 fw-lighter">We run the fastest response Locksmith Service all across the country – 24/7, all year round</h4>
        <h6> When you call our Emergency number we will:
          <ul class="pt-3 pb-3">
            <li>✔ Answer immediately</li>
            <li>✔ Be with you in less than 25 minutes</li>
            <li>✔ Fix your emergency</li>
          </ul>
        </h6>
        <p class="small-text">Looking for a cheap and near, 24 hour, same day, local emergency locksmith?</p>
        <p>We provide the best quality locksmith services with multiple teams located near you, our services include business locksmith services, emergency locksmith services, 24-hour locksmith services, with us you’ll receive trusted locksmith services in the most urgent of manner.</p>
        <p>Our Locksmiths teams are highly trained to provide security advice on a wide variety of applications. We supply and fit all major brands of lock and security fittings. Our 24/7 emergency call-out service will ensure your property is secured quickly and efficiently. We’re always ready to help our customers with the best team of professional locksmiths wherever you are, you can be assured we have the right team near you, ready to assist 24 hours, 7 days a week.</p>
        <p class="small-text">Our locksmiths are located near you and only 25 minutes away. Labour from £39 and Locks from £25 with 12-months warranty.</p>
        <button class="btn btn-primary my-primary-btn mt-4">
          <a class="text-white text-decoration-none" href="tel:01183100429"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information",
  components: {},
  methods: {}
}
</script>

<style scoped lang="scss">
  .information{
    .container {
      background-image: url("../../../public/images/bglayer_1.png");
      background-size: cover;
      background-repeat: no-repeat;

    }
    h3 {
      font-weight: 200;
    }
    ul {
      li {
        list-style-type: none;
        font-style: italic;
      }
    }
    .my-primary-btn {
      width: 25%;
      margin: 0 auto;
      @media screen and (max-width: 500px)  {
        width: 70%;
      }
    }
  }
</style>
