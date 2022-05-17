<template>
  <header class="site_header bg_primary">
    <div class="container-fluid">
      <Navbar/>
    </div>
    <!-- /.container-fluid -->
  </header>
  <!-- /.site_header -->
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue';

export default {
  name: 'HeaderSiteComponent',
    components: {
      Navbar
  }
}
</script>

<style lang="scss" scoped>
.active {
    width: 16px;
    height: 16px;
    background-color: $forum-primary;
    position: absolute;
    transform-origin: 0;
    left: calc(50% - 8px);
    bottom: -12px;
    transform: rotate(-45deg);
}
</style>
