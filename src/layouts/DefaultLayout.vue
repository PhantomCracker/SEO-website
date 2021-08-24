<template>
  <div>
<!--    Start Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light navigation ">
  <div class="container-fluid">
      <a class="navbar-brand" href="#">
         <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <a class="nav-link active h5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link h5" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link h5" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link h5" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link h5" href="#">Pages</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link h5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Contact Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
              <h5>Contacts</h5>
              <ul class="contact-list">
                <li>Address: 78 Vivien Avenue</li>
                <li>Email: <a href="mailto:#">office@uklocallocksmith.co.uk</a></li>
                <li>Phone: <a href="tel:03333446467">03333446467</a></li>
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
// #ffe9e9

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

.navigation {
  background: #ffe9e9 !important;
  min-height: 60px !important;
  li {
    padding-right: 10px;
    }
}

.container-fluid {
  min-height: 80px;
} 

.navbar-brand {
   padding-left: 300px;
}
</style>