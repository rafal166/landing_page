<script setup>
import {ref} from 'vue'

const links = [
  {label: 'O mnie', href: '#o-mnie'},
  {label: 'Technologie', href: '#technologie'},
  {label: 'Doświadczenie', href: '#doswiadczenie'},
  {label: 'Projekty', href: '#projekty'},
  {label: 'Kontakt', href: '#kontakt'},
]

const open = ref(false)

function close() {
  open.value = false
}
</script>

<template>
  <nav class="navbar-custom glass-view">
    <div class="container navbar-inner">
      <a href="#o-mnie" class="brand" @click="close">
        <span class="brand-r2">R2</span>Solutions
      </a>

      <button class="nav-toggle" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <span></span><span></span><span></span>
      </button>

      <ul class="nav-links" :class="{ 'is-open': open }">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" @click="close">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "../scss/colors";

.navbar-custom {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: $primary-color-o-more;
  border-bottom: 1px solid $surface-border;
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.brand {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: $text-color;

  &:hover {
    color: $text-color;
  }
}

.brand-r2 {
  color: $accent-color;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.75rem;
  margin: 0;
  padding: 0;

  a {
    color: $text-color;
    font-size: 1.05rem;
    position: relative;
    padding: 0.25rem 0;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      background-color: $accent-color;
      transition: width 0.2s ease;
    }

    &:hover {
      color: $accent-color;

      &::after {
        width: 100%;
      }
    }
  }
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: $text-color;
    border-radius: 2px;
  }
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background-color: $primary-color-o-more;
    border-bottom: 1px solid $surface-border;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s ease;

    &.is-open {
      max-height: 320px;
    }

    li {
      width: 100%;
    }

    a {
      display: block;
      padding: 0.9rem 1.5rem;
      width: 100%;
    }
  }
}
</style>
