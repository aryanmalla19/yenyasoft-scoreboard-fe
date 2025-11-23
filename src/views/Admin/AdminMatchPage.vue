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
            <td class="px-6 py-4">{{ match.home_team.name }}</td>
            <td class="px-6 py-4">{{ match.away_team.name ?? 'N/A' }}</td>
            <td class="px-6 py-4">{{ match.home_score ?? 'N/A'}} - {{ match.away_score }}</td>
            <td class="px-6 py-4">
              <span
                class="px-3 py-1 text-xs rounded-full font-semibold bg-green-100 text-green-700">
                {{ match.status }}
              </span>
            </td>
            <td class="px-6 py-4 flex gap-3 justify-center">
                <a :href="'/admin/matches/' + match.id + '/live'" class="px-3 py-1.5 bg-pink-600 text-white rounded-lg text-xs shadow hover:bg-pink-700 transition">Manage</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>