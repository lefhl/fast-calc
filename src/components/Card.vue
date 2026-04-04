<template>
  <article class="card">
    <div class="img-wrapper">
      <img :src="`images/${image}`" alt="" />
    </div>
    <div class="content">
      <h4 class="mt-4 mb-4">{{ title }}</h4>
      <div class="mb-8 df g-8">
        <div class="df g-4">
          <span>Цена</span> - <span>{{ price }}</span>
        </div>
        <div class="df g-4">
          <span>Масса</span> - <span>{{ weigth }} гр</span>
        </div>
      </div>

      <footer class="footer">
        <el-input-number min="0" step="1" step-strictly max="100" v-model="count"></el-input-number>
        <a class="el-button el-button--primary is-link" link :href="link" target="_blank">
          На сайт
        </a>
      </footer>
    </div>
  </article>
</template>

<script setup lang="ts">
type Props = {
  image: string
  title: string
  link: string
  price: number
  weigth: number
}

defineProps<Props>()

const count = defineModel<number>()
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
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.footer {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  // flex-grow: 1;
  margin-top: auto;
}
</style>
