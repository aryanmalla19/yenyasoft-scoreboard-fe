<template>
  <div>
    <header class="py-3">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-right text-bold">Premier League</h1>
        <p class="text-grey-600 text-right text-sm mt-2 opacity-90">Date: November 21, 2025</p>
      </div>
    </header>

    <section class="container mx-auto px-4 pb-10">
      <div class="flex justify-center items-center space-x-12">
        <div class="text-center">
          <h2 class="text-lg">Manchester United</h2>
          <img src="/man-city-logo.png" alt="Manchester United Logo" class="mx-auto w-36 h-36 object-contain">
        </div>
        <div class="text-3xl font-extrabold text-gray-800">2 - 1</div>
        <div class="text-center">
          <h2 class="text-lg">Liverpool</h2>
          <img src="/man-city-logo.png" alt="Liverpool Logo" class="mx-auto w-36 h-36 object-contain">
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 py-2">
      <h2 class="text-xl font-bold text-center mb-8">Match Events</h2>
      <div class="event-timeline max-w-4xl mx-auto">
        <div class="event-item left">
          <div class="event-content text-right group">
            <p class="font-semibold text-lg">20' ⚽ Goal</p>
            <p class="text-gray-700">Bruno Fernandes (Manchester United)</p>
          </div>
        </div>
        <div class="event-item right">
          <div class="event-content text-left group">
            <p class="font-semibold text-lg">45' ⚽ Goal</p>
            <p class="text-gray-700">Mohamed Salah (Liverpool)</p>
          </div>
        </div>
        <div class="event-item left">
          <div class="event-content text-right group">
            <p class="font-semibold text-lg">60' ⚽ Goal</p>
            <p class="text-gray-700">Marcus Rashford (Manchester United)</p>
          </div>
        </div>
        <div class="event-item right">
          <div class="event-content text-left bg-red-50 group">
            <p class="font-semibold text-lg text-red-600">80' 🟥 Red Card</p>
            <p class="text-gray-700">Virgil van Dijk (Liverpool)</p>
          </div>
        </div>
      </div>
    </section>

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

<style lang="css" scoped>
.event-timeline {
  position: relative;
}

.event-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: linear-gradient(to bottom, #e5e7eb, #d1d5db);
  transform: translateX(-50%);
  border-radius: 2px;
}

.event-item {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
}

.event-item.left {
  justify-content: flex-start;
}

.event-item.right {
  justify-content: flex-end;
}

.event-content {
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  background: #f9fafb;
  max-width: 45%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-item .event-content::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  border-style: solid;
}

.event-item.left .event-content::before {
  right: -10px;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #f9fafb;
}

.event-item.right .event-content::before {
  left: -10px;
  border-width: 10px 10px 10px 0;
  border-color: transparent #f9fafb transparent transparent;
}

.event-item::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  border: 4px solid #3b82f6;
  transform: translate(-50%, -50%);
  transition: background 0.3s ease;
}

.event-item:hover::after {
  background: #3b82f6;
}

.event-item:hover .event-content {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>