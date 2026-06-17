<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faPhp, faSymfony, faDocker, faJsSquare, faGitAlt} from '@fortawesome/free-brands-svg-icons'
import {faDatabase, faServer, faWrench} from '@fortawesome/free-solid-svg-icons'

const skills = [
  {
    icon: faPhp,
    title: 'PHP',
    text: 'Główny język, w którym pracuję na co dzień — od starszych wersji w istniejących systemach po nowoczesny, typowany kod.',
  },
  {
    icon: faSymfony,
    title: 'Symfony',
    text: 'Framework, który znam najlepiej. Buduję i utrzymuję w nim aplikacje webowe oraz API.',
  },
  {
    icon: faDatabase,
    title: 'Bazy danych',
    text: 'Projektowanie schematów, optymalizacja zapytań i migracje. Pracuję głównie z MySQL/MariaDB i PostgreSQL.',
  },
  {
    icon: faWrench,
    title: 'Projekty legacy',
    text: 'Wchodzę w zastany kod, porządkuję go, naprawiam błędy i bezpiecznie dokładam nowe funkcje.',
  },
  {
    icon: faJsSquare,
    title: 'Frontend / JavaScript',
    text: 'Vue, Bootstrap i czysty JavaScript — kiedy backend potrzebuje sprawnego interfejsu.',
  },
  {
    icon: faDocker,
    title: 'Docker',
    text: 'Konteneryzacja środowisk deweloperskich i produkcyjnych dla powtarzalnych wdrożeń.',
  },
  {
    icon: faGitAlt,
    title: 'Git',
    text: 'Codzienna praca z kontrolą wersji, code review i przejrzystą historią zmian.',
  },
  {
    icon: faServer,
    title: 'Nie tylko to',
    text: 'Nie boję się nowych narzędzi i technologii — jeśli projekt tego wymaga, szybko się ich uczę.',
  },
]
</script>

<template>
  <section id="technologie" class="section section--band">
    <div class="container">
      <h2 class="section-title" v-reveal>Czym się zajmuję</h2>
      <p class="section-subtitle" v-reveal="{ delay: 80 }">Technologie i obszary, w których czuję się pewnie.</p>

      <div class="row g-4">
        <div v-for="(skill, index) in skills" :key="skill.title" class="col-12 col-sm-6 col-lg-3"
             v-reveal="{ delay: index * 80 }">
          <div class="skill-card glass-view">
            <FontAwesomeIcon :icon="skill.icon" class="skill-icon"/>
            <h3 class="skill-title">{{ skill.title }}</h3>
            <p class="skill-text">{{ skill.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../scss/colors";

.skill-card {
  height: 100%;
  padding: 1.75rem 1.5rem;
  background-color: $primary-color;
  border: 1px solid $surface-border;
  border-radius: 14px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: $accent-color;
    box-shadow: 0 12px 30px -12px rgba(0, 0, 0, 0.6);

    .skill-icon {
      animation: float-soft 1.8s ease-in-out infinite;
    }
  }
}

.skill-icon {
  font-size: 2rem;
  color: $accent-color;
  margin-bottom: 1rem;
}

.skill-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.skill-text {
  color: $text-muted-color;
  font-size: 1rem;
  margin: 0;
}
</style>
