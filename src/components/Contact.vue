<template>
   <div class="contact-form">
      <h4>Contact Form</h4>
      <form class="row">
            <div class="col-md-6 mb-3">
                <label for="firstname" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstname">
            </div>
            <div class="col-md-6 mb-3">
                <label for="lastname" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastname">
            </div>
             <div class="col-md-12 mb-3">
                <label for="email" class="form-label">email</label>
                <input type="text" class="form-control" id="email">
            </div>
             <div class="col-md-12 mb-3">
                <label for="subject" class="form-label">subject</label>
                <input type="text" class="form-control" id="subject">
            </div>
             <div class="col-md-12 mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="10" placeholder="write your notes or question here"></textarea>
            </div>
             <div class="col-md-12 ">
                 <button>Send Message</button>
            </div>
      </form>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
