<template>
  <div class="partners">
    <vueper-slides
      class="no-shadow"
      autoplay
      :arrows="false"
      :visible-slides="3"
      fixed-height="150px"
      slide-multiple
      :gap="3"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
      style="background-size: auto; background-repeat: no-repeat">
    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "Partners",
  data: () => ({
    slides: [
      {
        image: require('../../../public/images/partners/ABS.png')
      },
      {
        image: require('../../../public/images/partners/ASSA-ABLOY.png')
      },
      {
        image: require('../../../public/images/partners/Chub.png')
      },
      {
        image: require('../../../public/images/partners/CISA.png')
      },
      {
        image: require('../../../public/images/partners/ERA.png')
      },
      {
        image: require('../../../public/images/partners/Ultion.png')
      },
      {
        image: require('../../../public/images/partners/Union.png')
      },
      {
        image: require('../../../public/images/partners/YALE.png')
      },
      {
        image: require('../../../public/images/partners/ABS.png')
      }
    ]
  }),
  components: {
    VueperSlides,
    VueperSlide
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .vueperslide {
    background-size: auto;
    background-repeat: no-repeat;
  }
</style>