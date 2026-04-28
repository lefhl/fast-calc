<template>
  <h2 class="mb-32">Корзина</h2>

  <div class="total">
    <template v-if="basket.all.length">
      <div class="mb-24">
        <template v-if="basket.mallakto.length">
          <h3 class="mb-12">Mallakto</h3>
          <div v-for="g in basket.mallakto" :key="g.title" class="line">
            <span> {{ g.title }}</span>
            <span> {{ g.count }}</span>
          </div>
        </template>

        <template v-if="basket.hood.length">
          <h3 class="mb-12 mt-12">Hood</h3>
          <div v-for="g in basket.hood" :key="g.title" class="line">
            <span> {{ g.title }}</span>
            <span> {{ g.count }}</span>
          </div>
        </template>
      </div>
      <div class="mt-12">
        <h4 class="mb-16">Итоги</h4>
        <div class="line">
          <span> Заказ на сумму (более точно в таблице)</span>
          <span> {{ formatNumberToAmount(totalSum) }}</span>
        </div>
        <template v-if="totalComission">
          <div class="line">
            <span> Сумма сервисного сбора</span>
            <span> {{ formatNumberToAmount(totalComission) }}</span>
          </div>
          <div class="line">
            <span> Итоговая сумма </span>
            <span> {{ formatNumberToAmount(totalSum + totalComission) }}</span>
          </div>
        </template>
        <div class="line">
          <span> Масса заказа (без учета тары)</span>
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
    <h4 class="mb-16 mt-48">Контактная информация</h4>
    <p class="mt-16">
      Оплатить можно по телефону
      <button type="button" class="el-button el-button--primary is-link" @click="copyValyeInside">
        +79528932517
      </button>
      (копировать, Эдуард Вячеславович Г. в Т-банк). После оплаты свяжитесь со мной, чтобы я понял,
      кому перевод принадлежит и отметил вас в таблице.
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

    <h4 class="mt-24 mb-16">Актуальные таблицы по закупкам (от 28 апреля)</h4>
    <div class="df fxdc aifs">
      <a
        class="inline-block"
        href="https://docs.google.com/spreadsheets/d/1fQlp_JDU9RW2gcLsnjGAdox0ufjq48baKxaSRMSnPBs/edit?usp=sharing"
        target="_blank"
        >Mallakto + Сэйсей</a
      >
      <a
        class="inline-block mt-16"
        href="https://docs.google.com/spreadsheets/d/1Jznn_ZX2jSMR3ihelY_4ueD39qZbl6EC-6jNOlwse54/edit?usp=sharing"
        target="_blank"
        >Hood</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElNotification } from 'element-plus'
import { CopyDocument, Delete } from '@element-plus/icons-vue'
import { FAIL_COPY_MESSAGE, SUCCESS_COPY_MESSAGE } from './__shared/utils/common.utils'
import { useGoodsStore } from '@/stores/useGoodsStore'
import { storeToRefs } from 'pinia'
import { formatNumberToAmount } from './__shared/utils/amount.utils'

const { basket, totalSum, totalWeigth, totalComission } = storeToRefs(useGoodsStore())

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
.line {
  max-width: 500px;
  gap: 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}
</style>
