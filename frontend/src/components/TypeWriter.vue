<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue'

// Efekt maszyny do pisania — w kółko wpisuje i kasuje kolejne słowa z listy.
const props = defineProps({
  words: {type: Array, required: true},
  typeSpeed: {type: Number, default: 90},
  deleteSpeed: {type: Number, default: 45},
  holdTime: {type: Number, default: 1700},
})

const text = ref('')
let timer = null

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    // Bez animacji — pokaż pierwsze słowo na stałe
    text.value = props.words[0]
    return
  }

  let wordIndex = 0
  let charCount = 0
  let deleting = false

  const tick = () => {
    const word = props.words[wordIndex]

    if (!deleting) {
      charCount++
      text.value = word.slice(0, charCount)
      if (charCount === word.length) {
        deleting = true
        timer = setTimeout(tick, props.holdTime)
        return
      }
    } else {
      charCount--
      text.value = word.slice(0, charCount)
      if (charCount === 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % props.words.length
      }
    }

    timer = setTimeout(tick, deleting ? props.deleteSpeed : props.typeSpeed)
  }

  tick()
})

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <span class="typewriter text-accent">{{ text }}<span class="caret">|</span></span>
</template>

<style scoped lang="scss">
.typewriter {
  white-space: nowrap;
}

.caret {
  display: inline-block;
  margin-left: 2px;
  font-weight: 400;
  animation: caret-blink 1s step-end infinite;
}
</style>
