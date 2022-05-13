<template>
  <header class="site_header bg_primary">
    <div class="container">
      <Navbar/>
    </div>
    <!-- /.container -->
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

<style lang="scss">

</style>
