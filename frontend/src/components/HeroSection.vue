<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faArrowRightLong, faChevronDown, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'
import ParticleNetwork from './ParticleNetwork.vue'
import TypeWriter from './TypeWriter.vue'

const rotatingWords = [
  'projekty legacy',
  'aplikacje w PHP',
  'systemy w Symfony',
  'bazy danych',
]
</script>

<template>
  <header id="o-mnie" class="hero section">
    <ParticleNetwork/>
    <div class="hero-blob hero-blob--1"></div>
    <div class="hero-blob hero-blob--2"></div>

    <div class="container hero-content">
      <div class="row align-items-center">
        <div class="col-lg-9">
          <p class="hero-eyebrow" v-reveal>Programista PHP &middot; Backend</p>
          <h1 class="hero-name" v-reveal="{ delay: 80 }">Rafał Rzewucki</h1>
          <h2 class="hero-headline" v-reveal="{ delay: 160 }">
            Utrzymuję i rozwijam <TypeWriter :words="rotatingWords"/>
          </h2>
          <p class="hero-lead" v-reveal="{ delay: 240 }">
            Cześć! Na co dzień jestem programistą <span class="text-accent">PHP</span> —
            od pięciu lat w <a href="https://sente.pl" target="_blank" rel="noopener" class="hero-link">Sente.pl</a>,
            realizuję też projekty dla <a href="https://sowacki.pl" target="_blank" rel="noopener" class="hero-link">Sowacki.pl</a>.
            Najbardziej lubię wchodzić w istniejące systemy: ogarnąć zastany kod, naprawić to, co się sypie,
            i bezpiecznie dołożyć nowe rzeczy. Pracuję głównie z <span class="text-accent">PHP</span>,
            <span class="text-accent">Symfony</span> i <span class="text-accent">bazami danych</span>,
            ale nie boję się nowych technologii. Masz projekt, który trzeba utrzymać albo rozwinąć?
            Napisz — chętnie pomogę.
          </p>

          <div class="hero-actions" v-reveal="{ delay: 320 }">
            <a href="#projekty" class="btn btn-accent btn-lg">
              Zobacz projekty
              <FontAwesomeIcon :icon="faArrowRightLong"/>
            </a>
            <a href="#kontakt" class="btn btn-outline-accent btn-lg">
              <FontAwesomeIcon :icon="faEnvelopeOpenText"/>
              Skontaktuj się
            </a>
          </div>
        </div>
      </div>
    </div>

    <a href="#technologie" class="hero-scroll" aria-label="Przewiń w dół">
      <FontAwesomeIcon :icon="faChevronDown"/>
    </a>
  </header>
</template>

<style scoped lang="scss">
@import "../scss/colors";

.hero {
  padding-top: 6rem;
  padding-bottom: 6rem;
  min-height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 80% 0%, $accent-color-o-less, transparent 45%),
    radial-gradient(circle at 0% 100%, $secondary-color-o-less, transparent 40%);
}

.hero-content {
  position: relative;
  z-index: 2;
}

// Gradientowe, dryfujące "bloby" pod siatką cząsteczek
.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.5;
  z-index: 1;
  pointer-events: none;
}

.hero-blob--1 {
  width: 420px;
  height: 420px;
  top: -120px;
  right: -80px;
  background: radial-gradient(circle, $accent-color, transparent 70%);
  animation: drift 16s ease-in-out infinite;
}

.hero-blob--2 {
  width: 380px;
  height: 380px;
  bottom: -140px;
  left: -100px;
  background: radial-gradient(circle, $secondary-color, transparent 70%);
  animation: drift 20s ease-in-out infinite reverse;
}

.hero-eyebrow {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  color: $accent-color;
  margin-bottom: 0.5rem;
}

.hero-name {
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.hero-headline {
  font-size: clamp(1.4rem, 3.5vw, 2.2rem);
  font-weight: 600;
  color: $text-muted-color;
  margin-bottom: 1.5rem;
  min-height: 1.4em;
}

.hero-lead {
  font-size: 1.2rem;
  max-width: 680px;
  color: $text-color;
  margin-bottom: 2rem;
}

.hero-link {
  color: $accent-color;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: $accent-color-o-less;

  &:hover {
    color: $accent-color-hover;
    text-decoration-color: $accent-color-hover;
  }
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
}

.hero-scroll {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  font-size: 1.5rem;
  color: $accent-color;
  animation: bounce-down 2s ease-in-out infinite;

  &:hover {
    color: $accent-color-hover;
  }
}
</style>
