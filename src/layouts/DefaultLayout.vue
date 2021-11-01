<template>
  <div>
<!--    Start Navbar -->
    <h1>This is navbar</h1>
<!--    End Navbar-->
    <router-view></router-view>
<!--    Start Footer -->
    <div class="footer">
      <footer class="section footer-classic context-dark bg-image" style="background: #2d3246;">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="pr-xl-4">
                <a class="brand" href="#"><img class="brand-logo-light" src="@/assets/logo.png" alt="logo"></a>
                <p>We provide the best quality locksmith services with multiple teams located near you, our services include business locksmith services, emergency locksmith services, 24-hour locksmith services, with us you’ll receive trusted locksmith services in the most urgent of manner.</p>
                <p class="rights"><span>©  </span><span class="copyright-year">2021</span><span> </span><span> UK Local Locksmith</span><span> - </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div class="d-md-none"><hr/></div>
            <div class="col-sm-12 col-md-6 align-self-center">
              <ul class="contact-list">
                <li><span><font-awesome-icon icon="map-marked-alt"></font-awesome-icon></span>Address: 78 Vivien Avenue</li>
                <li><span><font-awesome-icon icon="envelope"></font-awesome-icon></span>Email: <a href="mailto:#">office@uklocallocksmith.co.uk</a></li>
                <li><span><font-awesome-icon icon="phone-alt"></font-awesome-icon></span>Phone: <a href="tel:03333446467">03333446467</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
<!--    End Footer -->
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  components: {},
  methods: {}
}
</script>

<style scoped lang="scss">
.context-dark, .bg-gray-dark, .bg-primary {
  color: rgba(255, 255, 255, 0.8);
}

.footer-classic a, .footer-classic a:focus, .footer-classic a:active {
  color: #ffffff;
}
.nav-list li {
  padding-top: 5px;
  padding-bottom: 5px;
}

.nav-list li a:hover:before {
  margin-left: 0;
  opacity: 1;
  visibility: visible;
}

ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 23px;
  font: 900 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}
.social-container .col {
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.nav-list li a:before {
  content: "\f14f";
  font: 400 21px/1 "Material Design Icons";
  color: #4d6de6;
  display: inline-block;
  vertical-align: baseline;
  margin-left: -28px;
  margin-right: 7px;
  opacity: 0;
  visibility: hidden;
  transition: .22s ease;
}
.contact-list {
  border: 3px dashed $ourYellow;
  padding: 30px;
  li {
    span {
      margin-right: 10px;
    }
  }
}

</style>