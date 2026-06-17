<script setup>
import {reactive} from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faEnvelope, faEye, faPhone, faShieldHalved} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

// Ochrona przed scraperami:
// 1) Wartości są zakodowane w base64 — w kodzie/bundlu JS nie ma jawnego maila ani numeru.
// 2) Dekodujemy je i budujemy linki dopiero po kliknięciu użytkownika,
//    więc boty renderujące stronę bez interakcji niczego nie zbiorą.
const d = (s) => atob(s)

const EMAIL_ENC = 'cnJ6ZXd1Y2tpQHIyc29sdXRpb25zLnBs'

const channels = [
  {key: 'email', icon: faEnvelope, label: 'E-mail', type: 'mailto', enc: EMAIL_ENC, show: EMAIL_ENC},
  {key: 'phone', icon: faPhone, label: 'Telefon', type: 'tel', enc: 'KzQ4Njk1MzYwMzEw', show: 'KzQ4IDY5NSAzNjAgMzEw'},
  {
    key: 'linkedin', icon: faLinkedin, label: 'LinkedIn', type: 'url', external: true,
    enc: 'aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JhZmFsLXJ6ZXd1Y2tpLw==', show: 'cmFmYWwtcnpld3Vja2k=',
  },
  {
    key: 'github', icon: faGithub, label: 'GitHub', type: 'url', external: true,
    enc: 'aHR0cHM6Ly9naXRodWIuY29tL3JhZmFsMTY2', show: 'cmFmYWwxNjY=',
  },
]

const revealed = reactive({})

function reveal(ch) {
  const value = d(ch.enc)
  const text = d(ch.show)
  let href
  if (ch.type === 'mailto') href = 'mailto:' + value
  else if (ch.type === 'tel') href = 'tel:' + value
  else href = value
  revealed[ch.key] = {href, text}
}

function writeEmail() {
  window.location.href = 'mailto:' + d(EMAIL_ENC)
}
</script>

<template>
  <section id="kontakt" class="section section--band section--divider text-center">
    <div class="container">
      <h2 class="section-title" v-reveal>Kontakt</h2>
      <p class="section-subtitle" v-reveal="{ delay: 80 }">
        Masz projekt do utrzymania albo rozwoju? Napisz lub zadzwoń — chętnie pomogę.
      </p>

      <div class="row g-4 justify-content-center">
        <div v-for="(ch, index) in channels" :key="ch.key" class="col-12 col-sm-6 col-lg-3"
             v-reveal="{ delay: index * 90 }">
          <div class="contact-card glass-view">
            <FontAwesomeIcon :icon="ch.icon" class="contact-icon"/>
            <span class="contact-label">{{ ch.label }}</span>

            <a v-if="revealed[ch.key]"
               :href="revealed[ch.key].href"
               :target="ch.external ? '_blank' : undefined"
               :rel="ch.external ? 'noopener' : undefined"
               class="contact-value contact-value--link">
              {{ revealed[ch.key].text }}
            </a>
            <button v-else type="button" class="contact-reveal" @click="reveal(ch)">
              <FontAwesomeIcon :icon="faEye"/>
              Pokaż
            </button>
          </div>
        </div>
      </div>

      <p class="contact-note" v-reveal>
        <FontAwesomeIcon :icon="faShieldHalved"/>
        Dane są ukryte przed botami — kliknij „Pokaż”, aby je wyświetlić.
      </p>

      <div class="contact-cta" v-reveal>
        <button type="button" class="btn btn-accent btn-lg" @click="writeEmail">
          <FontAwesomeIcon :icon="faEnvelope"/>
          Napisz wiadomość
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../scss/colors";

.contact-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  padding: 1.75rem 1rem;
  background-color: $primary-color;
  border: 1px solid $surface-border;
  border-radius: 14px;
  color: $text-color;
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: $accent-color;
  }
}

.contact-icon {
  font-size: 1.8rem;
  color: $accent-color;
  margin-bottom: 0.5rem;
}

.contact-label {
  font-weight: 700;
  font-size: 1.1rem;
}

.contact-value {
  color: $text-muted-color;
  font-size: 0.95rem;
  word-break: break-word;
}

.contact-value--link {
  color: $accent-color;

  &:hover {
    color: $accent-color-hover;
  }
}

.contact-reveal {
  margin-top: 0.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  border: 1px solid $accent-color;
  color: $accent-color;
  border-radius: 999px;
  padding: 0.25rem 0.9rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: $accent-color;
    color: $primary-color;
  }
}

.contact-note {
  margin-top: 2rem;
  color: $text-muted-color;
  font-size: 0.9rem;

  svg {
    color: $accent-color;
    margin-right: 0.4rem;
  }
}

.contact-cta {
  margin-top: 0.75rem;

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
