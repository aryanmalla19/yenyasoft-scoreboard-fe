<script setup>
import MatchEventCard from './MatchEventCard.vue';

const props = defineProps({
    events: {
        type: Array,
        required: false,
        default: () => [],
    }
})
</script>

<template>
    <section class="container mx-auto px-4 py-2">
      <h2 class="text-xl font-bold text-center mb-8">Match Events</h2>
      <div class="event-timeline max-w-4xl mx-auto">
        <template v-if="events?.length">
          <MatchEventCard v-for="event in events" :event="event" />
        </template>
      </div>
    </section>
</template>

<style lang="css" scoped>
.event-timeline {
  position: relative;
}

.event-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: linear-gradient(to bottom, #e5e7eb, #d1d5db);
  transform: translateX(-50%);
  border-radius: 2px;
}

.event-item {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
}

.event-item.left {
  justify-content: flex-start;
}

.event-item.right {
  justify-content: flex-end;
}

.event-content {
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  background: #f9fafb;
  max-width: 45%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-item .event-content::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  border-style: solid;
}

.event-item.left .event-content::before {
  right: -10px;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #f9fafb;
}

.event-item.right .event-content::before {
  left: -10px;
  border-width: 10px 10px 10px 0;
  border-color: transparent #f9fafb transparent transparent;
}

.event-item::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  border: 4px solid #3b82f6;
  transform: translate(-50%, -50%);
  transition: background 0.3s ease;
}

.event-item:hover::after {
  background: #3b82f6;
}

.event-item:hover .event-content {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>