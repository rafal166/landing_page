import {createApp} from 'vue'
import './scss/main.scss'
import App from './App.vue'

const app = createApp(App)

// Dyrektywa v-reveal — animuje pojawianie się elementu przy wejściu w viewport.
// Użycie: v-reveal lub v-reveal="{ delay: 120 }" (opóźnienie w ms, do efektu kaskady).
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

app.directive('reveal', {
  mounted(el, binding) {
    if (prefersReducedMotion) {
      el.classList.add('is-visible')
      return
    }
    el.classList.add('reveal')
    const delay = binding.value && binding.value.delay
    if (delay) {
      el.style.transitionDelay = `${delay}ms`
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      })
    }, {threshold: 0.15})
    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    if (el._revealObserver) {
      el._revealObserver.disconnect()
    }
  },
})

app.mount('#app')
