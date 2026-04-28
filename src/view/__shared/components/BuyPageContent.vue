<template>
  <div class="grid">
    <Card v-for="item in goods" :key="item.title" v-bind="item" v-model="item.count"></Card>
  </div>

  <!-- <ScrollButton></ScrollButton> -->
</template>

<script setup lang="ts">
import type { Good } from '@/types/goods'

import Card from '@/components/Card.vue'
// import ScrollButton from '@/components/ScrollButton.vue'

const goods = defineModel<Good[]>('goods', { required: true })
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
  }
  :deep() {
    .img-wrapper {
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    .card {
      align-items: center;
    }
  }
}
</style>
