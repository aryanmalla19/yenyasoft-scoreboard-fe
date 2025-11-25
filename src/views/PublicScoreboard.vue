<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "@/plugins/axios";
import LeagueCard from '@/components/LeagueCard.vue';
import LiveMatchCard from '@/components/LiveMatchCard.vue';
import UpcomingMatchCard from '@/components/UpcomingMatchCard.vue';

const liveMatches = ref([]);
const upcomingMatches = ref([]);
const leagues = ref([]);
const players = ref([]);

const fetchData = async () => {
    try {
      const response = await api.get("/dashboard");
      console.log(response.data);
      liveMatches.value = response.data.live_matches;
      upcomingMatches.value = response.data.upcoming_matches;
      leagues.value = response.data.leagues;
      players.value = response.data.available_players;
    } catch (error) {
        console.error(error);
    }
};

onMounted(fetchData);

</script>

<template>
    <div class="container mx-auto px-4 py-8">
        <!-- Live Matches Section -->
        <div class="mb-8">
            <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h2 class="text-2xl font-bold text-gray-800">Live Matches</h2>
            </div>
            <div class="grid gap-4 md:grid-cols-3">
                <template v-if="liveMatches.length">
                    <LiveMatchCard v-for="match in liveMatches" :match="match" :key="match.id" />
                </template>
                <template v-else>
                    <span class="text-gray-600 text-sm">No Live Matches are happening right now</span>
                </template>
            </div>
        </div>

        <!-- Upcoming Matches Section -->
        <div class="mb-8">
            <div class="flex items-center gap-2 mb-4">
                <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <h2 class="text-2xl font-bold text-gray-800">Upcoming Matches</h2>
            </div>
            <div class="grid gap-4 md:grid-cols-2">
            <template v-if="upcomingMatches.length">
                <UpcomingMatchCard v-for="match in upcomingMatches" :key="match.id" :match="match" />
            </template>

            <template v-else>
                <span class="text-gray-600 text-sm">No Upcoming Matches are available</span>
            </template>
            </div>

        </div>

        <!-- Leagues Section -->
        <div class="mb-8">
            <div class="flex items-center gap-2 mb-4">
                <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <h2 class="text-2xl font-bold text-gray-800">Leagues</h2>
            </div>
            <div class="grid gap-4 md:grid-cols-3">
                <template v-if="leagues.length">
                    <LeagueCard v-for="league in leagues" :key="league.id" :league="league"/>
                </template>

                <template v-else>
                    <span class="text-gray-600 text-sm">No Leagues available</span>
                </template>
            </div>
        </div>


        <!-- Available Players Section -->
        <div class="mb-8">
            <div class="flex items-center gap-2 mb-4">
                <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
                    </path>
                </svg>
                <h2 class="text-2xl font-bold text-gray-800">
                    Available Global Players Pool
                </h2>
            </div>

            <div class="grid gap-4 md:grid-cols-3">
                <template v-if="players.length">
                    <div v-for="(player, index) in players" :key="player.id"
                        class="flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <span class="font-medium">{{ index + 1 }}</span>
                        <img class="w-10 h-10 object-cover rounded" :src="player.image" alt="Player"/>
                        <span class="font-medium text-gray-800">
                            {{ player.name }}
                        </span>
                    </div>
                </template>

                <template v-else>
                    <span class="text-gray-600 text-sm">No players available</span>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped></style>