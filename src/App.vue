<template>
  <div id="app">
    <HeaderSite/>
    <MainSite/>
    <FooterSite/>
  </div>
</template>

<script>
import HeaderSite from '@/components/HeaderSiteComponent.vue';
import MainSite from '@/components/MainSiteComponent.vue';
import FooterSite from '@/components/FooterSiteComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderSite,
    MainSite,
    FooterSite
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
