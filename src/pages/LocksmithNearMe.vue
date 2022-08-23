<template>
  <div>
    <Locksmiths />
  </div>
</template>

<script>
import Locksmiths from "../components/locksmith-near-me/Locksmiths";

export default {
  name: "LocksmithNearMe",
  components: {
    Locksmiths
  },
  mounted() {
    let whatConvertsScript = document.createElement('script')
    whatConvertsScript.setAttribute('src', '//scripts.iconnode.com/100729.js')
    document.head.appendChild(whatConvertsScript)
  },
  metaInfo: {
    title: 'UK Local Locksmith',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        vmid: 'description',
        name: 'description',
        content: '24/7 emergency locksmith services. UK Local Locksmith also provide a range of services and supplies designed to improve the security of your home or business'
      }
    ]
  }
}
</script>

<style scoped lang="scss">

</style>