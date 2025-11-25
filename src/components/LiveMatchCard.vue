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
    <a :href="'/match/live/'+match.id" class="bg-red-50 border-red-100 border rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer">
        <div class="flex justify-end items-center pb-3">
            <span class="text-xs px-3 py-1 rounded-full bg-red-100 text-red-700">● LIVE</span>
        </div>
        <div class="flex items-center justify-between mb-4">
            <div class="flex-1 text-right flex flex-col items-center">
                <img class="w-[100px]" :src="match.home_team.logo" alt="club_logo">
                <div class="text-xs mt-1">{{ match.home_team.name }}</div>
            </div>
            <div class="mx-6 text-center">
                <div class="text-3xl font-bold text-gray-800">{{ match.home_score}} - {{ match.away_score }}</div>
                <div class="text-sm font-semibold text-red-500 mt-1">{{ match.start_time }}</div>
            </div>
            <div class="flex-1 flex flex-col items-center">
                <img class="w-[100px]" :src="match.away_team.logo" alt="club_logo">
                <div class="text-xs mt-1">{{  match.away_team.name }}</div>
            </div>
        </div>
    </a>
</template>