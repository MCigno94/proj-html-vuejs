<template>
  <main class="site_main">
    <section class="jumbotrone text-white img_cover">
      <div class="container position-relative">
        <div class="get_now position-absolute left-0 top-50">
          <h1 class="fw-bold m-0"> Tech Forum!</h1>
          <p class="py-3">Discuss all the latest technology news and trends</p>
          <button class="fw-bold btn_primary bg_primary">get avada now!</button>
          <!-- button -->
        </div>
        <!-- /.get_now -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.jumbotrone -->
    <section class="avada_forum bg_light text-center">
      <h5 class="subtitle_section text_light_dark">avada forum is the place to be</h5>
      <p class="text_light_dark">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque! <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </section>
    <!-- /.avada_forum -->

    <NewsArticleComponent />
    
    <div class="our_blog text-uppercase bg_primary_btn text-center">
      <a class="text-white text-decoration-none" href="#">
        read our blog
        <font-awesome-icon class="px-1" icon="fa-solid fa-right-long" />
      </a>
    </div>
    <!-- /.our_blog -->
    <section class="forum bg_light">
      <div class="container">
        <div class="title_section">
          <h5 class="subtitle_section text-center">phasellus eget metus</h5>
          <!-- /.subtitle_section -->
          <h3 class="title fw-bold text-center">Forum Sections</h3>
        </div>
        <!-- /.title_section -->
        <div class="activeIcon h-3 my-4 m-auto bg_active"></div>
        <div class="row row-cols-4">
          <!-- /.activeIcon -->
          <div class="cols p-3" v-for="(icon, index) in iconsMain" :key="index">
            <div class="icon d-flex justify-content-center align-items-center flex-column bg-white">
              <div class="d-flex justify-content-center align-items-center my-1 m-auto text-white text-center rounded-circle">
                <font-awesome-icon :icon="icon.description" />
              </div>
              <p class="fw-bold fs-5 mb-1 text-center">{{icon.title}}</p>
            </div>
            <!-- /.icon -->
          </div>
          <!-- /.cols -->      
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.forum -->
    <div class="our_forum text-uppercase bg_primary_btn text-center">
      <a class="text-white text-decoration-none" href="#">
        go to our forum
        <font-awesome-icon class="px-1" icon="fa-solid fa-right-long" />
      </a>
    </div>
    <!-- /.our_forum -->
    <section class="join text-white text-center">
      <div class="container w-100">
        <div class="sign_up w-50 m-auto">
          <h1 class="fw-bold"> Hey! Join to our Community</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ut rem tenetur cumque enim, impedit deleniti consectetur nihil nesciunt.</p>
          <button class="fw-bold btn_primary bg_primary">
            sign up
            <span class="px-2">
              <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </span>
          </button>
          <!-- button -->
        </div>
        <!-- /.get_now -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.join -->
    <section class="subscribe bg_light text-center">
      <h4 class="pb-3 fw-bold">Subscribe to our Newsletter</h4>
      <div class="input-group mb-3 m-auto">
        <input type="email" class="form-control rounded" placeholder="Insert your email*">
        <button class="btn_primary bg_primary_btn ms-4" type="submit" id="button-addon2">send</button>
      </div>
    </section>
    <!-- /.subscribe -->

  </main>
  <!-- /.site_main -->
</template>

<script>
import NewsArticleComponent from '@/components/NewsArticleComponent.vue';

export default {
  name: 'MainSiteComponent',
  components: {
    NewsArticleComponent
  },
  data() {
    return {
      iconsMain: [{
        description: 'fa-solid fa-file-lines',
        title: 'News & Community'
      },
      {
        description: 'fa-brands fa-apple',
        title: 'Apple Forum'
      },
      {
        description: 'fa-brands fa-windows',
        title: 'Microsoft Forum'
      },
      {
        description: 'fa-brands fa-android',
        title: 'Android Forum'
      },
      {
        description: 'fa-solid fa-mug-saucer',
        title: 'General Discussion'
      },
      {
        description: 'fa-solid fa-cubes',
        title: 'App & Software'
      },
      {
        description: 'fa-solid fa-tv',
        title: 'Gadgets & Stuff'
      },
      {
        description: 'fa-solid fa-wrench',
        title: 'Tutorials & Guides'
      }  
      ],
    }
  },
}
</script>

<style lang="scss" scoped>

</style>