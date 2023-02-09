<script lang='ts' setup>
import { ref } from 'vue'
const count = ref<number>(0)
</script>
<template>
  <span class="mr-2">vue: {{ count }}</span>
  <button @click="count++">++</button>
</template>
<style>
.mr-2 {
  margin-right: 10px;
}
</style>