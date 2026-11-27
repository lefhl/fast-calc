<template>
  <div class="container app-shell">
    <AppHeader />
    <div
      v-if="$route.name === 'Mallakto' || $route.name === 'Hood'"
      class="winter-banner"
      :style="bannerStyle"
      aria-hidden="true"
    ></div>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './view/__shared/components/AppHeader.vue'

const bannerStyle = {
  backgroundImage: `url(${import.meta.env.BASE_URL}images/winter-canal.webp)`,
}
</script>

<style lang="scss" scoped>
.app-shell {
  padding-block: 20px 56px;
}

.winter-banner {
  height: clamp(96px, 15vw, 160px);
  margin-bottom: 24px;
  border-radius: 12px;
  background: #173c34 center right / cover no-repeat;
}

@media (max-width: 600px) {
  .app-shell {
    padding-inline: 16px;
  }
}
</style>
