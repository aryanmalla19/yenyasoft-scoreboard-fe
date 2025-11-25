<script setup>
import api from '@/plugins/axios';
import MatchEvent from '@/components/MatchEvent.vue';
import { useRoute } from 'vue-router';
import echo from '@/plugins/echo';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { toast } from 'vue-sonner';

const homeTeam = ref({});
const awayTeam = ref({});
const match = ref({});
const events = ref([]);
const league = ref({});

let homeScore = ref(0);
let awayScore = ref(0);

const route = useRoute();
const id = route.params.id;

const fetchData = async () => {
  const response = await api.get('/matches/' + id);
  const data = response.data.data;
  console.log(data);

  match.value = data;
  homeTeam.value = data.home_team;
  awayTeam.value = data.away_team;
  events.value = data.events;
  league.value = data.league;
  homeScore.value = data.home_score;
  awayScore.value = data.away_score;
}

let channel = null;


onMounted(()=> {
  fetchData();

    channel = echo.channel(`scoreboard`);

    channel.listen("GoalScored", (data) => {
      events.value.push(data);
      homeScore.value = data.match_score.home;
      awayScore.value = data.match_score.away;
      toast.info(`GOALLLL !! ${data.player.name} scored a goal (${data.team.name})`);
    });

   channel.listen('FoulCommitted', (data) => {
      events.value.push(data);
    });

    channel.listen('RedCardCommitted', (data) => {
      events.value.push(data);
    });
    
    channel.listen('YellowCardCommitted', (data) => {
      events.value.push(data);
    });

    channel.listen("MatchEnded", (data) => {
      toast.info(`Match has ended with ${ data.match.home_team.name + ' ' + data.match.home_score} - ${data.match.away_score + ' ' + data.match.away_team.name}`);
      // window.location.href = "";
    })
})

onUnmounted(() => {
  if (channel) {
    echo.leave(`scoreboard`);
    channel = null;
  }
});

</script>

<template>
  <div>
    <header class="py-3">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-right text-bold">{{ league.name }}</h1>
        <p class="text-grey-600 text-right text-sm mt-2 opacity-90">Started: {{ match.start_time }}</p>
      </div>
    </header>

    <section class="container mx-auto px-4 pb-10">
      <div class="flex justify-center items-center space-x-12">
        <div class="text-center">
          <h2 class="text-lg">{{ homeTeam.name }}</h2>
          <img :src="homeTeam.logo" alt="Manchester United Logo" class="mx-auto w-36 h-36 object-contain">
        </div>
        <div class="text-3xl font-extrabold text-gray-800">{{ homeScore }} - {{ awayScore }}</div>
        <div class="text-center">
          <h2 class="text-lg">{{ awayTeam.name }}</h2>
          <img :src="awayTeam.logo" alt="Liverpool Logo" class="mx-auto w-36 h-36 object-contain">
        </div>
      </div>
    </section>

    <MatchEvent :events="events" />

    <!-- <section class="container mx-auto px-4 py-2 bg-white rounded-xl mb-10">
      <h2 class="text-3xl font-bold text-center mb-8">Player Lineups and Stats</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-2xl font-bold mb-6 text-center">Manchester United Players</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse text-lg">
              <thead>
                <tr class="bg-gray-200">
                  <th class="p-3 text-left">Player</th>
                  <th class="p-3 text-center">Goals</th>
                  <th class="p-3 text-center">Assists</th>
                  <th class="p-3 text-center">Cards</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Andre Onana (GK)</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Aaron Wan-Bissaka</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">🟨</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Raphael Varane</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Lisandro Martinez</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Luke Shaw</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">1</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Casemiro</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">🟨</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Bruno Fernandes</td>
                  <td class="p-3 text-center">1</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Christian Eriksen</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">1</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Alejandro Garnacho</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Marcus Rashford</td>
                  <td class="p-3 text-center">1</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="hover:bg-gray-50 transition-colors">
                  <td class="p-3">Rasmus Hojlund</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-6 text-center">Liverpool Players</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse text-lg">
              <thead>
                <tr class="bg-gray-200">
                  <th class="p-3 text-left">Player</th>
                  <th class="p-3 text-center">Goals</th>
                  <th class="p-3 text-center">Assists</th>
                  <th class="p-3 text-center">Cards</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Alisson Becker (GK)</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Trent Alexander-Arnold</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">🟨</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Virgil van Dijk</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">🟥</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Ibrahima Konate</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Andrew Robertson</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">1</td>
                  <td class="p-3 text-center">🟨</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Alexis Mac Allister</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Wataru Endo</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">🟨</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Dominik Szoboszlai</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Mohamed Salah</td>
                  <td class="p-3 text-center">1</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition-colors">
                  <td class="p-3">Luis Diaz</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
                <tr class="hover:bg-gray-50 transition-colors">
                  <td class="p-3">Darwin Nunez</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">0</td>
                  <td class="p-3 text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>
