<script setup>
    const props = defineProps({
        match: {
            type: Object,
            require: false,
            default: null,
        }
    })
</script>

<template>
    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
        <div class="text-sm text-center text-gray-500 mb-3">{{ match.league.name }}</div>
        <span class="text-sm text-gray-600">{{ match.start_time }}</span>
        <div class="flex items-center justify-between mb-4">
            <div class="flex-1 text-right flex flex-col items-center">
                <img class="w-[100px]" :src="match.home_team.logo" alt="club_logo">
                <div class="font-bold text-lg text-gray-800">{{ match.home_team.name }}</div>
                <div class="text-xs text-gray-500 mt-1">HOME</div>
            </div>
            <div class="mx-6 text-center">
                <div class="text-2xl font-bold text-gray-400">VS</div>
            </div>
            <div class="flex-1 flex flex-col items-center">
                <img class="w-[100px]" :src="match.away_team.logo" alt="club_logo">
                <div class="font-bold text-lg text-gray-800">{{ match.away_team.name }}</div>
                <div class="text-xs text-gray-500 mt-1">AWAY</div>
            </div>
        </div>
    </div>
</template>