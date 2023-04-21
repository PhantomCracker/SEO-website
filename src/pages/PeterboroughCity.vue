<template>
  <div class="city">
    <div class="hero">
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-lg-12 d-flex align-self-center flex-column mt-3 mt-md-0 pb-4">
            <h1 class="text-white text-start text-center">Local locksmith near me in <span class="my-yellow">Peterborough</span></h1>
            <ul class="text-center ps-0 pt-2">
              <li class="text-white"><h3><span class="fw-bold">Emergency</span> Locksmith Peterborough on spot in 20-30 min</h3></li>
              <li class="text-white">In case of a burglary, call us and we will repair the damage</li>
              <li class="text-white">Best Price: Labour from 39£ and locks from 25£</li>
              <li class="text-white">Refund: Money back guaranteed if we couldn’t fix</li>
              <li class="text-white">Full range of items to provide access for required services</li>
            </ul>
            <button class="btn btn-primary align-self-center my-primary-btn mt-4">
              <a class="text-white text-decoration-none" href="tel:01183100429"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ServicesOnTop />
    <ServiceCard />
    <Information />
    <AboutTechnicians />
    <ChooseUs />
    <Partners />
    
<div>
<p>UKlocallocksmith Locksmiths Peterborough only provide British, insurance approved locks and locking systems.</p>
<ul class="text-center ps-0 pt-2">
<li>A great way to find a local locksmith near me in Peterborough is by using a search engine. </li>
<li>You can also look for local reviews of locksmiths in Peterborough the area to see which ones have the best ratings and recommendations. </li>
<li>In addition, you can visit local locksmith near me store or website to inquire about services and pricing.</li>
</ul>
<h2>Locksmith Peterborough covering areas</h2></br>
<p>We have a local locksmith near your location and he will be on spot in 20-30 minutes. Our locksmiths provide a reliable and professional locksmith service across Peterborough and the surrounding areas, including:</p>
<p>Peterborough, Bury, Newark, Fleet, Huntingdon, Spalding, St Neots, Stamford, Hampton, Wisbech, Bourne, Oundle, St Ives, Whittlesey, Holbeach, March, Yaxley, Chatteris, Ramsey, Colne, Holywell, Sawtry, Southwick, Walton, Wennington, Ashton, Brampton, Covington, Eastgate, Easton, Ellington, Hartford, Hilton, Houghton, Morton, Newstead, Northborough, Perry, Upton, Wansford, Werrington, Weston, Westwood</p>
<h2>Call Locksmith Peterborough 24/7</h2></br>
<p>UKlocallocksmith Locksmiths Peterborough is a cheap and experienced locksmith service and we are proud to be known as the “fastest locksmith in Peterborough” by anyone that uses our services. You can call us and discuss your problem with us, and we will diagnose the situation, and give you a free quote.</p>
<h2>Emergency Locksmith near me 24/7</h2></br>
<p>UKlocallocksmith locksmiths are available 24 hours a day to help you. We supply & fit all major brands of locks, and can also supply and fit any of the various multi-point locks for uPVC doors or composite doors & also aluminium doors. UKlocallocksmith Locksmiths Peterborough can provide the latest snap resistant and burglar proof lock cylinders for any door type and any wooden doors can be upgraded with B/S3621 locks. Have you had a break in? We can do damage repair on your doors and supply and fit new, secure locks.</p>
<h2>Certified Locksmith near me Peterborough</h2></br>
<p>All of our locksmiths are vetted, highly trained, uniformed, DBS checked and provide a guarantee for their work. UKlocallocksmith locksmiths aim to be with you within the hour, call us and we’ll tell you how we’ll solve the problem and provide you an upfront cost for doing so.</p>
</div>
    
  </div>
</template>

<script>

import ServicesOnTop from "@/components/home/ServicesOnTop";
import ServiceCard from "@/components/home/ServicesCard";
import Information from "@/components/home/Information";
import AboutTechnicians from "@/components/home/AboutTechnicians";
import ChooseUs from "@/components/home/ChooseUs";
import Partners from "@/components/home/Partners";
export default {
  name: "PeterboroughCity",
  components: {Partners, ChooseUs, AboutTechnicians, Information, ServiceCard, ServicesOnTop},
  mounted() {
    let whatConvertsScript = document.createElement('script')
    whatConvertsScript.setAttribute('src', '//scripts.iconnode.com/100729.js')
    document.head.appendChild(whatConvertsScript)
  },
  metaInfo: {
    title: 'Emergency locksmith near me in Peterborough',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        vmid: 'description',
        name: 'description',
        content: 'Locksmith near me in Peterborough area 24/7. Emergency Locksmith on spot in 20-30 min. best quality locksmith services with multiple teams located near you'
      }
    ]
  }
}
</script>

<style scoped lang="scss">
.hero {
  background-image: url("../../public/images/hero-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 500px;
  border-bottom: 10px solid #000000;

  ul {
    list-style-type: none;
  }

  @media (max-width: 700px) {
    max-height: 100%;
  }

  .my-primary-btn {
    width: 25%;
    @media (max-width: 700px) {
      width: 50%;
    }
  }

  .hero-man {
    background-image: url("../../public/images/header-man.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 300px;
    @media (max-width: 700px) {
      border-top: 10px solid black;
    }
  }
  li {
    font-family: 'Ubuntu', sans-serif;
  }
}
h1 {
  font-size: 2.5rem;
  &.with-border {
    border-left: 10px solid $ourYellow;
    padding-left: 25px;
    @media (max-width: 700px) {
      font-size: 3.5rem;
      padding-left: 5px;
    }
  }
}
.btn-primary {
  background-color: $ourYellow !important;
  border: none;
  &:focus, :active, :target, :visited {
    border: none;
    box-shadow: none;

  }
  a {
    text-align: center;
  }
}
</style>
