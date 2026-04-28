<template>
  <BuyPageContent v-model:goods="mallaktoGoods" />
</template>

<script setup lang="ts">
import { useGoodsStore } from '@/stores/useGoodsStore'
import BuyPageContent from './__shared/components/BuyPageContent.vue'

const { mallaktoGoods } = useGoodsStore()
</script>
