<template>
  <div class="container">
    <AppHeader></AppHeader>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './view/__shared/components/AppHeader.vue'
</script>

<style lang="scss" scoped>
.container {
  max-width: 1240px;
  padding: 120px 20px;
  margin-inline: auto;
}
</style>
