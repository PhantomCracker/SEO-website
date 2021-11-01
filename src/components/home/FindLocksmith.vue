<template>
  <div class="find-locksmith pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div>
            <h3>Find a locksmith near me: </h3>
            <p class="text-white">*Please select a suggestion</p>
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
        let userInput = document.getElementsByClassName('pac-target-input')[0].value;
        if(userInput.includes('Brighton')) {
          await this.$router.push({name: 'Cities', params: { city: 'Brighton' }})
        } else if(userInput.includes('Bristol')) {
          await this.$router.push({name: 'Cities', params: { city: 'Bristol' }})
        } else if(userInput.includes('Birmingham')) {
          await this.$router.push({name: 'Cities', params: { city: 'Birmingham' }})
        } else if(userInput.includes('Crewe')) {
          await this.$router.push({name: 'Cities', params: { city: 'Crewe' }})
        } else if(userInput.includes('Colchester')) {
          await this.$router.push({name: 'Cities', params: { city: 'Colchester' }})
        } else if(userInput.includes('Chester')) {
          await this.$router.push({name: 'Cities', params: { city: 'Chester' }})
        } else if(userInput.includes('Chelmsford')) {
          await this.$router.push({name: 'Cities', params: { city: 'Chelmsford' }})
        } else if(userInput.includes('Cambridge')) {
          await this.$router.push({name: 'Cities', params: { city: 'Cambridge' }})
        } else if(userInput.includes('Coventry')) {
          await this.$router.push({name: 'Cities', params: { city: 'Coventry' }})
        } else if(userInput.includes('Durham')) {
          await this.$router.push({name: 'Cities', params: { city: 'Durham' }})
        } else if(userInput.includes('Derby')) {
          await this.$router.push({name: 'Cities', params: { city: 'Derby' }})
        } else if(userInput.includes('Doncaster')) {
          await this.$router.push({name: 'Cities', params: { city: 'Doncaster' }})
        } else if(userInput.includes('Guildford')) {
          await this.$router.push({name: 'Cities', params: { city: 'Guildford' }})
        } else if(userInput.includes('Glouchester')) {
          await this.$router.push({name: 'Cities', params: { city: 'Glouchester' }})
        } else if(userInput.includes('Ipswich')) {
          await this.$router.push({name: 'Cities', params: { city: 'Ipswich' }})
        } else if(userInput.includes('Leeds')) {
          await this.$router.push({name: 'Cities', params: { city: 'Leeds' }})
        } else if(userInput.includes('Liverpool')) {
          await this.$router.push({name: 'Cities', params: { city: 'Liverpool' }})
        } else if(userInput.includes('Luton')) {
          await this.$router.push({name: 'Cities', params: { city: 'Luton' }})
        } else if(userInput.includes('Leicester')) {
          await this.$router.push({name: 'Cities', params: { city: 'Leicester' }})
        } else if(userInput.includes('Middlesbrough')) {
          await this.$router.push({name: 'Cities', params: { city: 'Middlesbrough' }})
        } else if(userInput.includes('Keynes')) {
          await this.$router.push({name: 'Cities', params: { city: 'Milton-Keynes' }})
        } else if(userInput.includes('Manchester')) {
          await this.$router.push({name: 'Cities', params: { city: 'Manchester' }})
        } else if(userInput.includes('Nottingham')) {
          await this.$router.push({name: 'Cities', params: { city: 'Nottingham' }})
        } else if(userInput.includes('Northampton')) {
          await this.$router.push({name: 'Cities', params: { city: 'Northampton' }})
        } else if(userInput.includes('Newcastle')) {
          await this.$router.push({name: 'Cities', params: { city: 'Newcastle' }})
        } else if(userInput.includes('Norwich')) {
          await this.$router.push({name: 'Cities', params: { city: 'Norwich' }})
        } else if(userInput.includes('Oxford')) {
          await this.$router.push({name: 'Cities', params: { city: 'Oxford' }})
        } else if(userInput.includes('Oldham')) {
          await this.$router.push({name: 'Cities', params: { city: 'Oldham' }})
        } else if(userInput.includes('Peterborough')) {
          await this.$router.push({name: 'Cities', params: { city: 'Peterborough' }})
        } else if(userInput.includes('Reading')) {
          await this.$router.push({name: 'Cities', params: { city: 'Reading' }})
        } else if(userInput.includes('Stoke-on-Trent')) {
          await this.$router.push({name: 'Cities', params: { city: 'Stoke-on-Trent' }})
        } else if(userInput.includes('Sheffield')) {
          await this.$router.push({name: 'Cities', params: { city: 'Sheffield' }})
        } else if(userInput.includes('Stevenage')) {
          await this.$router.push({name: 'Cities', params: { city: 'Stevenage' }})
        } else if(userInput.includes('Swindon')) {
          await this.$router.push({name: 'Cities', params: { city: 'Swindon' }})
        } else if(userInput.includes('Sunderland')) {
          await this.$router.push({name: 'Cities', params: { city: 'Sunderland' }})
        } else if(userInput.includes('Wigan')) {
          await this.$router.push({name: 'Cities', params: { city: 'Wigan' }})
        } else if(userInput.includes('Warrington')) {
          await this.$router.push({name: 'Cities', params: { city: 'Warrington' }})
        } else {
          this.$router.push({path: '/locksmith-near-me'})
        }
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