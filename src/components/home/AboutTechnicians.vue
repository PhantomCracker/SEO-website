ge<template>
  <div class="about-technicians">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 d-flex align-self-center flex-column">
          <p class="small-text text-start text-white">Our locksmith technicians are equipped with the <span class="fw-bold">latest modern technology</span> and are available 24/7 at your request.</p>
          <ul>
            <li>Master key systems</li>
            <li>High security cylinders</li>
            <li>Changing locks</li>
            <li>Unlock multiple type of doors</li>
            <li>Fast lock out service</li>
            <li>Installation and repair of locks</li>
            <li>Window locks</li>
            <li>Deadlocks & Padlocks</li>
          </ul>
        </div>
        <div class="col-12 col-lg-6 d-block">
          <img class="technician-man pt-5" src="../../../public/images/man2.png" alt="Emergency Locksmith near me on spot in 20-30 min" title="Emergency Locksmith near me on spot in 20-30 min"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutTechnicians",
  components: {},
  methods: {},
}
</script>

<style scoped lang="scss">
  .about-technicians {
    background-image: url("../../../public/images/bg3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    ul {
      columns: 2;
      -webkit-columns: 2;
      -moz-columns: 2;
      padding-left: 1rem;
      li {
        list-style-type: circle;
        text-align: left;
        color: $ourYellow;
      }
    }
    .technician-man {
      width: 35%;
      height: 100%;
      height: auto;
    }
  }
</style>
