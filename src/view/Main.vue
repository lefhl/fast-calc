<template>
  <!-- <div class="df"> -->
  <h2 class="mb-32">Корзина</h2>
  <!-- </div> -->

  <div class="total">
    <template v-if="basket.all.length">
      <h3 class="mb-12">Mallakto</h3>
      <div v-for="g in basket.mallakto" :key="g.title" class="line">
        <span> {{ g.title }}</span>
        <span> {{ g.count }}</span>
      </div>
      <h3 class="mb-12 mt-12">Hood</h3>
      <div v-for="g in basket.hood" :key="g.title" class="line">
        <span> {{ g.title }}</span>
        <span> {{ g.count }}</span>
      </div>

      <div class="mt-12">
        <h4>Итоги</h4>
        <div class="line">
          <span> заказ на сумму (более точно в таблице)</span>
          <span> {{ totalSum }}</span>
        </div>
        <div class="line">
          <span> масса заказа (без учета тары)</span>
          <span> {{ totalWeigth }} кг</span>
        </div>
      </div>

      <div class="mt-12 df g-8">
        <el-button class="mt-12" type="primary" :icon="CopyDocument" @click="copyOrder"
          >Копировать</el-button
        >
        <el-button class="mt-12" type="danger" :icon="Delete" @click="clearOrder"
          >Очистить заказ</el-button
        >
      </div>
    </template>
    <div v-else>Ничего</div>
  </div>
</template>

<script setup lang="ts">
import { ElNotification } from 'element-plus'
import { CopyDocument, Delete } from '@element-plus/icons-vue'
import { FAIL_COPY_MESSAGE, SUCCESS_COPY_MESSAGE } from './__shared/utils/common.utils'
import { useGoodsStore } from '@/stores/useGoodsStore'
import { storeToRefs } from 'pinia'

const { basket, totalSum, totalWeigth } = storeToRefs(useGoodsStore())

const copyOrder = () => {
  const { hood, mallakto } = basket.value
  let text = ''
  if (hood.length) {
    text += 'Заказ по Hood:\n'
    text += hood.map((el) => `${el.title} ${el.count}`).join('\n')
  }
  if (mallakto.length) {
    text += `${text ? '\n\n' : ''}Заказ по Mallakto:\n`
    text += mallakto.map((el) => `${el.title} ${el.count}`).join('\n')
  }
  copyTextToClipboard(text)
}

const clearOrder = () => {
  basket.value.all.forEach((el) => (el.count = 0))
}

async function copyTextToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    ElNotification(SUCCESS_COPY_MESSAGE)
  } catch {
    ElNotification(FAIL_COPY_MESSAGE)
  }
}
</script>

<style lang="scss" scoped>
.line {
  max-width: 500px;
  gap: 12px;
  display: flex;
  justify-content: space-between;
}
</style>
