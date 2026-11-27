<template>
  <main class="basket-page">
    <h1>Корзина</h1>

    <div v-if="basket.all.length" class="basket-layout">
      <div class="basket-groups">
        <section v-for="group in groups" :key="group.name" class="basket-panel">
          <h2>{{ group.name }}</h2>
          <ul class="basket-items">
            <li v-for="good in group.goods" :key="good.title" class="basket-item">
              <img :src="`images/${good.image}`" alt="" width="52" height="52" />
              <div class="basket-item__name">
                <strong>{{ good.title }}</strong>
                <span>{{ good.weigth }} г · {{ good.count }} шт.</span>
              </div>
              <strong class="basket-item__price">
                {{ formatNumberToAmount((good.price + (good.comission ?? 0)) * good.count) }}
              </strong>
            </li>
          </ul>
        </section>
      </div>

      <section class="basket-panel basket-summary">
        <h2>Итого к оплате</h2>
        <strong class="basket-summary__amount">{{
          formatNumberToAmount(totalSum + totalComission)
        }}</strong>
        <dl>
          <div v-if="totalComission" class="summary-line">
            <dt>Товары</dt>
            <dd>{{ formatNumberToAmount(totalSum) }}</dd>
          </div>
          <div v-if="totalComission" class="summary-line">
            <dt>Сервисный сбор</dt>
            <dd>{{ formatNumberToAmount(totalComission) }}</dd>
          </div>
          <div class="summary-line">
            <dt>Вес без тары</dt>
            <dd>{{ weightFormatter.format(totalWeigth) }} кг</dd>
          </div>
        </dl>
        <div class="basket-actions">
          <el-button type="primary" :icon="CopyDocument" @click="copyOrder"
            >Копировать заказ</el-button
          >
          <el-button text type="danger" :icon="Delete" @click="clearOrder"
            >Очистить заказ</el-button
          >
        </div>
      </section>
    </div>

    <section v-else class="basket-panel basket-empty">
      <h2>Корзина пуста</h2>
      <p>Выбери товары в каталоге, чтобы собрать заказ.</p>
      <div class="empty-links">
        <router-link :to="{ name: 'Mallakto' }">Mallakto</router-link>
        <router-link :to="{ name: 'Hood' }">HOOD</router-link>
      </div>
    </section>

    <section class="basket-panel basket-info">
      <h2 class="mb-16">Контактная информация</h2>
      <p class="mt-16">
        Оплатить можно по телефону
        <button type="button" class="el-button el-button--primary is-link" @click="copyValyeInside">
          +79528932517
        </button>
        (копировать, Эдуард Вячеславович Г. в Т-банк). После оплаты свяжитесь со мной, чтобы я
        понял, кому перевод принадлежит и отметил вас в таблице.
        <span class="block mt-4">Писать можно в личку:</span>
        <span class="df fxdc aifs g-4 mt-8">
          <a
            class="block el-button el-button--primary is-link"
            href="https://t.me/lefhl"
            target="_blank"
            >Telegram</a
          >
          <a
            class="block el-button el-button--primary is-link ml-0"
            href="https://vk.com/id416854297"
            target="_blank"
            >Вконтакте</a
          >
        </span>

        <span class="block mt-4">Или в чатах нашего сообщества:</span>

        <span class="df fxdc aifs g-4 mt-8">
          <a
            class="block el-button el-button--primary is-link"
            href="https://t.me/+CLXwSCIUXdExOTky"
            target="_blank"
            >Telegram</a
          >
          <a
            class="block el-button el-button--primary is-link ml-0"
            href="https://vk.me/join/fGVPP8YxaV9C1uRxxicE65eRdcfE9sOdYKo="
            target="_blank"
            >Вконтакте</a
          >
        </span>
      </p>

      <h2 class="mt-24 mb-16">Актуальные таблицы по закупкам (27.11–06.12.2026)</h2>
      <div class="df fxdc aifs">
        <a
          class="inline-block"
          href="https://docs.google.com/spreadsheets/d/12M4B3AHwuW8uREqw10xPLhiTZMRYQG67G9c3x1HJrBo/edit?gid=0#gid=0"
          target="_blank"
          >Mallakto + Сэйсей</a
        >
        <a
          class="inline-block mt-16"
          href="https://docs.google.com/spreadsheets/d/1S5eNAKmol73G1Czca0FlN7JQIRcng-ZQyWPCdPw2RKk/edit?gid=0#gid=0"
          target="_blank"
          >Hood</a
        >
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ElNotification } from 'element-plus'
import { CopyDocument, Delete } from '@element-plus/icons-vue'
import { FAIL_COPY_MESSAGE, SUCCESS_COPY_MESSAGE } from './__shared/utils/common.utils'
import { useGoodsStore } from '@/stores/useGoodsStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { formatNumberToAmount } from './__shared/utils/amount.utils'

const { basket, totalSum, totalWeigth, totalComission } = storeToRefs(useGoodsStore())

const groups = computed(() =>
  [
    { name: 'Mallakto', goods: basket.value.mallakto },
    { name: 'HOOD', goods: basket.value.hood },
  ].filter((group) => group.goods.length),
)
const weightFormatter = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 3 })

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

const copyValyeInside = async (e: Event) => {
  const text = (e.target as HTMLElement).textContent.trim()
  copyTextToClipboard(text)
}
</script>

<style lang="scss" scoped>
.basket-page {
  --el-color-primary: #27594b;

  h1 {
    margin-bottom: 20px;
    font-size: clamp(26px, 4vw, 38px);
  }

  h2 {
    font-size: 18px;
  }
}

.basket-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 340px);
  align-items: start;
  gap: 20px;
}

.basket-groups {
  display: grid;
  gap: 16px;
}

.basket-panel {
  min-width: 0;
  padding: clamp(14px, 2.5vw, 24px);
  border: 1px solid #dce7e0;
  border-radius: 12px;
  background: #fff;
}

.basket-items {
  margin-top: 8px;
  list-style: none;
}

.basket-item {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding-block: 10px;

  & + & {
    border-top: 1px solid #e6eee9;
  }

  img {
    object-fit: contain;
    border-radius: 6px;
    background: #f4f7f5;
  }
}

.basket-item__name {
  display: grid;
  gap: 2px;
  overflow-wrap: anywhere;

  span {
    color: #4e6258;
    font-size: 13px;
  }
}

.basket-item__price,
.summary-line dd {
  white-space: nowrap;
}

.basket-summary {
  background: #eaf3ee;
}

.basket-summary__amount {
  display: block;
  margin-block: 4px 12px;
  font-size: clamp(26px, 4vw, 34px);
}

.summary-line {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-block: 5px;
}

.basket-actions {
  display: grid;
  gap: 8px;
  margin-top: 16px;

  :deep(.el-button) {
    min-height: 44px;
    margin: 0;
  }
}

.basket-info {
  max-width: 720px;
  margin-top: 20px;

  a {
    color: #27594b;
  }
}

.basket-empty p {
  margin-block: 8px 16px;
}

.empty-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding-inline: 14px;
    border-radius: 8px;
    background: #173c34;
    color: white;
  }
}

@media (max-width: 720px) {
  .basket-layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
  }

  .basket-item {
    grid-template-columns: 40px minmax(0, 1fr) auto;
    gap: 8px;
    font-size: 14px;

    img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
