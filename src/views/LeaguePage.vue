<script setup>
import api from '@/assets/axios';
import LeagueMainCard from '@/components/LeagueMainCard.vue';
import RecentMatch from '@/components/RecentMatch.vue';
import TeamStanding from '@/components/TeamStanding.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const league = ref({});
const standings = ref([]);
const recentMatches = ref([]);

const fetchData = async (slug) => {
    try{
        const route = useRoute();
        const slug = route.params.slug;
        const response = await api.get('/leagues/'+slug);
        console.log(response.data.data);
        league.value = response.data.data;
        standings.value = response.data.data.teams;
        recentMatches.value = league.matches;
    }catch(error){
        console.log(error);
    }
}
onMounted(fetchData);
</script>

<template>
    <div class="container mx-auto px-4">
        <LeagueMainCard :league="league"/>
        <TeamStanding :teams="standings" />
        <RecentMatch :matches="recentMatches"/>
    </div>
</template>