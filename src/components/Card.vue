<template>
  <article class="card" :class="{ 'card--selected': (count ?? 0) > 0 }">
    <div class="img-wrapper">
      <img :src="`images/${image}`" alt="" />
    </div>
    <div class="content">
      <h4 class="mt-4 mb-4">{{ title }}</h4>
      <div class="card-price">
        <strong>{{ formatNumberToAmount(price + (comission ?? 0)) }}</strong>
        <span>за {{ weigth }} г</span>
      </div>
      <p v-if="comission" class="card-price-details">
        {{ formatNumberToAmount(price) }} + {{ formatNumberToAmount(comission) }} сервисный сбор
      </p>

      <footer class="footer">
        <el-input-number min="0" step="1" step-strictly max="100" v-model="count"></el-input-number>
        <a v-if="link" class="card-link" :href="link" target="_blank"> На сайт </a>
        <button v-if="description" type="button" class="card-link" @click="isDialogOpen = true">
          Детали
        </button>
      </footer>
    </div>
  </article>

  <el-dialog v-if="description" v-model="isDialogOpen" title="" width="450" align-center>
    <img class="dialog-image" :src="`images/${image}`" alt="" />
    <p class="d-modal-text">
      {{ description.text }}
    </p>

    <div class="details-wrapper">
      <div class="df g-32 jcsb">
        <h4>Белки</h4>
        <span>{{ description.protein }}</span>
      </div>
      <div class="df g-32 jcsb">
        <h4>Жиры</h4>
        <span>{{ description.fat }}</span>
      </div>
      <div class="df g-32 jcsb">
        <h4>Углеводы</h4>
        <span>{{ description.carbs }}</span>
      </div>
      <div class="df g-32 jcsb">
        <h4>Калории</h4>
        <span>{{ description.kcal }}</span>
      </div>
    </div>

    <el-button class="mt-16" type="primary" @click="isDialogOpen = false"> Закрыть </el-button>
    <!-- <template #footer>
      <div class="dialog-footer">
        <el-button @click="isDialogOpen = false">Cancel</el-button>
        <el-button type="primary" @click="isDialogOpen = false"> Confirm </el-button>
      </div>
    </template> -->
  </el-dialog>
</template>

<script setup lang="ts">
import type { GoodDetails } from '@/types/goods'
import { formatNumberToAmount } from '@/view/__shared/utils/amount.utils'
import { ref } from 'vue'

type Props = {
  image: string
  title: string
  link?: string
  price: number
  weigth: number
  comission?: number
  description?: GoodDetails
}

defineProps<Props>()

const count = defineModel<number>()

const isDialogOpen = ref(false)
</script>

<style lang="scss" scoped>
.img-wrapper {
  height: 200px;

  img {
    object-fit: contain;
    height: 100%;
    margin: 0 auto;
  }
}

.card {
  --card-accent: #27594b;
  --card-border: #ccdcd2;
  --card-control-bg: #f0f6f2;
  --card-control-hover: #dcebe2;
  --card-input-bg: #fff;

  padding: 14px;
  border: 1px solid var(--card-border);
  border-radius: 12px;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card--selected {
  --card-border: #527a67;
  --card-input-bg: #eaf3ee;
}

.card-price {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 8px;
  margin-block: 4px 8px;

  strong {
    font-size: 20px;
  }

  span {
    font-size: 13px;
  }
}

.card-price-details {
  margin-bottom: 10px;
  color: #4e6258;
  font-size: 12px;
}

.footer :deep(.el-input-number) {
  --el-color-primary: var(--card-accent);
  --el-input-focus-border-color: var(--card-accent);
  --el-border-color: var(--card-border);
  --el-disabled-border-color: var(--card-border);
  --el-disabled-text-color: #70837a;
  --el-fill-color-light: var(--card-control-bg);
  --el-text-color-regular: #173c34;

  .el-input__wrapper {
    --el-input-bg-color: var(--card-input-bg);
  }

  :is(.el-input-number__decrease, .el-input-number__increase):not(.is-disabled):hover {
    background: var(--card-control-hover);
  }
}

.card-link {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 4px 8px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--card-accent);
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: var(--card-control-bg);
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--card-accent);
    outline-offset: 2px;
  }
}

.footer {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  // flex-grow: 1;
  margin-top: auto;
}

.dialog-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 16px;
}

.details-wrapper {
  // max-width: 150px;
  margin-top: 12px;
  gap: 0 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.d-modal-text {
  font-size: 14px;
}
</style>
