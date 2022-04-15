<template>
  <div id='property' class="property">
    <div class="props">
      <div class="prop-headers">
        <h4>Properties</h4>
        <span class="control">
            <span class="prev" @click="prev">PREVIOUS</span>
            <span class="div">/</span>
            <span class="next" @click="next">NEXT</span>
        </span>
      </div>
      <carousel ref="slicky" :breakpoints='breakpoints' :settings='settings' :wrap-around="true">
                <slide v-for="(image,index) in images" :key="index">
                     <div class="props-item">
                        <div class="img-wrapper"><img :src='image' class="w-100 h-100"/></div>
                        <div class="props-details">
                            <h4 class="price">$8900000</h4>
                            <p class="r-b-s">
                               <span class="">6 beds</span>
                               <span class="mx-4">|</span>
                               <span >6 baths</span>
                               <span class="mx-4">|</span>
                                <span >6 sqft</span>
                            </p>
                            <p class="loc">
                                12dkdkd kdkdkd dkdkd kdkd
                            </p>
                        </div>
                     </div>
                </slide>
      </carousel>
      <div class="d-flex justify-content-between align-items-center mt-4">
            <button class="m-btn mx-auto">View All Property Listings</button>
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
export default {
  components: { Carousel, Slide },
  setup () {
    const slicky = ref(null)
    const settings = { itemsToShow: 1, snapAlign: 'center' }
    const breakpoints = { 768: { itemsToShow: 2, snapAlign: 'start' }, 993: { itemsToShow: 3, snapAlign: 'start' }, 1200: { itemsToShow: 4, snapAlign: 'start' } }
    function next () {
      slicky.value.next()
    }
    function prev () {
      slicky.value.prev()
    }
    const images = [image1, image2, image3, image4, image5]
    return { next, prev, settings, slicky, breakpoints, images }
  }
}
</script>

<style>

</style>
