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

  <el-dialog
    v-if="description"
    v-model="isDialogOpen"
    class="winter-product-dialog"
    :title="title"
    width="min(calc(100% - 24px), 520px)"
    align-center
  >
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

    <template #footer>
      <el-button class="winter-dialog-close" type="primary" @click="isDialogOpen = false">
        Закрыть
      </el-button>
    </template>
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
  height: clamp(128px, 38dvh, 280px);
  object-fit: contain;
  border-radius: 8px;
  background: #edf4ef;
  margin-bottom: 16px;
}

.details-wrapper {
  margin-top: 14px;
  padding: 10px 12px;
  border-radius: 8px;
  background: #edf4ef;
  gap: 6px 14px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.details-wrapper > div {
  gap: 4px 8px;
  flex-wrap: wrap;
}

.d-modal-text {
  color: #385449;
  font-size: 14px;
  overflow-wrap: anywhere;
}
</style>

<style lang="scss">
.el-dialog.winter-product-dialog {
  --el-dialog-bg-color: #fbfdfb;
  --el-dialog-border-radius: 14px;
  --el-dialog-padding-primary: 20px;
  --el-color-primary: #27594b;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: calc(100dvh - 24px);
  border: 1px solid #a8c0b0;
  color: #173c34;

  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid #b9ccc0;
    border-radius: 11px;
    background:
      radial-gradient(circle at 6px 1px, #cb904c 1.5px, transparent 2px) 3px 0 / 21px 4px repeat-x,
      radial-gradient(circle at 14px 3px, #668b75 1.5px, transparent 2px) 3px 100% / 21px 4px
        repeat-x,
      radial-gradient(circle at 1px 6px, #668b75 1.5px, transparent 2px) 0 3px / 4px 21px repeat-y,
      radial-gradient(circle at 3px 14px, #cb904c 1.5px, transparent 2px) 100% 3px / 4px 21px
        repeat-y;
    pointer-events: none;
  }

  .el-dialog__title,
  .el-dialog__close {
    color: #173c34;
  }

  .el-dialog__title {
    font-weight: 700;
    overflow-wrap: anywhere;
  }

  .el-dialog__body {
    min-height: 0;
    overflow-y: auto;
    color: #173c34;
  }

  .el-dialog__footer {
    flex-shrink: 0;
  }

  .winter-dialog-close {
    --el-button-bg-color: #27594b;
    --el-button-border-color: #27594b;
    --el-button-hover-bg-color: #356c5d;
    --el-button-hover-border-color: #356c5d;
    --el-button-active-bg-color: #173c34;
    --el-button-active-border-color: #173c34;
  }

  :is(.el-dialog__headerbtn, .winter-dialog-close):focus-visible {
    outline: 2px solid #527a67;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    --el-dialog-padding-primary: 16px;
  }
}
</style>
