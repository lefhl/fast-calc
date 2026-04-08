<template>
  <BuyPageContent :goods="hoodGoods" />
</template>

<script setup lang="ts">
import { useGoodsStore } from '@/stores/useGoodsStore'
import BuyPageContent from './__shared/components/BuyPageContent.vue'

const { hoodGoods } = useGoodsStore()
</script>

<style scoped></style>
