<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faArrowUpRightFromSquare, faBuilding} from '@fortawesome/free-solid-svg-icons'

const places = [
  {
    company: 'Sente.pl',
    role: 'Programista',
    period: '5 lat',
    description: 'Rozwój i utrzymanie systemów dla biznesu.',
    url: 'https://sente.pl',
  },
  {
    company: 'Sowacki.pl',
    role: 'Projekty webowe',
    period: null,
    description: 'Konfiguratory mebli 3D dla Fabryki Stołów Sowacki.',
    url: 'https://sowacki.pl',
  },
]
</script>

<template>
  <section id="doswiadczenie" class="section section--divider">
    <div class="container">
      <h2 class="section-title" v-reveal>Doświadczenie</h2>
      <p class="section-subtitle" v-reveal="{ delay: 80 }">Gdzie i z kim pracuję.</p>

      <div class="row g-4">
        <div v-for="(place, index) in places" :key="place.company" class="col-12 col-lg-6"
             v-reveal="{ delay: index * 100 }">
          <div class="exp-card glass-view">
            <div class="exp-icon">
              <FontAwesomeIcon :icon="faBuilding"/>
            </div>
            <div class="exp-body">
              <div class="exp-head">
                <h3 class="exp-company">{{ place.company }}</h3>
                <span v-if="place.period" class="exp-period">{{ place.period }}</span>
              </div>
              <p class="exp-role">{{ place.role }}</p>
              <p class="exp-desc">{{ place.description }}</p>
              <a :href="place.url" target="_blank" rel="noopener" class="exp-link">
                Odwiedź stronę
                <FontAwesomeIcon :icon="faArrowUpRightFromSquare"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../scss/colors";

.exp-card {
  height: 100%;
  display: flex;
  gap: 1.25rem;
  padding: 1.75rem;
  background-color: $surface-color;
  border: 1px solid $surface-border;
  border-radius: 14px;
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: $accent-color;
  }
}

.exp-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: $accent-color-o-less;
  color: $accent-color;
  font-size: 1.4rem;
}

.exp-body {
  flex: 1;
}

.exp-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.exp-company {
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0;
}

.exp-period {
  font-size: 0.85rem;
  font-weight: 600;
  color: $accent-color;
  border: 1px solid $accent-color;
  border-radius: 999px;
  padding: 0.15rem 0.7rem;
  white-space: nowrap;
}

.exp-role {
  color: $text-color;
  font-weight: 600;
  margin: 0.35rem 0 0.25rem;
}

.exp-desc {
  color: $text-muted-color;
  margin-bottom: 1rem;
}

.exp-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: $accent-color;
  font-weight: 600;

  &:hover {
    color: $accent-color-hover;
  }
}
</style>
