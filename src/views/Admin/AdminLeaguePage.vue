<script setup>
import CreateLeagueModal from '@/components/Admin/CreateLeagueModal.vue';
import DeleteLeagueModal from '@/components/Admin/DeleteLeagueModal.vue';
import EditLeagueModal from '@/components/Admin/EditLeagueModal.vue';
import api from '@/plugins/axios';
import { onMounted, ref } from 'vue';

const leagues = ref([]);
const fetchData = async () => {
    const response = await api.get('/leagues');
    console.log(response.data.data);
    leagues.value = response.data.data;
}

const reloadData = () => {
    fetchData();
};

const showEditModal = ref(false);
const selectedLeagueId = ref(null);

const editLeague = (slug) => {
  selectedLeagueId.value = slug;
  showEditModal.value = true;
};

onMounted(fetchData);
</script>

<template>
    
  <div>
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-2xl font-semibold text-gray-800">Manage Leagues</h3>
      <CreateLeagueModal @updated="reloadData" />
    </div>

    <div class="overflow-hidden rounded-xl shadow-lg border border-gray-200">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th class="px-6 py-3">SN</th>
            <th class="px-6 py-3">Name</th>
            <th class="px-6 py-3">Logo</th>
            <th class="px-6 py-3">Start Date</th>
            <th class="px-6 py-3">Total Matches</th>
            <th class="px-6 py-3">Total Teams</th>
            <th class="px-6 py-3">Status</th>
            <th class="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(league, index) in leagues"
            :key="league.id"
            class="border-b hover:bg-gray-50 transition"
          >
            <td class="px-6 py-4 font-medium">{{ index + 1 }}</td>
            <td class="px-6 py-4 font-medium text-gray-800">{{ league.name }}</td>
            <td class="px-6 py-4">
              <img class="w-10 h-10 object-cover rounded" :src="league.logo" alt="Logo" />
            </td>
            <td class="px-6 py-4">{{ league.start_date }}</td>
            <td class="px-6 py-4">{{ league.total_matches_played ?? 'N/A' }}</td>
            <td class="px-6 py-4">{{ league.total_teams ?? 'N/A'}}</td>
            <td class="px-6 py-4">
              <span
                :class="[
                  'px-3 py-1 text-xs rounded-full font-semibold',
                  league.is_active
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                ]"
              >
                {{ league.is_active ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td class="px-6 py-4 flex gap-3 justify-center">
                <a :href="'/admin/leagues/'+league.slug+'/teams'" class="px-3 py-1.5 bg-pink-600 text-white rounded-lg text-xs shadow hover:bg-pink-700 transition">Teams</a>

                <button @click="editLeague(league.slug)" class="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs shadow hover:bg-blue-700 transition">Edit</button>

                <DeleteLeagueModal :leagueSlug="league.slug" @updated="reloadData" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
<EditLeagueModal :show="showEditModal" :leagueId="selectedLeagueId" @close="showEditModal = false" @updated="reloadData" />
</template>