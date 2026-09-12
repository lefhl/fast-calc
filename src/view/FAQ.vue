<template>
  <div>
    <el-collapse v-model="activeNames">
      <!-- <el-collapse-item
        v-for="item in items"
        :title="item.title"
        :key="item.title"
        :name="item.title"
      >
        {{ item.content }}
      </el-collapse-item> -->
      <el-collapse-item title="Где и когда можно забрать заказ?" name="1">
        <p>Забрать заказ можно на Вегскладе в часы работы</p>
        <p>
          Адрес:
          <a
            href="https://2gis.ru/spb/firm/70000001103183064"
            class="local-accent-link"
            target="_blank"
            >Набережная реки Монастырки, 5В</a
          >
        </p>
        <p>
          <a href="https://t.me/VegSklad" class="local-accent-link" target="_blank"
            >Группа в Телеграм</a
          >
        </p>
        <p>График работы сб и вс с 13:00 до 21:00 раз в две недели (19-20.09, 03-04.10 и т.д.)</p>
      </el-collapse-item>
      <el-collapse-item title="Как оставить заказ?" name="2">
        <p>
          Заказы принимаются после объявления закупки в чатах. Обычно сообщение с информацией о
          закупке закрепляется и имеет четкие временные границы (сбор заказов ДО и момент прибытия
          груза)
        </p>

        <p>
          Заказы принимаются в
          <a href="https://t.me/+CLXwSCIUXdExOTky" class="local-accent-link" target="_blank"
            >чате</a
          >
          в Телеграм, а также в
          <a
            href="https://vk.me/join/fGVPP8YxaV9C1uRxxicE65eRdcfE9sOdYKo="
            class="local-accent-link"
            target="_blank"
            >чате</a
          >
          ВК
        </p>
      </el-collapse-item>
      <el-collapse-item title="Алгоритм действий после объявления закупки" name="3">
        <ol>
          <li>- Отправляете в чат ваш заказ</li>
          <li>- Дожидаетесь, пока он не будет внесён в таблицу</li>
          <li>- Проверяете заказ в таблице, сверяетесь с суммой в таблице и переводите деньги</li>
          <li>- Забираете заказ после анонса раздачи</li>
        </ol>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref([]) // По умолчанию открыта первая панель
</script>

<style scoped>
.local-accent-link {
  /* Всегда используем главный акцентный цвет Element Plus */
  color: var(--el-color-primary);
  text-decoration: none;
  font-weight: 500; /* Немного плотности, чтобы текст выделялся */
  transition: opacity 0.2s ease;
}

/* Эффект при наведении (hover) и фокусе (focus) */
.local-accent-link:hover,
.local-accent-link:focus {
  /* Вместо изменения цвета делаем ссылку чуть-чуть прозрачнее или добавляем подчеркивание */
  opacity: 0.8;
  text-decoration: underline;
}
</style>
