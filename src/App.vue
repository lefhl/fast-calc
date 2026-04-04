<template>
  <div class="container">
    <div class="grid">
      <Card
        v-for="item in mallaktoGoods"
        :key="item.title"
        v-bind="item"
        v-model="item.count"
      ></Card>
    </div>

    <footer class="footer">
      <h3 class="mb-8">Выбрано:</h3>

      <div class="total">
        <template v-if="basket.length">
          <div v-for="g in basket" :key="g.title" class="line">
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
    </footer>
    <ScrollButton></ScrollButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from './components/Card.vue'
import { CopyDocument, Delete } from '@element-plus/icons-vue'
import { useGoodsStore } from './stores/useGoodsStore'
import { ElNotification } from 'element-plus'
import ScrollButton from './components/ScrollButton.vue'

const { mallaktoGoods } = useGoodsStore()

async function copyTextToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    ElNotification({
      title: 'Везуха ваще',
      message: 'Ваш заказ скопирован!',
      duration: 5000,
    })
  } catch (err) {
    ElNotification({
      title: 'Не получилось, не фортануло',
      message: 'Ошибка при копировании заказа! Попробуйте вручную',
      duration: 3000,
    })
  }
}

const basket = computed(() => {
  const f = mallaktoGoods.filter((el) => el.count)

  return f
})
const totalSum = computed(() => {
  return basket.value.reduce((acc, el) => acc + el.price * el.count, 0)
})
const totalWeigth = computed(() => {
  return basket.value.reduce((acc, el) => acc + el.weigth * el.count, 0) / 1000
})

const copyOrder = () => {
  copyTextToClipboard(basket.value.map((el) => `${el.title} ${el.count}`).join('\n'))
}

const clearOrder = () => {
  mallaktoGoods.forEach((el) => (el.count = 0))
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1240px;
  padding: 40px 20px;
  margin-inline: auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer {
  margin-top: 40px;
}

.line {
  max-width: 400px;
  gap: 12px;
  display: flex;
  justify-content: space-between;
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
