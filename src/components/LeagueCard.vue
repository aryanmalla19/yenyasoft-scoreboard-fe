<script setup>
    const props = defineProps({
        league: {
            type: Object,
            require: false,
            default: null,
        }
    })
</script>

<template>
    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
        <div class="flex justify-end">
            <span class="text-xs px-3 py-1 rounded-full text-white bg-green-500">Active</span>
        </div>
        <div class="flex gap-2 items-start justify-between mb-3">
            <img class="w-8" :src="league.logo" alt="league_logo">
            <h3 class="font-bold text-lg text-gray-800 flex-1">{{ league.name }}</h3>
        </div>
        
        <div class="space-y-2 text-sm text-gray-600 mb-4">
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>{{ league.start_date }} to {{ league.end_date }}</span>
            </div>
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                <span>{{ league.total_teams }} Teams</span>
            </div>
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span>{{ league.total_matches_played }} Matches Played</span>
            </div>
        </div>

        <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div class="bg-blue-600 h-2 rounded-full transition-all" style="width: 43%"></div>
        </div>

        <a :href="'leagues/'+league.slug" class="text-blue-600 text-sm font-medium hover:text-blue-800 block text-center pt-3 border-t">View League →</a>
    </div>
</template>