<template>
  <header class="header">
    <nav class="navigation" aria-label="Разделы закупки">
      <router-link :to="{ name: 'Mallakto' }">Mallakto</router-link>
      <router-link :to="{ name: 'Hood' }">HOOD</router-link>
      <router-link :to="{ name: 'Main' }">
        Корзина<span v-if="totalItemsCount"> · {{ totalItemsCount }}</span>
      </router-link>
      <router-link :to="{ name: 'Faq' }">FAQ</router-link>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { useGoodsStore } from '@/stores/useGoodsStore'
import { storeToRefs } from 'pinia'

const { totalItemsCount } = storeToRefs(useGoodsStore())
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 20px;
}

.navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.navigation a {
  padding: 8px 11px;
  border-radius: 8px;
  color: #173c34;
  font-weight: 600;
}

.navigation a:hover {
  background: #e1ebe5;
}

.navigation a.router-link-exact-active {
  background: #173c34;
  color: white;
}

@media (max-width: 600px) {
  .navigation a {
    padding-inline: 8px;
    font-size: 14px;
  }
}
</style>
