<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <LogoComponent />
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