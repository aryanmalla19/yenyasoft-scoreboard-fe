<script setup>
const props = defineProps({
    event: {
        type: Object,
        require: true,
    }
})
</script>

<template>
    <div class="event-item left">
        <div class="event-content text-right group">
            <p class="font-semibold text-lg">20' ⚽ {{ event.type }}</p>
            <p class="text-gray-700">{{ event.player.name }} (Manchester United)</p>
        </div>
    </div>
</template>