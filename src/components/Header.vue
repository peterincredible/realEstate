<template>
   <div :class="['m_nav row',show? 'mshow':'']">
       <div class=" nav_links_container mx-auto col-12  d-flex  justify-content-between align-center"  >
          <a href="#" :class="['brand_link',show?'scroll_link':'']">STATED.</a>
          <ul class="nav  link_container  mb-0 mlink_nav">
             <li class='nav-item'><a href="#home" :class="['nav-link home',show?'scroll_link':'']" >Home</a></li>
             <li class='nav-item'><a href="#property" :class="['nav-link',show?'scroll_link':'']" >Properties</a></li>
             <li class='nav-item'><a href="#agents" :class="['nav-link',show?'scroll_link':'']" >Agents</a></li>
             <li class='nav-item'><a href="#about" :class="['nav-link',show?'scroll_link':'']">About</a></li>
             <li class='nav-item'><a href="#contact" :class="['nav-link',show?'scroll_link':'']">Contact</a></li>
          </ul>
          <span class="mobile-toggler" style="" @click="open">
            <font-awesome-icon icon="bars"></font-awesome-icon>
          </span>
       </div>
   </div>
   <div :class="['mobile_link_container ',mobileToggle?'mobile_link_container_show':'']" @click.self="close">
      <div :class="['mobile_nav_wrapper animate__animated ',slide?'animate__slideInRight':'animate__slideOutRight']">
          <span class="mobile_nav_cancel" @click="close"><font-awesome-icon icon="times"></font-awesome-icon></span>
          <ul class="nav mb-0 mobile_nav mlink_nav"
              v-scroll-spy-active="{ class: 'active',selector: 'li a'}"
              v-scroll-spy-link="{selector: 'li a'}">
                <li class='nav-item'><a href="#home" class="nav-link mlink" >Home</a></li>
                <li class='nav-item'><a href="#property" class=" nav-link mlink" >Properties</a></li>
                <li class='nav-item'><a href="#agents" class="nav-link mlink" >Agents</a></li>
                <li class='nav-item'><a href="#about" class="nav-link mlink">About</a></li>
                <li class='nav-item'><a href="#contact" class="nav-link mlink">Contact</a></li>
           </ul>
      </div>
   </div>
</template>

<script>
//  scrolltoprops () {
//       const properties = document.getElementById('property')
//       console.dir(properties)
//       properties.scrollIntoView({ behavior: 'smooth' })
//     },
//     scrolltoagents () {
//       const properties = document.getElementById('agents')
//       console.dir(this.$refs)
//       properties.scrollIntoView({ behavior: 'smooth' })
//     },
export default {
  data () {
    return { show: false, mobileToggle: false, slide: false }
  },
  methods: {
    scrollhandle () {
      if (window.scrollY > 126) {
        if (this.show !== true || this.showmain !== true) {
          this.show = true
        }
      } else {
        if (this.show === true) {
          this.show = false
        }
      }
    },
    open () {
      this.mobileToggle = true
      this.slide = true
    },
    close () {
      this.slide = false
      setTimeout(() => {
        this.mobileToggle = false

        console.log('close triggered')
      }, 600)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollhandle)
  },
  unmounted () {
    window.removeEventListener('scroll', this.scrollhandle)
  }
}
</script>

<style>
 /*.active{
   color:aqua !important;
 } */
</style>
