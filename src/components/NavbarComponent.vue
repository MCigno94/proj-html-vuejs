<template>
  <nav class="navbar navbar-light p-0">
    <div class="container">
      <LogoComponent />
      <div class="navbar_component">
        <ul class="navbar-nav flex-row align-items-center" >
          <li class="nav-item d-flex align-items-center px-3 position-relative" v-for="(item, index) in navbar" :key="index">
            <a class="text-decoration-none text-white" href="#" @click="activeClick(index)">{{item}}</a>
            <div class="square_select" :class="selected === index ? 'active' : '' "></div>
            <!-- /.square_select -->
          </li>
          <li class="nav-item d-flex align-items-center px-3">
            <button class="btn_primary bg_primary_btn" href="#">join us</button>
          </li>
          <!-- button JOIN -->
          <li class="nav-item d-flex align-items-center px-3">
            <a class="fw-bold text-white" href="#">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </a>
          </li>
          <!-- Search -->
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
  },
  data() {
    return {
      navbar: ['Home', 'Apple', 'Microsoft', 'Android', 'Forums', 'Contact us'],
      selected: 0
    }
  },
  methods: {
    activeClick(i) {
      this.selected = i;
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
    font-size: 0.8rem;
    .logo {
        img {
            width: 180px;
            height: 45px;
        }
    }
    li {
      height: 80px;
    }
}

</style>