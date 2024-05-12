<script>
export default {
  data() {
    return {
      targetDate: new Date('2024-06-10'),
      countdown: ''
    }
  },
  created() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const distance = this.targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.countdown = days + " dni " + hours + " godzin " + minutes + " minut " + seconds + " sekund ";
    }
  }
} 
</script>

<template>
  <div style="text-align: center">
    <h1>Do uruchomienia</h1>
    <h3>{{ countdown }}</h3>
  </div>
</template>

<style scoped>
h1{
  font-size: 4em;
}
</style>
