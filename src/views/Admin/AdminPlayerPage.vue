<script setup>
import CreatePlayerModal from '@/components/Admin/CreatePlayerModal.vue';
import DeletePlayerModal from '@/components/Admin/DeletePlayerModal.vue';
import api from '@/plugins/axios';
import { onMounted, ref } from 'vue';

const players = ref([]);
const fetchData = async () => {
    const response = await api.get('/players');
    console.log(response.data.data);
    players.value = response.data.data;
}

const reloadData = () => {
    fetchData();
};

const showEditModal = ref(false);
const selectedPlayerId = ref(null);

const editPlayer = (slug) => {
  selectedPlayerId.value = slug;
  showEditModal.value = true;
};

onMounted(fetchData);
</script>

<template>
    
  <div>
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-2xl font-semibold text-gray-800">Manage Players</h3>
      <CreatePlayerModal @updated="reloadData" />
    </div>

    <div class="overflow-hidden rounded-xl shadow-lg border border-gray-200">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th class="px-6 py-3">SN</th>
            <th class="px-6 py-3">Name</th>
            <th class="px-6 py-3">Image</th>
            <th class="px-6 py-3">Team</th>
            <th class="px-6 py-3">Total Goals</th>
            <th class="px-6 py-3">Total Fouls</th>
            <th class="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(player, index) in players" :key="player.id" class="border-b hover:bg-gray-50 transition">
            <td class="px-6 py-4 font-medium">{{ index + 1 }}</td>
            <td class="px-6 py-4 font-medium text-gray-800">{{ player.name }}</td>
            <td class="px-6 py-4">
              <img class="w-10 h-10 object-cover rounded" :src="player.image" alt="Logo" />
            </td>
            <td class="px-6 py-4">{{ player.team.name ?? 'N/A' }}</td>
            <td class="px-6 py-4">{{ player.total_goals ?? 'N/A' }}</td>
            <td class="px-6 py-4">{{ player.total_fouls ?? 'N/A'}}</td>
            <td class="px-6 py-4 flex gap-3 justify-center">
              <button @click="editPlayer(league.slug)" class="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs shadow hover:bg-blue-700 transition">Edit</button>

              <DeletePlayerModal :playerId="player.id" @updated="reloadData" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
<EditPlayerModal :show="showEditModal" :playerId="selectedPlayerId" @close="showEditModal = false" @updated="reloadData" />
</template>