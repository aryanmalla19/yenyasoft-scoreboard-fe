
<script setup>
defineProps({
  show: Boolean,
});
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
    <div class="bg-white rounded-xl shadow-xl w-full max-w-4xl relative animate-fadeIn max-h-[90vh] overflow-y-auto">
      <button @click="$emit('close')" class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">
        ✕
      </button>

      <div class="p-6">
        <slot></slot>
      </div>

    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}
</style>
