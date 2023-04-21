<template>
  <div class="services-on-top">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-3">
          <img src="../../../public/images/services/toprated.png" alt="Locksmith Professional services" title="Locksmith Professional services"/>
          <h6 class="mt-3 my-yellow">Locksmith Professional services</h6>
        </div>
        <div class="col-6 col-md-3">
          <img src="../../../public/images/services/247-service-badge.png" alt="Fast Locksmith - 20-30 minutes response" title="Fast Locksmith - 20-30 minutes response"/>
          <h6 class="mt-3 my-yellow">Fast Locksmith - 20-30 minutes response</h6>
        </div>
        <div class="col-6 col-md-3">
          <img src="../../../public/images/services/warranty.png" alt="Best Locksmith Service - 1 year Warranty" title="Best Locksmith Service - 1 year Warranty"/>
          <h6 class="mt-3 my-yellow">Best Locksmith Service - 1 year Warranty</h6>
        </div>
        <div class="col-6 col-md-3">
          <img src="../../../public/images/services/7484684_money-back-guarantee-png-quality-guarantee-vector-png.png" alt="Satisfied customers - Certified Locksmiths" title="Satisfied customers - Certified Locksmiths"/>
          <h6 class="mt-3 my-yellow">Satisfied customers</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesOnTop"
}
</script>

<style scoped lang="scss">
  .services-on-top {
    background-color: $ourBlack;
    border-top: 3px solid $ourYellow;
    padding-top: 20px;
    img {
      width: 100px;
      height: 100px;
      @media (max-width: 700px) {
        width: 50px;
        height: 50px;
      }
    }
  }

</style>
