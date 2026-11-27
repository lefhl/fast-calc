<template>
  <div class="container app-shell">
    <AppHeader />
    <div class="winter-lights" aria-hidden="true"></div>
    <div
      v-if="$route.name === 'Mallakto' || $route.name === 'Hood'"
      class="winter-banner"
      :style="bannerStyle"
      aria-hidden="true"
    >
      <span class="tofu-ornament"></span>
    </div>

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

.winter-lights {
  height: 12px;
  margin-top: -14px;
  margin-bottom: 2px;
  background:
    radial-gradient(ellipse 3px 4px at 12px 6px, #c98c47 95%, transparent)
      0 0 / 48px 12px repeat-x,
    radial-gradient(ellipse 3px 4px at 36px 6px, #688875 95%, transparent)
      0 0 / 48px 12px repeat-x,
    linear-gradient(#365d50, #365d50) 0 2px / 100% 1px no-repeat;
}

.winter-banner {
  position: relative;
  overflow: hidden;
  height: clamp(96px, 15vw, 160px);
  margin-bottom: 24px;
  border-radius: 12px;
  background: #173c34 center right / cover no-repeat;
}

.tofu-ornament {
  position: absolute;
  top: 28px;
  right: clamp(18px, 5vw, 64px);
  width: 27px;
  height: 27px;
  border-radius: 4px;
  background:
    radial-gradient(circle at 32% 30%, #bd9e72 1px, transparent 1.5px),
    radial-gradient(circle at 57% 59%, #bd9e72 1px, transparent 1.5px),
    radial-gradient(circle at 22% 73%, #bd9e72 1px, transparent 1.5px),
    #f2dfb7;
  box-shadow: inset -5px -4px #d2b689, 0 2px 5px #173c3466;

  &::before {
    content: '';
    position: absolute;
    inset: -28px auto auto 13px;
    width: 1px;
    height: 28px;
    background: #e9b96e;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -3px auto auto 9px;
    width: 9px;
    height: 4px;
    border-radius: 2px 2px 0 0;
    background: #c98c47;
  }
}

@media (max-width: 600px) {
  .app-shell {
    padding-inline: 16px;
  }
}
</style>
