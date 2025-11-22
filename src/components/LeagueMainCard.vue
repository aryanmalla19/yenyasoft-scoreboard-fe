<script setup>
    const props = defineProps({
        league: {
            type: Object,
            require: true,
        }
    })
</script>

<template>
    <div class="rounded-2xl overflow-hidden mb-8">
        <div class="p-8">
            <div class="flex flex-col md:flex-row items-center gap-6">
                <div class="w-32 h-32 rounded-2xl p-4 flex items-center justify-center">
                    <img :src="league.logo" alt="League Logo" class="w-full h-full object-contain">
                </div>
                
                <div class="flex-1 text-center md:text-left">
                    <div class="flex items-center gap-3 justify-center md:justify-start mb-2">
                        <h1 class="text-4xl font-bold">{{ league.name }}</h1>
                        <span :class="['text-xs px-4 py-2 rounded-full font-semibold text-white shadow-lg', league.is_active ? 'bg-green-500' : 'bg-red-500']">
                            {{ league.is_active ? 'Active' : 'Inactive' }}
                        </span>
                    </div>
                    <p class="mb-4">{{ league.description }}</p>
                    
                    <div class="flex flex-wrap gap-6 justify-center md:justify-start text-sm">
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span>Duration: <strong>{{ league.duration }} Months</strong></span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>{{ league.start_date }} - {{ league.end_date }}</span>
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
                </div>
            </div>
        </div>
    </div>
</template>