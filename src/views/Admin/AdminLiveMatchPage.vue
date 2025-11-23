<script setup>
import CommittedFoulModal from '@/components/Admin/LiveMatchActions/CommittedFoulModal.vue';
import CommittedRedCardModal from '@/components/Admin/LiveMatchActions/CommittedRedCardModal.vue';
import CommittedYellowCardModal from '@/components/Admin/LiveMatchActions/CommittedYellowCardModal.vue';
import EndMatchModal from '@/components/Admin/LiveMatchActions/EndMatchModal.vue';
import GoalScoredModal from '@/components/Admin/LiveMatchActions/GoalScoredModal.vue';
import api from '@/plugins/axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { toast } from 'vue-sonner';

const route = useRoute();
const matchId = route.params.id;

const match = ref({});
const homeTeamPlayers = ref([]);
const awayTeamPlayers = ref([]);
const totalPlayers = ref([]);

const fetchData = async () => {
    const response = await api.get('/matches/'+matchId);
    console.log(response.data.data);
    match.value = response.data.data;
    homeTeamPlayers.value = response.data.data.home_team?.players || [];
    awayTeamPlayers.value = response.data.data.away_team?.players || [];
    totalPlayers.value = [...homeTeamPlayers.value, ...awayTeamPlayers.value];
    console.log(totalPlayers.value);
}

const halftimeStart = async () => {
    try{
        const response = await api.patch(`/matches/${matchId}/halftime-start`);
        toast.success("Halftime Started!!");
    }catch(error){
        console.error(error);
        toast.error(error?.response?.data?.message ?? 'Some error occurred');
    }
}

const halftimeEnd = async () => {
    try{
        const response = await api.patch(`/matches/${matchId}/halftime-end`);
        toast.success("Halftime Ended and Match Started!!");
    }catch(error){
        console.error(error);
        toast.error(error?.response?.data?.message ?? 'Some error occurred');
    }
}

onMounted(fetchData);
</script>

<template>
    <div className="min-h-screen bg-background">
      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-accent rounded-full live-pulse" />
            <span className="text-primary-foreground text-lg font-semibold uppercase tracking-wide">
              Live Match
            </span>
            <span className="text-primary-foreground/70 text-sm">{{ match?.start_time }}</span>
          </div>
          <div className="text-right">
            <div className="text-primary-foreground/90 text-sm">{{ match?.league?.name }}</div>
            <div className="text-primary-foreground/60 text-xs">{{ match?.league?.start_date }} - {{ match?.league?.end_date }}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-10 items-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-card rounded-lg p-3 shadow-md">
              <img :src="match?.home_team?.logo" class="w-full h-full bg-muted rounded" alt="" srcset="">
            </div>
            <h2 className="text-primary-foreground text-xl font-bold mb-1">
              {{ match?.home_team?.name }}
            </h2>
            <span className="text-primary-foreground/50 text-xs uppercase tracking-wider">Home</span>
          </div>

          <div className="text-center">
            <div className="text-6xl font-bold text-primary-foreground mb-4 tracking-tight">
              {{ match?.home_score }} - {{ match?.away_score }}
            </div>
            <EndMatchModal :matchId="matchId" />
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-card rounded-lg p-3 shadow-md">
              <img :src="match?.away_team?.logo" class="w-full h-full bg-muted rounded" alt="" srcset="">
            </div>
            <h2 className="text-primary-foreground text-xl font-bold mb-1">
              {{ match?.away_team?.name }}
            </h2>
            <span className="text-primary-foreground/50 text-xs uppercase tracking-wider">Away</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl shadow-md overflow-hidden sticky top-6">
            <div className="bg-secondary px-5 py-4 border-b border-border">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                Quick Actions
              </h3>
            </div>
            
            <div className="p-5 flex">
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Match Controls
                </h4>
                <div class="flex flex-col">
                    <div class="flex">
                        <GoalScoredModal :matchId="matchId" :players="totalPlayers" />
                        <button @click="halftimeStart" className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-5 border border-border text-foreground py-2.5 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                            Start Halftime
                        </button>
                        <button @click="halftimeEnd" className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-5 border border-border text-foreground py-2.5 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                            End Halftime
                        </button>
                    </div>
                    <div class="flex">
                        <CommittedFoulModal :matchId="matchId" :players="totalPlayers" />
                        <CommittedRedCardModal :matchId="matchId" :players="totalPlayers" />
                        <CommittedYellowCardModal :matchId="matchId" :players="totalPlayers" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>