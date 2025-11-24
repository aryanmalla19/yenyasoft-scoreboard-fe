<script setup>
const props = defineProps({
    matches: {
        type: Array,
        require:false,
        default: () => [],
    }
});
console.log(props.matches);
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

        <table class="w-full">
            <template v-if="matches.length">
                <thead class="bg-gray-100 border-b-2 border-gray-200">
                    <tr>
                        <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Home Team</th>
                        <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Score</th>
                        <th class="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Away Team</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <template v-for="match in matches">
                        <tr class="hover:bg-blue-50 transition cursor-pointer">
                            <td class="px-6 py-5">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 bg-gray-100 rounded-lg p-2 flex items-center justify-center shadow-sm">
                                        <img :src="match.home_team.logo" alt="Team Logo" class="w-full h-full object-contain">
                                    </div>
                                    <p>{{ match?.home_team?.name }}</p>
                                </div>
                            </td>
                            <td>
                                <p class="font-bold text-gray-900 text-lg">{{ match.home_score }} - {{ match.away_score }}</p>
                            </td>
                            <td class="px-6 py-5">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 bg-gray-100 rounded-lg p-2 flex items-center justify-center shadow-sm">
                                        <img :src="match.away_team.logo" alt="Team Logo" class="w-full h-full object-contain">
                                    </div>
                                    <p>{{ match?.away_team?.name }}</p>
                                </div>
                            </td>
                        </tr>
                    </template>
                </tbody>
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
        </table>
    </div>
</template> 