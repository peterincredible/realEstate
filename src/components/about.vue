<template>
  <div id='about'>
      <div class="color-wrapper-1">
            <div class="c_a">
                <div class="carousel-wrapper">
                    <div class="img-holder">
                        <carousel ref="slicky" :settings='settings' :wrap-around="true">
                            <slide v-for="(image,index) in images" :key="index">
                                  <img :src='image' class="w-100 h-100"/>
                            </slide>
                        </carousel>
                        <span class="controll">
                            <span @click="prev">PREV</span>
                            <span class="next" @click="next">NEXT</span>
                        </span>
                    </div>
                </div>
                <div class="statement">
                     <h2 class="headers_title mb-4" style="text-align:left;">
                         We Are The Best RealEstate Company
                     </h2>
                     <p class="sub_title">Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit.</p>
                     <p class="ordinary_statement">
                        Est qui eos quasi ratione nostrum excepturi id recusandae<br/> fugit omnis ullam pariatur
                        itaque nisi voluptas impedit Quo<br/> suscipit omnis iste velit maxime.
                     </p>
                     <ul>
                        <li>
                              <span class="icon-holder"><font-awesome-icon icon="check"></font-awesome-icon></span>
                              <span class="words">Placeat maxime animi minus</span>
                        </li>
                          <li>
                              <span class="icon-holder"><font-awesome-icon icon="check"></font-awesome-icon></span>
                              <span class="words">Placeat maxime animi minus</span>
                        </li>
                          <li>
                              <span class="icon-holder"><font-awesome-icon icon="check"></font-awesome-icon></span>
                              <span class="words">Placeat maxime animi minus</span>
                        </li>
                          <li>
                              <span class="icon-holder"><font-awesome-icon icon="check"></font-awesome-icon></span>
                              <span class="words">Placeat maxime animi minus</span>
                        </li>
                     </ul>
                     <button>Learn More</button>
                </div>
            </div>
      </div>
      <div class="color-wrapper-2">
       <h2 class="headers_title mb-5" style=" font-size: 32px;">Services</h2>
        <div class="services">
           <div class="service-items">
              <span class='service-icon'><font-awesome-icon icon="house"></font-awesome-icon></span>
              <div class="service-main">
                 <h5>Search Property</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                 <a href="#">Learn More</a>
              </div>
           </div>
           <div class="service-items">
              <span class='service-icon'><font-awesome-icon icon="house"></font-awesome-icon></span>
              <div class="service-main">
                 <h5>Search Property</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                 <a href="#">Learn More</a>
              </div>
           </div>
           <div class="service-items">
              <span class='service-icon'><font-awesome-icon icon="house"></font-awesome-icon></span>
              <div class="service-main">
                 <h5>Search Property</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                 <a href="#">Learn More</a>
              </div>
           </div>
           <div class="service-items">
              <span class='service-icon'><font-awesome-icon icon="house"></font-awesome-icon></span>
              <div class="service-main">
                 <h5>Search Property</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                 <a href="#">Learn More</a>
              </div>
           </div>
           <div class="service-items">
              <span class='service-icon'><font-awesome-icon icon="house"></font-awesome-icon></span>
              <div class="service-main">
                 <h5>Search Property</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                 <a href="#">Learn More</a>
              </div>
           </div>
           <div class="service-items">
              <span class='service-icon'><font-awesome-icon icon="house"></font-awesome-icon></span>
              <div class="service-main">
                 <h5>Search Property</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                 <a href="#">Learn More</a>
              </div>
           </div>
        </div>
      </div>
      <div class="color-wrapper-3">
        <div class="review">
             <h2 class="headers_title mb-5 w-100" style=" font-size: 32px;">People Says...</h2>
             <div class="w-100 review-wrapper">
                 <carousel ref="slicky" :settings='settings' :wrap-around="true">
                            <slide v-for="(i,index) in [1,2,3,4,5,6,7,8]" :key="index">
                                   <div class="review-item">
                                     <p class="review-content">
                                        <q> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                        content here', making it look like readable English </q>
                                     </p>
                                     <div class="review-others"><img :src='person4'/> <span>John Doe</span></div>
                                   </div>
                            </slide>
                </carousel>
             </div>
        </div>
      </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import { ref } from 'vue'
import image1 from '../assets/images/property_1.jpg'
import image2 from '../assets/images/property_2.jpg'
import image3 from '../assets/images/property_3.jpg'
import image4 from '../assets/images/property_4.jpg'
import image5 from '../assets/images/property_5.jpg'
import person4 from '../assets/images/person_5.jpg'
export default {
  components: { Carousel, Slide },
  setup () {
    const slicky = ref(null)
    const settings = { itemsToShow: 1, snapAlign: 'center' }
    function next () {
      slicky.value.next()
    }
    function prev () {
      slicky.value.prev()
    }
    const images = [image1, image2, image3, image4, image5]
    return { next, prev, settings, slicky, images, person4 }
  }
}
</script>

<style>

</style>
