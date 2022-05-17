<template>
  <main class="site_main">
    <section class="jumbotrone text-white">
      <div class="container">
        <div class="get_now">
          <h1 class="fw-bold"> Tech Forum!</h1>
          <p>Discuss all the latest technology news and trends</p>
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
    <section class="news">
      <div class="container p-0">
        <div class="title_section">
          <h5 class="subtitle_section text-center">phasellus eget metus</h5>
          <!-- /.subtitle_section -->
          <h3 class="title fw-bold text-center">All the lastes news</h3>
        </div>
        <!-- /.title_section -->
        <div class="top_article">
          <div class="row row-cols-3">
            <div class="cols" v-for="(articleTop, index) in topArticles" :key="index">
              <div class="activeBorder h-3 my-4 w-25 m-auto"></div>
              <div class="card border-0 pt-3">
                <img class="img-fluid" :src="getImgUrl(articleTop)" alt="article">
                <div class="card-body p-0 py-3">
                  <h6 class="fw-bold mb-1">{{articleTop.title}}</h6>
                  <div class="data text_light_dark pb-2">
                      {{articleTop.data}} |
                      <span class="text-dark fw-bold" v-if="articleTop.comments == true">
                        2 Comments
                      </span> 
                      <span v-else>
                        Comments off
                      </span> 
                  </div>
                  <p class="text_light_dark">{{articleTop.description}}</p>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
            <!-- /.cols -->      
          </div>
          <!-- /.row -->
        </div>
        <!-- /.top_article -->
        <div class="featured_article text-white my-4">
          <div class="description">
            <p class="text-uppercase fw-bold">featured article</p>
            <h1 class="fw-bold">Cras malesuada et orci eget pharetra</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem fuga quod, perspiciatis rerum fugit illo ipsum nisi, magni, omnis molestias amet ratione sapiente voluptas incidunt nesciunt optio dolore alias.</p>
            <button class="fw-bold btn_primary px-4 bg_primary_btn">
              read more
              <span class="px-2">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </span>
            </button>
            <!-- button -->
          </div>
          <!-- /.description -->
        </div>
        <!-- /.featured_article -->
        <div class="bottom_article">
          <div class="row row-cols-3 bottom_article py-4">
            <div class="cols" v-for="(articleBottom, index) in bottomArticles" :key="index">
              <div class="card border-0 pt-3">
                <img class="img-fluid" :src="getImgUrl(articleBottom)" alt="article">
                <div class="card-body p-0 py-3">
                  <h6 class="fw-bold mb-1">{{articleBottom.title}}</h6>
                  <div class="data text_light_dark pb-2">
                      {{articleBottom.data}} |
                      <span class="text-dark fw-bold" v-if="articleBottom.comments == true">
                        2 Comments
                      </span> 
                      <span v-else>
                        Comments off
                      </span> 
                  </div>
                  <p class="text_light_dark">{{articleBottom.description}}</p>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
            <!-- /.cols -->      
          </div>
          <!-- /.row -->
        </div>
        <!-- /.bottom_article -->
        <div class="tutorials_guides d-flex">
          <div class="preview text-white">
            <div class="description">
              <p class="text-uppercase fw-bold">reviewed product</p>
              <h1 class="fw-bold">Mauris viverra atisan ipsum eget felis prims efficitur varius</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem fuga quod, perspiciatis rerum fugit illo ipsum nisi, magni.</p>
              <button class="fw-bold btn_primary px-4 bg_primary_btn">
                read more
                <span class="px-2">
                  <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </span>
              </button>
              <!-- button -->
            </div>
            <!-- /.description -->
          </div>
          <!-- /.preview -->
          <div class="articles_tutorials ps-4">
            <div class="container">
              <h3 class="fw-bold">Tutorials & Guides</h3>
              <div class="activeBorder h-3 my-3 w-25"></div>
              <!-- /.activeBorder -->
              <div class="row pt-2 gap-2">
                <div class="cols d-flex" v-for="(articleAside, index) in asideArticles" :key="index">
                  <div class="card_left">
                    <img class="img-fluid " :src="getImgUrl(articleAside)" alt="article">
                  </div>
                  <!-- /.card_left -->
                  <div class="card_right p-2">
                    <h6 class="fw-bold mb-1">{{articleAside.title}}</h6>
                    <div class="data text_light_dark pb-2">
                        {{articleAside.data}} |
                        <span class="text-dark fw-bold" v-if="articleAside.comments == true">
                          2 Comments
                        </span> 
                        <span v-else>
                          Comments off
                        </span> 
                    </div>
                  </div>
                  <!-- /.card_right -->
                </div>
                <!-- /.cols -->              
              </div>
              <!-- /.row -->
            </div>
            <!-- /.container -->
          </div>
          <!-- /.articles_tutorials -->
        </div>
        <!-- /.tutorials_guides -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.news -->
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
        <div class="activeIcon h-3 my-4 bg_active"></div>
        <div class="row row-cols-4">
          <!-- /.activeIcon -->
          <div class="cols p-3" v-for="(icon, index) in iconsMain" :key="index">
            <div class="icon d-flex justify-content-center align-items-center flex-column">
              <div class="d-flex justify-content-center align-items-center my-1 m-auto">
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
        <div class="sign_up">
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
      <div class="input-group mb-3">
        <input type="email" class="form-control" placeholder="Insert your email*">
        <button class="btn_primary bg_primary_btn" type="submit" id="button-addon2">send</button>
      </div>
    </section>
    <!-- /.subscribe -->

  </main>
  <!-- /.site_main -->
</template>

<script>
export default {
  name: 'MainSiteComponent',
  data() {
    return {
      topArticles: [{
        activeArticle: false,
        img: 'post_feat_img_25-700x441.jpg',
        title: 'Lorem ipsum dolor sit amet',
        data: 'October 11th, 2015',
        comments: true,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi deleniti corrupti amet autem facere? Quod, ad! Fugit, sunt eaque!'
      },
      {
        activeArticle: true,
        img: 'post_feat_img_24-700x441.jpg',
        title: 'Lorem ipsum dolor sit amet',
        data: 'October 11th, 2015',
        comments: false,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi deleniti corrupti amet autem facere? Quod, ad! Fugit, sunt eaque!'
      },
      {
        activeArticle: false,
        img: 'post_feat_img_23-700x441.jpg',
        title: 'Lorem ipsum dolor sit amet',
        data: 'October 11th, 2015',
        comments: false,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi deleniti corrupti amet autem facere? Quod, ad! Fugit, sunt eaque!'
      }
      ],
      bottomArticles: [{
        img: 'post_feat_img_22-700x441.jpg',
        title: 'Lorem ipsum dolor sit amet',
        data: 'October 11th, 2015',
        comments: false,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi deleniti corrupti amet autem facere? Quod, ad! Fugit, sunt eaque!'
      },
      {
        img: 'post_feat_img_21-700x441.jpg',
        title: 'Lorem ipsum dolor sit amet',
        data: 'October 11th, 2015',
        comments: false,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi deleniti corrupti amet autem facere? Quod, ad! Fugit, sunt eaque!'
      },
      {
        img: 'post_feat_img_20-700x441.jpg',
        title: 'Lorem ipsum dolor sit amet',
        data: 'October 11th, 2015',
        comments: false,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi deleniti corrupti amet autem facere? Quod, ad! Fugit, sunt eaque!'
      }
      ],
      asideArticles: [{
        img: 'post_feat_img_23-177x142.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur',
        data: 'October 11th, 2015',
        comments: false,
      },
      {
        img: 'post_feat_img_22-177x142.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur',
        data: 'October 11th, 2015',
        comments: false,
      },
      {
        img: 'post_feat_img_20-177x142.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur',
        data: 'October 11th, 2015',
        comments: false,
      }
      ],
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
      },
      {
        description: 'fa-brands fa-facebook-f',
        title: 'Facebook'
      },
      {
        description: 'fa-brands fa-twitter',
        title: 'Twitter'
      },
      {
        description: 'fa-brands fa-instagram',
        title: 'Instagram'
      },
      {
        description: 'fa-brands fa-youtube',
        title: 'YouTube'
      },  
      ],
    }
  },
  methods: {
    getImgUrl(item) {
      return require('../assets/img/'+ item.img)
    },
  }
}
</script>

<style lang="scss" scoped>

</style>