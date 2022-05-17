<template>
  <footer class="site_footer position-relative">
    <div class="top_footer border-bottom">
      <div class="container">
        <div class="row row-cols-4">
          <div class="cols">
            <h6 class="text-uppercase fw-bold">avada tech forum</h6>
            <p class="text_description py-3 text_light_dark">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro consequatur magni et dignissimos doloremque, voluptate modi quod eaque ipsum, ea repudiandae, est culpa quasi reiciendis.
            </p>
            <!-- /.text_description -->
          </div>
          <!-- /.cols -->
          <div class="cols">
            <h6 class="text-uppercase fw-bold">popular topic</h6>
            <ul class="topics text_light_dark p-0">
              <li class="border-bottom py-3 d-flex" v-for="(topic, index) in topics" :key="index">
                <span class="pe-2 icon" @click="selectTopic(index)">
                  <font-awesome-icon :class="active.visible && active.index == index ? 'icon_left' : '' " icon="fa-solid fa-chevron-right" />
                </span>
                <div class="accordian">
                  <strong class="fw-bold">
                    {{topic.title}}
                  </strong>
                  <p class="my-1" v-if="active.visible && active.index == index">
                    {{topic.discussion}}
                  </p>
                </div>
                <!-- /.accordian -->
              </li> 
            </ul>
            <!-- /.text_description -->
          </div>
          <!-- /.cols -->
          <div class="cols">
            <h6 class="text-uppercase fw-bold">recent topic</h6>
            <ul class="topics text_light_dark p-0">
              <li class="border-bottom py-3 d-flex" v-for="(topic, index) in topics" :key="index">
                <span class="pe-2 icon" @click="selectTopic(index)">
                  <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </span>
                <div class="accordian">
                  <strong class="fw-bold">
                    {{topic.title}}
                  </strong>
                  <!-- <p>
                    {{topic.discussion}}
                  </p> -->
                </div>
                <!-- /.accordian -->
              </li> 
            </ul>
            <!-- /.text_description -->
          </div>
          <!-- /.cols -->
          <div class="cols">
            <h6 class="text-uppercase fw-bold">latest replies</h6>
            <ul class="topics text_light_dark p-0">
              <li class="border-bottom py-3 d-flex" v-for="(topic, index) in topics" :key="index">
                <span class="pe-2 icon" @click="selectTopic(index)">
                  <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </span>
                <div class="accordian">
                  <strong class="fw-bold">
                    {{topic.title}}
                  </strong>
                  <!-- <p>
                    {{topic.discussion}}
                  </p> -->
                </div>
                <!-- /.accordian -->
              </li> 
            </ul>
            <!-- /.text_description -->
          </div>
          <!-- /.cols -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.top_footer -->
    <div class="bottom_footer">
      <div class="container">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-auto copyright">
            © Copyright 2012-2020 | Avada Theme by <strong>Theme Fusion</strong> | All Rights Reserved | Powered by <strong>WordPress</strong>
          </div>
          <!-- /.coopyright -->
          <div class="col-auto">
            <span class="social px-1" v-for="(icon, index) in iconsFooter" :key="index">
              <font-awesome-icon class="icon_social rounded-circle p-3 text-white" :icon="icon.description" />
            </span>
          </div>
          <!-- /.social -->
        </div>
        <!-- /.row -->
        <div class="up_site rounded-3 position-absolute px-3 py-2">
          <a class="text-decoration-none text-white" href="#logo">
            <font-awesome-icon icon="fa-solid fa-chevron-up" />
          </a>
        </div>
        <!-- /.up_site -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.bottom_footer -->
  </footer>
</template>

<script>
export default {
  name: 'FooterSiteComponent',
  data() {
    return {
      iconsFooter: [
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
      topics: [
        {
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
          discussion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi consequatur delectus mollitia, at eaque!'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
          discussion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi consequatur delectus mollitia, at eaque!'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
          discussion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi consequatur delectus mollitia, at eaque!'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
          discussion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi consequatur delectus mollitia, at eaque!'
        }
      ],
      active: {
        visible: false,
        index: null
      }
    }
  },
  methods: {
    selectTopic(i){
      if(this.active.index !== null && this.active.index !== i) {
        this.active.index = null
        this.active.visible = false
      } 
      this.active.index = i;
      if (this.active.visible) {
        this.active.visible = false
      } else {
        this.active.visible = true
      }
      //console.log(this.active.index);
    },
  }
  
}
</script>

<style lang="scss" scoped>
.site_footer {
    .top_footer {
        padding: 5rem 0;
        .icon {
          cursor: pointer;
          .icon_left {
            transform: rotate(90deg);
          }
        }
    }
    .bottom_footer {
        padding: 2rem 0;
        .social {
            .icon_social {
                width: 25px;
                height: 25px;
                cursor: pointer;
            }
        }
        .social:first-child .icon_social {
            background: #3C5998; // facebook
        }
        .social:nth-child(2) .icon_social {
            background: #3F729B; // twitter
        }
        .social:nth-child(3) .icon_social {
            background: #54ACEE; // instagram
        }
        .social:nth-child(4) .icon_social {
            background: #CD201F; // youtube
        }
    }
    .up_site {
        background: #474747;
        bottom: 15px;
        right: 15px;
    }
}
</style>
