<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faArrowUpRightFromSquare, faImage} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {projects} from '../data/projects.js'
</script>

<template>
  <section id="projekty" class="section section--glow">
    <div class="container">
      <h2 class="section-title" v-reveal>Projekty</h2>
      <p class="section-subtitle" v-reveal="{ delay: 80 }">Wybrane realizacje, które do tej pory powstały.</p>

      <div class="row g-4">
        <div v-for="(project, index) in projects" :key="project.title" class="col-12 col-md-6 col-lg-4"
             v-reveal="{ delay: index * 100 }">
          <article class="project-card glass-view">
            <a
                :href="project.demoUrl || undefined"
                :target="project.demoUrl ? '_blank' : undefined"
                rel="noopener"
                class="project-thumb"
            >
              <img v-if="project.image" :src="project.image" :alt="'Zrzut ekranu: ' + project.title" loading="lazy"/>
              <div v-else class="project-thumb-placeholder">
                <FontAwesomeIcon :icon="faImage"/>
              </div>
            </a>

            <div class="project-body">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>

              <ul class="project-tags">
                <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
              </ul>

              <div class="project-actions">
                <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener"
                   class="btn btn-accent btn-sm">
                  Sprawdź demo
                  <FontAwesomeIcon :icon="faArrowUpRightFromSquare"/>
                </a>
                <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noopener"
                   class="btn btn-outline-accent btn-sm">
                  <FontAwesomeIcon :icon="faGithub"/>
                  Kod
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../scss/colors";

.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: $surface-color;
  border: 1px solid $surface-border;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: $accent-color;
  }
}

.project-thumb {
  display: block;
  aspect-ratio: 16 / 10;
  background-color: $primary-color;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }
}

.project-thumb-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: $text-muted-color;
}

.project-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.project-desc {
  color: $text-muted-color;
  margin-bottom: 1rem;
}

.project-tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0 0 1.25rem;

  li {
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
    border: 1px solid $accent-color;
    color: $accent-color;
    border-radius: 999px;
  }
}

.project-actions {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }
}
</style>
