<template>
  <div class="services-on-top">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-3">
          <img src="../../../public/images/services/toprated.png" alt="satisfied_badge" width="100" height="100"/>
          <h6 class="mt-3 my-yellow">Professional services</h6>
        </div>
        <div class="col-6 col-md-3">
          <img src="../../../public/images/services/247-service-badge.png" alt="satisfied_badge" width="100" height="100"/>
          <h6 class="mt-3 my-yellow">20-30 minutes response</h6>
        </div>
        <div class="col-6 col-md-3">
          <img src="../../../public/images/services/warranty.png" alt="satisfied_badge" width="100" height="100"/>
          <h6 class="mt-3 my-yellow">1 year Warranty</h6>
        </div>
        <div class="col-6 col-md-3">
          <img src="../../../public/images/services/7484684_money-back-guarantee-png-quality-guarantee-vector-png.png" alt="satisfied_badge" width="100" height="100"/>
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
  }

</style>