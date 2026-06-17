<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue'

// Animowana sieć cząsteczek na <canvas> — generatywne, ruchome tło.
// Lekka (czyste 2D canvas), reaguje na rozmiar i szanuje prefers-reduced-motion.

const canvas = ref(null)
const COLOR = '227, 178, 60' // akcent (RGB) - ciepły bursztyn
const LINK_DIST = 140

let ctx = null
let raf = null
let particles = []
let width = 0
let height = 0
let dpr = 1
let resizeTimer = null

function setSize() {
  const parent = canvas.value.parentElement
  width = parent.offsetWidth
  height = parent.offsetHeight
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.value.width = width * dpr
  canvas.value.height = height * dpr
  canvas.value.style.width = `${width}px`
  canvas.value.style.height = `${height}px`
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function seed() {
  const count = Math.max(24, Math.min(80, Math.floor((width * height) / 16000)))
  particles = Array.from({length: count}, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    r: Math.random() * 1.6 + 0.9,
  }))
}

function render() {
  ctx.clearRect(0, 0, width, height)

  for (const p of particles) {
    p.x += p.vx
    p.y += p.vy
    if (p.x <= 0 || p.x >= width) p.vx *= -1
    if (p.y <= 0 || p.y >= height) p.vy *= -1

    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${COLOR}, 0.75)`
    ctx.fill()
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i]
      const b = particles[j]
      const dx = a.x - b.x
      const dy = a.y - b.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < LINK_DIST) {
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = `rgba(${COLOR}, ${0.22 * (1 - dist / LINK_DIST)})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }
  }

  raf = requestAnimationFrame(render)
}

function onResize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    setSize()
    seed()
  }, 200)
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  setSize()
  seed()

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    // Statyczna klatka — bez ruchu
    render()
    cancelAnimationFrame(raf)
  } else {
    render()
    window.addEventListener('resize', onResize)
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  clearTimeout(resizeTimer)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <canvas ref="canvas" class="particle-network" aria-hidden="true"></canvas>
</template>

<style scoped>
.particle-network {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style>
