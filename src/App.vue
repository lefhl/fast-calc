<template>
  <div class="container">
    <AppHeader />
    <section class="winter-banner" :style="bannerStyle" aria-labelledby="winter-title">
      <h1 id="winter-title">Новогодняя закупка</h1>
    </section>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './view/__shared/components/AppHeader.vue'

const bannerStyle = {
  backgroundImage: `linear-gradient(90deg, #173c34 12%, #173c34 27%, transparent 85%), url(${import.meta.env.BASE_URL}images/winter-canal.webp)`,
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1240px;
  padding: 32px 20px 72px;
  margin-inline: auto;
}

.winter-banner {
  display: flex;
  align-items: center;
  min-height: 184px;
  margin-bottom: 32px;
  padding: 24px clamp(20px, 5vw, 64px);
  border-radius: 16px;
  background: #173c34 center right / cover no-repeat;
  color: #fff;
}

.winter-banner h1 {
  max-width: 9em;
  font-size: clamp(28px, 4.6vw, 52px);
  line-height: 1.12;
}

@media (max-width: 600px) {
  .winter-banner {
    min-height: 128px;
    margin-bottom: 24px;
    background-position: 55% center;
  }
}
</style>
