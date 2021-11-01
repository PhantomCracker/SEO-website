<template>
  <div class="service-card d-block d-md-flex">
    <div class="card p-3 w-100" v-for="service in services" :key="service.id">
        <div class="card-body">
          <h5 class="card-title"> <font-awesome-icon :icon="service.icon" /> {{ service.title }}</h5>
          <p class="card-text pt-4">{{ service.description }}</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ServiceCard",
  data() {
    return {
      services: [
        { id: 0, title: "Emergency locksmith", icon:"tools", description: "Our experienced team of locksmithing professionals can provide you with the best level of service required by your situation."},
        { id: 1, title: "Lock change", icon:"lock", description: "We will provide you and your company with professional, prompt, efficient and competitive service."},
        { id: 2, title: "Burglary Repair", icon:"key", description: "Our team include the trained locksmiths experienced architectural hardware specialists & lock experts."},
        { id: 3, title: "Residential / Comercial", icon:"door-closed", description: "We offering you comprehensive services to the industrial, commercial & residential sectors."},
      ]
    }
  },
  components: {},
  methods: {}
}

</script>

<style scoped lang="scss">
  .service-card {
    background-color: $ourBlack;
  }
  .card {
    background-color: $ourBlack;
    .card-title {
      font-size: 1.5rem;
      color: $ourYellow;
    }
    .card-text {
      color: #ffffff;
    }

    &:hover {
      background-color: $ourYellow;
      .card-title {
        color: $ourBlack;
      }
    }
  }
</style>