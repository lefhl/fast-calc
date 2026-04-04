<template>
  <transition name="fade">
    <el-button
      v-show="visible"
      class="scroll-down-btn"
      circle
      type="primary"
      @click="scrollToBottom"
    >
      <el-icon><ArrowDown /></el-icon>
    </el-button>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

const visible = ref(true)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight

  // Hide when near bottom
  if (scrollTop + windowHeight >= documentHeight - 50) {
    visible.value = false
  } else {
    visible.value = true
  }
}

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-down-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  font-size: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
