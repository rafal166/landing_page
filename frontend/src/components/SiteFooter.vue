<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <p class="footer-copy">&copy; {{ year }} R2Solutions &middot; Rafał Rzewucki</p>
      <!-- Ikony kierują do sekcji kontaktu (z odsłanianiem po kliknięciu),
           dzięki czemu w kodzie nie ma jawnych adresów profili. -->
      <div class="footer-social">
        <a href="#kontakt" aria-label="LinkedIn — zobacz w sekcji Kontakt">
          <FontAwesomeIcon :icon="faLinkedin"/>
        </a>
        <a href="#kontakt" aria-label="GitHub — zobacz w sekcji Kontakt">
          <FontAwesomeIcon :icon="faGithub"/>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "../scss/colors";

.site-footer {
  border-top: 1px solid $surface-border;
  padding: 1.75rem 0;
  background-color: $primary-color-o-more;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copy {
  margin: 0;
  color: $text-muted-color;
}

.footer-social {
  display: flex;
  gap: 1.25rem;
  font-size: 1.4rem;
}
</style>
