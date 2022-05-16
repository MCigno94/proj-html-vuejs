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
      <div class="container">
        <h5 class="subtitle_section text-center">phasellus eget metus</h5>
        <!-- /.subtitle_section -->
        <h3 class="title_section fw-bold text-center">All the lastes news</h3>
        <!-- /.title_section -->
        <div class="row row-cols-3 top_article">
          <div class="cols" v-for="(articleTop, index) in topArticles" :key="index" @mouseover="mouseOver()">
            <div class="h-2 my-4 w-25 m-auto" :class="selectArticle = true ? 'activeBorder' : '' "></div>
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
        <!-- /.row .top_article -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.news -->

  </main>
  <!-- /.site_main -->
</template>

<script>
export default {
  name: 'MainSiteComponent',
  data() {
    return {
      topArticles: [{
        img: 'post_feat_img_25-700x441.jpg',
        title: 'Lorem ipsum dolor sit amet',
        data: 'October 11th, 2015',
        comments: true,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi deleniti corrupti amet autem facere? Quod, ad! Fugit, sunt eaque!'
      },
      {
        img: 'post_feat_img_24-700x441.jpg',
        title: 'Lorem ipsum dolor sit amet',
        data: 'October 11th, 2015',
        comments: false,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi deleniti corrupti amet autem facere? Quod, ad! Fugit, sunt eaque!'
      },
      {
        img: 'post_feat_img_23-700x441.jpg',
        title: 'Lorem ipsum dolor sit amet',
        data: 'October 11th, 2015',
        comments: false,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi deleniti corrupti amet autem facere? Quod, ad! Fugit, sunt eaque!'
      }
      ],
      selectArticle: false,
      bottomArticles: [{
        img: 'post_feat_img_25-700x441.jpg',
        title: 'Lorem ipsum dolor sit amet',
        data: 'October 11th, 2015',
        comments: null,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi deleniti corrupti amet autem facere? Quod, ad! Fugit, sunt eaque!'
      },
      {
        img: 'post_feat_img_24-700x441.jpg',
        title: 'Lorem ipsum dolor sit amet',
        data: 'October 11th, 2015',
        comments: null,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi deleniti corrupti amet autem facere? Quod, ad! Fugit, sunt eaque!'
      },
      {
        img: 'post_feat_img_23-700x441.jpg',
        title: 'Lorem ipsum dolor sit amet',
        data: 'October 11th, 2015',
        comments: null,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi deleniti corrupti amet autem facere? Quod, ad! Fugit, sunt eaque!'
      }
      ],
    }
  },
  methods: {
    getImgUrl(item) {
      return require('../assets/img/'+ item.img)
    },
    mouseOver() {
      this.selectArticle = !this.selectArticle;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>