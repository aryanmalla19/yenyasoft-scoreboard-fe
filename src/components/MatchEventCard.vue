<script setup lang="ts">
const props = defineProps({
    event: {
        type: Object,
        required: true,
    }
})
</script>


<template>
<div v-if="['goal','red_card','yellow_card'].includes(event.type)"
     :class="`event-item ${event.event_by === 'home' ? 'left' : 'right'}`">
      <div class="event-content text-right group">
          <p class="font-semibold text-lg">
              {{ event.live_time_minutes }}' 
              {{ event.type === 'goal' ? '⚽' : event.type === 'red_card' ? '🟥' : '🟨' }} 
              {{ event.type }}
          </p>
          <p class="text-gray-700">{{ event.player?.name ?? 'N/A' }} </p>
      </div>
  </div>
</template>
