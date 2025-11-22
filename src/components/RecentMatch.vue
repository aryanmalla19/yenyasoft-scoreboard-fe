<script setup>
const props = defineProps({
    matches: {
        type: Array,
        require:false,
        default: [],
    }
});
</script>

<template>
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
        <div class="bg-gradient-to-r from-blue-950 to-blue-800 px-6 py-4">
            <h2 class="text-2xl font-bold text-white flex items-center gap-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Recent Matches
            </h2>
        </div>

        <template v-if="matches.length">
            <h1>TODO COMPONENT</h1>
        </template>

        <template v-else>
            <div class="p-12 text-center">
                <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                <h3 class="text-xl font-semibold text-gray-700 mb-2">No Matches Played Yet</h3>
                <p class="text-gray-500">Match history will appear here once games begin</p>
            </div>
        </template>
    </div>
</template> 