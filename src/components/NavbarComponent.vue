<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <LogoComponent />
      <div class="navbar_component">
        <ul class="navbar-nav flex-row align-items-center">
          <li class="nav-item">
            <a class="text-decoration-none" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="text-decoration-none" href="#">Apple</a>
          </li>
          <li class="nav-item">
            <a class="text-decoration-none" href="#">Microsoft</a>
          </li>
          <li class="nav-item">
            <a class="text-decoration-none" href="#">Android</a>
          </li>
          <li class="nav-item">
            <a class="text-decoration-none" href="#">Forums</a>
          </li>
          <li class="nav-item">
            <a class="text-decoration-none" href="#">Contact us</a>
          </li>
          <li class="nav-item">
            <button class="btn_primary bg_primary_btn" href="#">join us</button>
          </li>
          <li class="nav-item">
            <a class="fw-bold" href="#">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </a>
          </li>
        </ul>
      </div>
      <!-- /.navbar_component -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
import LogoComponent from '@/components/LogoComponent.vue';

export default {
  name: 'NavbarComponent',
  components: {
    LogoComponent,
  }
}
</script>

<style lang="scss">

</style>