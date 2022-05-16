<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <LogoComponent />
      <div class="navbar_component">
        <ul class="navbar-nav flex-row align-items-center" >
          <li class="nav-item" v-for="(item, index) in navbar" :key="index">
            <a class="text-decoration-none" href="#" @click="activeClick(index)">{{item}}</a>
            <div class="square_select" :class="selected === index ? 'active' : '' "></div>
            <!-- /.square_select -->
          </li>
          <li class="nav-item">
            <button class="btn_primary bg_primary_btn" href="#">join us</button>
          </li>
          <!-- button JOIN -->
          <li class="nav-item">
            <a class="fw-bold" href="#">
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
      selected: null
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
        padding: 0 1rem;
        position: relative;
        a {
            color: white;
        }
    }
    form {
        button,
        input {
            display: inline-block;
            height: fit-content;
        }
    }
}

</style>