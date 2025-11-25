<script setup>
import api from '@/plugins/axios';
import { onMounted } from 'vue';
import { ref } from 'vue';
import RecentActivity from './RecentActivity.vue';

const stats = ref([]);

const fetchData = async () => {
    const response = await api.get('admin/dashboard');
    console.log(response.data);
    stats.value = response.data;
}

onMounted(fetchData);
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="stat-card bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-gray-600 text-sm font-medium mb-1">Total Leagues</h3>
            <p class="text-3xl font-bold text-gray-800">{{ stats.totalLeagues ?? 'N/A' }}</p>
            <p class="text-xs text-gray-500 mt-2">{{ stats.totalActiveLeagues ?? 'N/A' }} Active</p>
        </div>

        <div class="stat-card bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-gray-600 text-sm font-medium mb-1">Total Teams</h3>
            <p class="text-3xl font-bold text-gray-800">{{ stats.totalTeams }}</p>
            <p class="text-xs text-gray-500 mt-2">Across all leagues</p>
        </div>

        <div class="stat-card bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-gray-600 text-sm font-medium mb-1">Total Players</h3>
            <p class="text-3xl font-bold text-gray-800">{{ stats.totalPlayers }}</p>
            <p class="text-xs text-gray-500 mt-2">Registered players</p>
        </div>

        <div class="stat-card bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-gray-600 text-sm font-medium mb-1">Total Matches</h3>
            <p class="text-3xl font-bold text-gray-800">{{ stats.totalMatches }}</p>
            <p class="text-xs text-gray-500 mt-2">{{ stats.totalMatchesToday }} matches today</p>
        </div>
    </div>
    <RecentActivity />
</template>
