<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
</script>


<template>
  <div class="edu-card">
    <br>
    <i>,,Wszystko jest trudne zanim stanie się proste''</i>

    <div class="row">
      <div class="col-12 col-lg-6">
        <a class="btn btn-primary w-100" href="/Q-typing.exe">
          <FontAwesomeIcon :icon="faArrowRightLong"/>
          Pobierz aplikację Q-typing - do nauki szybkiego pisania na klawiaturze
        </a>
      </div>

      <div class="col-12 col-lg-6">
        <a class="btn btn-primary w-100"
           href="https://docs.google.com/spreadsheets/d/1-jZkHiA2c_ZOFiQyRLmX1hSigPnsJ4kKp0kd74mD6kg/edit?usp=sharing"
           target="_blank">
          <FontAwesomeIcon :icon="faArrowRightLong"/>
          Sprawdź arkusz z wynikami
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
