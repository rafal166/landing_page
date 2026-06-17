<script setup>
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<template>
  <NavBar/>
  <main>
    <HeroSection/>
    <SkillsSection/>
    <ExperienceSection/>
    <ProjectsSection/>
    <ContactSection/>
  </main>
  <SiteFooter/>
</template>
