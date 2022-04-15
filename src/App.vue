<template>
<div class="container-fluid main px-0" >
     <Header/>
      <div  v-scroll-spy="{offset: 2}">
          <banner></banner>
          <properties></properties>
          <agents></agents>
          <about></about>
          <div id='contact'  style="">
             <h2 class="headers_title  default_container">Contact Us</h2>
             <div class="contact-container">
                   <contact-form></contact-form>
                   <div class="contact-address">
                       <div class="mb-5">
                          <p class="title"><b>Address</b></p>
                          <p class="" style="color:gray;">203 Fake St. Mountain View, San Francisco, California, USA</p>
                       </div>
                       <div class="mb-5">
                           <p class="title"><b>Phone</b></p>
                           <p class="other">+1 232 3235 324</p>
                       </div>
                       <div class="mb-5">
                           <p  class="title"><b>Email</b></p>
                           <p class="other">youremail@domain.com</p>
                       </div>
                   </div>
             </div>
          </div>
      </div>
      <MainFooter/>
</div>
</template>

<script>
import '@/assets/scss/main.scss'
import Header from './components/Header.vue'
import ContactForm from './components/Contact.vue'
import Banner from './components/Banner.vue'
import Agents from './components/Agents.vue'
import Properties from './components/Properties.vue'
import MainFooter from './components/footer.vue'
import About from './components/about.vue'
export default {
  name: 'App',
  components: { Header, ContactForm, Banner, Agents, Properties, MainFooter, About }
}
</script>

<style>

</style>
