<template>
  <div class="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-12 d-flex align-self-center flex-column mt-3 mt-md-0">
          <h1 class="text-white text-start with-border">Emergency <span class="my-yellow">Locksmith</span> service available 24/7</h1>
          <ul class="with-border">
            <li class="text-white text-start pl-2">Service on spot withing 25 minute</li>
            <li class="text-white text-start pl-2">Local service from £49</li>
            <li class="text-white text-start pl-2">Locks from £25</li>
          </ul>
          <button class="btn btn-primary align-self-center w-50 my-primary-btn mt-4">
            <a class="text-white text-decoration-none" href="tel:03333446467"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
          </button>
        </div>
        <div class="col-lg-6 col-sm-12 d-sm-none d-md-block">
          <img class="hero-man pt-5" src="../../../public/images/header-man.png" alt="hero-man" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  components: {},
  methods: {}
}
</script>

<style scoped lang="scss">
  .hero {
    background-image: url("../../../public/images/hero-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .hero-man {
      width: 100%;
      height: 100%;
      height: auto;
    }
  }
  h1 {
    font-size: 4rem;
    &.with-border {
      border-left: 10px solid $ourYellow;
      padding-left: 25px;
    }
  }
  .btn-primary {
    backgorund-color: $ourYellow !important;
    a {
      text-align: center;
    }
  }
</style>