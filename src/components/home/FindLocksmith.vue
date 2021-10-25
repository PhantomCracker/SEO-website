<template>
  <div class="find-locksmith pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div>
            <h3>Find a locksmith near me: </h3>
            <label>
              <gmap-autocomplete ref="gmapAutocomplete" @place_changed="initMarker" :options="{fields:['geometry']}"></gmap-autocomplete>
              <button class="btn btn-primary my-primary-btn" @click="addLocationMarker">Search</button>
            </label>
            <br/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindLocksmith",
  data() {
    return {
      center: {
        lat: 29.7837304,
        lng: -100.4458825
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null
    };
  },
  mounted() {
    this.locateGeoLocation();
  },
  methods: {
    initMarker(loc) {
      this.existingPlace = loc;
    },
    async addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng()
        };
        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
        let test = document.getElementsByClassName('pac-target-input')[0].value;
        if(test.includes('Bristol')) {
          this.$router.push({path: '/locksmith-bristol'})
        } else {
          this.$router.push({path: '/locksmith-near-me'})
        }
        console.log(test);
      }
    },
    locateGeoLocation: function() {
      navigator.geolocation.getCurrentPosition(res => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };
      });
    },
  }
}
</script>

<style scoped lang="scss">
  .find-locksmith {
    background-color: $ourBlack;
    h3 {
      color: #ffffff;
    }
    .my-primary-btn {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      color: $ourBlack;
      &:hover {
        background-color: $ourYellow;
      }
      &:active, &:focus, &:focus-visible {
        background-color: $ourYellow;
        border: 1px solid $ourYellow;
        box-shadow: none;
      }
    }
    .pac-target-input {
      background-color: #ffffff;
      border: none;
      height: 37px;
      color: $ourBlack;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      padding-left: 30px;
    }
  }
</style>