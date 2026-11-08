<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ src: { type: String, required: true }, title: { type: String, required: true }, ratio: { type: String, default: '3 / 4' }, size: { type: String, default: '900 × 1200 px' } })
const failed = ref(false)
watch(() => props.src, () => { failed.value = false })
</script>
<template>
  <div class="icon-image" :style="{ aspectRatio: ratio }">
    <img v-if="!failed" :src="src" :alt="title" loading="lazy" @error="failed = true" />
    <div v-if="failed" class="icon-placeholder">
      <span class="placeholder-cross">✝</span><strong>{{ title }}</strong>
      <code>{{ src }}</code><small>{{ size }} · Ratio {{ ratio }}</small>
    </div>
  </div>
</template>
