<template>
    <div id="agents">
       <div class="default_container mb-5">
           <h2 class="headers_title mb-4" style="text-align:left;">Agents</h2>
            <p class="agent-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima<br/> neque tempora reiciendis.</p>
       </div>
       <div class="agents-wrapper" >
           <div class="agents-items" v-for='(image,index) in images' :key="index">
                <div class="img-wrapper">
                    <img :src="image" alt="sorry image" class="w-100 h-100"/>
                    <span class="social-handle">
                       <span><font-awesome-icon :icon="['fab','facebook']"></font-awesome-icon></span>
                       <span><font-awesome-icon :icon="['fab','twitter']"></font-awesome-icon></span>
                       <span><font-awesome-icon :icon="['fab','linkedin']"></font-awesome-icon></span>
                       <span><font-awesome-icon :icon="['fab','instagram']"></font-awesome-icon></span>
                    </span>
                </div>
                <h4 class="agent-name mt-3 ps-3">John Doe</h4>
                <p class="title mt-2 ps-3 mb-4">Real Estate Agent</p>
           </div>
       </div>
    </div>
</template>

<script>
import Image1 from '../assets/images/person_5.jpg'
import Image2 from '../assets/images/person_6.jpg'
import Image3 from '../assets/images/person_7.jpg'
import Image4 from '../assets/images/person_8.jpg'

export default {
  data () {
    const images = [Image1, Image2, Image3, Image4, Image1, Image2]
    return { images }
  }
}
</script>

<style>

</style>
