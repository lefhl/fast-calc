<template>
  <div class="container app-shell" :class="{ 'app-shell--basket': showMobileBasket }">
    <div class="snow-background" aria-hidden="true">
      <span v-for="(position, index) in snowflakes" :key="index" :style="position">❄</span>
    </div>
    <div class="winter-navigation" :class="{ 'winter-navigation--catalog': isCatalog }">
      <AppHeader />
      <div class="winter-lights" aria-hidden="true"></div>
    </div>
    <div v-if="isCatalog" class="winter-announcement">
      <div class="winter-banner" :style="bannerStyle" aria-hidden="true">
        <span class="tofu-ornament"></span>
      </div>
      <p class="winter-deadline">Приём заказов до 12:00 понедельника</p>
    </div>

    <router-view />
    <router-link v-if="showMobileBasket" class="mobile-basket" :to="{ name: 'Main' }">
      <span>Корзина · {{ totalItemsCount }} шт.</span>
      <strong>{{ formatNumberToAmount(totalSum + totalComission) }}</strong>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useGoodsStore } from '@/stores/useGoodsStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { formatNumberToAmount } from './view/__shared/utils/amount.utils'
import AppHeader from './view/__shared/components/AppHeader.vue'

const route = useRoute()
const { totalItemsCount, totalSum, totalComission } = storeToRefs(useGoodsStore())
const isCatalog = computed(() => route.name === 'Mallakto' || route.name === 'Hood')
const showMobileBasket = computed(() => isCatalog.value && totalItemsCount.value > 0)

const snowflakes = [
  { left: '2%', top: '16%', fontSize: '28px' },
  { right: '3%', top: '25%', fontSize: '19px' },
  { left: '5%', top: '44%', fontSize: '16px' },
  { right: '5%', top: '56%', fontSize: '30px' },
  { left: '2%', bottom: '17%', fontSize: '23px' },
  { right: '2%', bottom: '8%', fontSize: '16px' },
]

const bannerStyle = {
  backgroundImage: `url(${import.meta.env.BASE_URL}images/winter-canal.webp)`,
}
</script>

<style lang="scss" scoped>
.app-shell {
  isolation: isolate;
  padding-block: 20px 56px;
}

.snow-background {
  position: fixed;
  inset: 0;
  z-index: -1;
  color: #bacfc4;
  opacity: 0.6;
  pointer-events: none;

  span {
    position: absolute;
    line-height: 1;
  }
}

.winter-lights {
  position: relative;
  height: 12px;
  margin-top: -14px;
  margin-bottom: 2px;
  background:
    radial-gradient(ellipse 3px 4px at 12px 6px, #c98c47 95%, transparent) 0 0 / 48px 12px repeat-x,
    radial-gradient(ellipse 3px 4px at 36px 6px, #688875 95%, transparent) 0 0 / 48px 12px repeat-x,
    linear-gradient(#365d50, #365d50) 0 2px / 100% 1px no-repeat;

  @media (prefers-reduced-motion: no-preference) {
    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: radial-gradient(ellipse 3px 4px at var(--bulb-x) 6px, var(--lit-color) 95%, transparent)
        0 0 / 48px 12px repeat-x;
      animation: winter-lights-glow 6s ease-in-out infinite backwards;
    }

    &::before {
      --bulb-x: 36px;
      --lit-color: #87cc9c;
    }

    &::after {
      --bulb-x: 12px;
      --lit-color: #ffcb73;
      animation-delay: 3s;
    }
  }
}

@keyframes winter-lights-glow {
  0%,
  50%,
  100% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }
}

.winter-announcement {
  --ornament-left: clamp(18px, 5vw, 64px);
  position: relative;
  margin-bottom: 24px;
}

.winter-banner {
  position: relative;
  overflow: hidden;
  height: clamp(96px, 15vw, 160px);
  border-radius: 12px;
  background: #173c34 center right / cover no-repeat;
}

.winter-deadline {
  position: absolute;
  top: 50%;
  left: calc(var(--ornament-left) + 52px);
  right: 16px;
  width: fit-content;
  transform: translateY(-50%);
  padding: 8px 12px;
  border-radius: 8px;
  background: #173c34;
  color: #fff;
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 600;
}

.mobile-basket {
  display: none;
}

.tofu-ornament {
  position: absolute;
  top: 28px;
  left: var(--ornament-left);
  width: 27px;
  height: 27px;
  border-radius: 4px;
  background:
    radial-gradient(circle at 32% 30%, #bd9e72 1px, transparent 1.5px),
    radial-gradient(circle at 57% 59%, #bd9e72 1px, transparent 1.5px),
    radial-gradient(circle at 22% 73%, #bd9e72 1px, transparent 1.5px), #f8e6bd;
  box-shadow:
    inset -5px -4px #d2b689,
    0 0 9px #ffd48b99,
    0 0 23px 5px #f2ab5059,
    0 2px 5px #173c3466;

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

  .winter-navigation--catalog {
    position: sticky;
    top: 0;
    z-index: 5;
    padding-top: 6px;
    background: #f4f7f5;
    box-shadow: 0 6px #f4f7f5;
  }

  .winter-deadline {
    position: static;
    transform: none;
    width: auto;
    margin-top: 8px;
    padding: 4px 0;
    background: transparent;
    color: #173c34;
  }

  .app-shell--basket {
    padding-bottom: calc(88px + env(safe-area-inset-bottom, 0px));
  }

  .mobile-basket {
    position: fixed;
    inset: auto 16px calc(12px + env(safe-area-inset-bottom, 0px));
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-height: 48px;
    padding: 10px 16px;
    border-radius: 12px;
    background: #173c34;
    color: #fff;
    font-size: 14px;

    strong {
      white-space: nowrap;
    }
  }
}
</style>
