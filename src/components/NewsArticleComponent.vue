<template>
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
        <div class="featured_article img_cover text-white my-4 position-relative">
          <div class="description position-absolute bottom-0 left-0">
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
          <div class="preview img_cover text-white position-relative">
            <div class="description position-absolute top-50 left-0">
              <p class="text-uppercase fw-bold">reviewed product</p>
              <h1 class="fw-bold m-0">Mauris viverra atisan ipsum eget felis prims efficitur varius</h1>
              <p class="m-0 py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem fuga quod, perspiciatis rerum fugit illo ipsum nisi, magni.</p>
              <button class="fw-bold btn_primary px-4 my-2 bg_primary_btn">
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
                  <div class="card_left p-1">
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
</template>

<script>
export default {
    name: 'NewsArticleComponent',
    data() {
        return {
            topArticles: [
            {
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
    .news {
    padding: 4rem 0;
    .activeBorder {
        background-color: white;
    }
    .top_article {
        .cols:hover .activeBorder {
            background-color: orange;
        }
    }
    .card-body {
        .data {
            font-size: 0.7rem;
        }
    }
}
</style>