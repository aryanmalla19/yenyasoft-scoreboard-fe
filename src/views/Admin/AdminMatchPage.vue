<script setup>
import api from '@/plugins/axios';
import { ref, onMounted } from 'vue';

const matches = ref([]);
const leagues = ref([]);

const fetchData = async () => {
    const response = await api.get('/matches');
    console.log(response.data.data);
    matches.value = response.data.data;
}

onMounted(fetchData);
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-2xl font-semibold text-gray-800">Manage Matches</h3>
      <!-- <CreateLeagueModal @updated="reloadData" /> -->
    </div>

    <div class="overflow-hidden rounded-xl shadow-lg border border-gray-200">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th class="px-6 py-3">SN</th>
            <th class="px-6 py-3">Home Team</th>
            <th class="px-6 py-3">Away Team</th>
            <th class="px-6 py-3">Score</th>
            <th class="px-6 py-3">Status</th>
            <th class="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(match, index) in matches" :key="match.id" class="border-b hover:bg-gray-50 transition">
            <td class="px-6 py-4 font-medium">{{ index + 1 }}</td>

            <td class="px-6 py-4">
              <div class="flex">
                <img class="w-6" :src="match.home_team.logo" :alt="match.home_team.name + ' logo'">
                <p>{{ match.home_team.name }}</p>
              </div>
            </td>

            <td class="px-6 py-4">
              <div class="flex">
                <img class="w-6" :src="match.away_team.logo" :alt="match.away_team.name + ' logo'">
                <p>{{ match.away_team.name ?? 'N/A' }}</p>
              </div>
            </td>

            <td class="px-6 py-4">
              {{ match.home_score ?? 'N/A' }} - {{ match.away_score ?? 'N/A' }}
            </td>

            <td class="px-6 py-4">
              <span
                :class="['px-3 py-1 text-xs rounded-full font-semibold',
                  match.status === 'Finished'
                    ? 'bg-red-100 text-red-700'
                    : match.status === 'Live'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700']">
                {{ match.status }}
              </span>
            </td>

            <td class="px-6 py-4 flex gap-3 justify-center">
              <div class="relative group inline-block">
                <a :href="match.status === 'Live' ? '/admin/matches/' + match.id + '/live' : null"
                  :class="[
                    'px-3 py-1.5 rounded-lg text-xs shadow transition',
                    match.status === 'Live'
                      ? 'bg-pink-600 text-white hover:bg-pink-700 cursor-pointer'
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed pointer-events-none']">
                  Manage
                </a>

                <span v-if="match.status !== 'Live'"
                  class="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    <template v-if="match.status === 'finished'">
                      Match already finished
                    </template>

                    <template v-else>
                      Cannot manage this match
                    </template>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>