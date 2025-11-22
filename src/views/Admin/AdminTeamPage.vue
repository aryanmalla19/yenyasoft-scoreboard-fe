<script setup>
import CreatePlayerModal from '@/components/Admin/CreatePlayerModal.vue';
import CreateTeamModal from '@/components/Admin/CreateTeamModal.vue';
import DeleteTeamModal from '@/components/Admin/DeleteTeamModal.vue';
import EditTeamModal from '@/components/Admin/EditTeamModal.vue';
import api from '@/plugins/axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const teams = ref([]);
const route = useRoute();
const fetchData = async () => {
    const leagueSlug = route.params.slug;
    const response = await api.get(`/leagues/${leagueSlug}/teams`);
    console.log(response.data.data);
    teams.value = response.data.data;
}

const reloadData = () => {
    fetchData();
};

const showEditModal = ref(false);
const selectedTeamId = ref(null);

const editTeam = (slug) => {
  selectedTeamId.value = slug;
  showEditModal.value = true;
};

onMounted(fetchData);
</script>

<template>
    
  <div>
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-2xl font-semibold text-gray-800">Manage Teams</h3>
        <div class="flex gap-x-5">
            <CreatePlayerModal :teams="teams" @updated="reloadData" />
            <CreateTeamModal @updated="reloadData" />
        </div>
    </div>

    <div class="overflow-hidden rounded-xl shadow-lg border border-gray-200">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th class="px-6 py-3">SN</th>
            <th class="px-6 py-3">Name</th>
            <th class="px-6 py-3">Logo</th>
            <th class="px-6 py-3">Total Wins</th>
            <th class="px-6 py-3">Total Draws</th>
            <th class="px-6 py-3">Total Loss</th>
            <th class="px-6 py-3">Total Score</th>
            <th class="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(team, index) in teams" :key="team.id" class="border-b hover:bg-gray-50 transition">
            <td class="px-6 py-4 font-medium">{{ index + 1 }}</td>
            <td class="px-6 py-4 font-medium text-gray-800">{{ team.name }}</td>
            <td class="px-6 py-4">
              <img class="w-10 h-10 object-cover rounded" :src="team.logo" alt="Logo" />
            </td>
            <td class="px-6 py-4">{{ team.total_wins ?? 'N/A' }}</td>
            <td class="px-6 py-4">{{ team.total_draws ?? 'N/A' }}</td>
            <td class="px-6 py-4">{{ team.total_losses ?? 'N/A'}}</td>
            <td class="px-6 py-4">{{ team.total_score ?? 'N/A'}}</td>
            <td class="px-6 py-4 flex gap-3 justify-center">
              <button @click="editTeam(team.slug)" class="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs shadow hover:bg-blue-700 transition">Edit</button>

              <DeleteTeamModal :teamSlug="team.slug" @updated="reloadData" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
<EditTeamModal :show="showEditModal" :teamSlug="selectedTeamId" @close="showEditModal = false" @updated="reloadData" />
</template>