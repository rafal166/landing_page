<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {ref} from "vue";

let showPhone = ref(false);
let showEmail = ref(false);
const phone = '+48695360310';
const phoneForDisplay = '+48 695 360 310';
const email = 'rrzewucki@r2solutions.pl';
const githubUrl = 'https://github.com/rafal166';
const linkedinUrl = 'https://www.linkedin.com/in/rafal-rzewucki/';

</script>


<template>
  <div class="container contact-card">
    <h1>Rafał Rzewucki</h1>
    <p></p>
    <a href="https://demo.r2solutions.pl" class="btn btn-primary px-4">
      <h2 class="m-0">Sprawdź demo</h2>
    </a>
    <p></p>
    <p></p>

    <div class="row w-100">
      <div class="contact-item col-lg-3 col-12">
        <a class="btn btn-primary" href="{{linkedinUrl}}">
          <FontAwesomeIcon :icon="faLinkedin"/>
          LinkedIn
        </a>
      </div>

      <div class="contact-item col-lg-3 col-12">
        <a class="btn btn-primary" href="{{githubUrl}}">
          <FontAwesomeIcon :icon="faGithub"/>
          Github
        </a>
      </div>

      <div class="contact-item col-lg-3 col-12">
        <div class="btn btn-primary" v-if="!showPhone" @click="showPhone = !showPhone">
          <FontAwesomeIcon :icon="faPhone"/>
          Pokaż telefon
        </div>
        <div v-else class="btn btn-outline-primary">
          <a href="tel:{{ phone }}">
            <FontAwesomeIcon :icon="faPhone"/>
            {{ phoneForDisplay }}</a>
        </div>
      </div>


      <div class="contact-item col-lg-3 col-12">
        <div class="btn btn-primary" v-if="!showEmail" @click="showEmail = !showEmail">
          <FontAwesomeIcon :icon="faEnvelope"/>
          Pokaż email
        </div>
        <div v-else class="btn btn-outline-primary">
          <a href="mailto:{{ email }}">
            <FontAwesomeIcon :icon="faEnvelope"/>
            {{ email }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 300%;
}

.contact-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.contact-item {
  margin: 10px 0;
  cursor: pointer;
  color: blue;
  white-space: nowrap;
}


.contact-item .btn, .contact-item .btn a {
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    margin-right: 0.3em;
  }
}

.contact-item .btn {
  padding: 0.5em 1em;
}

.contact-item .btn a {
  text-decoration: none;
}

</style>
