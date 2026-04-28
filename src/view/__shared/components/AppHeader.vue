<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="df aic g-12">
          <router-link
            v-for="link in links"
            :key="link.route"
            custom
            :to="{ name: link.route }"
            v-slot="{ navigate, isActive }"
          >
            <el-link :href="null" :type="isActive ? 'primary' : 'Default'" @click="navigate">{{
              link.title
            }}</el-link>
          </router-link>
        </div>

        <router-link custom :to="{ name: 'Main' }" v-slot="{ navigate, isActive }">
          <el-link v-if="!isActive" class="header__basket" @click="navigate">
            <el-icon :size="20"><ShoppingCart /></el-icon>
            <span class="header__items-count">{{ moreoverHundredVal }}</span>
          </el-link>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useGoodsStore } from '@/stores/useGoodsStore'
import { ShoppingCart } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const { totalItemsCount } = storeToRefs(useGoodsStore())

const moreoverHundredVal = computed(() => {
  if (totalItemsCount.value > 99) return '99+'
  return totalItemsCount.value
})

const links = [
  {
    route: 'Mallakto',
    title: 'Mallakto (Сэйсей)',
  },
  {
    route: 'Hood',
    title: 'Hood',
  },
]
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 20px 16px;
    background-color: #f5f7fa;
    border-radius: 0 0 4px 4px;
  }

  &__basket {
    position: relative;
  }

  &__items-count {
    position: absolute;
    right: -12px;
    top: -12px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    font-size: 10px;
    color: #fff;
    background-color: #409eff;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    font-weight: bold;
  }

  @include media('md') {
    background-color: #f5f7fa;
  }
}
</style>
