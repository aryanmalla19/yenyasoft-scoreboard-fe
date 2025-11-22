<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="stat-card bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-gray-600 text-sm font-medium mb-1">Total Leagues</h3>
            <p class="text-3xl font-bold text-gray-800">24</p>
            <p class="text-xs text-gray-500 mt-2">8 Active, 16 Completed</p>
        </div>

        <div class="stat-card bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-gray-600 text-sm font-medium mb-1">Total Teams</h3>
            <p class="text-3xl font-bold text-gray-800">156</p>
            <p class="text-xs text-gray-500 mt-2">Across all leagues</p>
        </div>

        <div class="stat-card bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-gray-600 text-sm font-medium mb-1">Total Players</h3>
            <p class="text-3xl font-bold text-gray-800">2,847</p>
            <p class="text-xs text-gray-500 mt-2">Registered players</p>
        </div>

        <div class="stat-card bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-gray-600 text-sm font-medium mb-1">Total Matches</h3>
            <p class="text-3xl font-bold text-gray-800">432</p>
            <p class="text-xs text-gray-500 mt-2">12 matches today</p>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <h2 class="text-xl font-bold text-white">Recent Activity</h2>
            </div>
            <div class="p-6 space-y-4">
                <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm font-semibold text-gray-800">New League Created</p>
                        <p class="text-xs text-gray-600">Nepal Premier League 2024 was created</p>
                        <p class="text-xs text-gray-400 mt-1">2 hours ago</p>
                    </div>
                </div>

                <!-- Activity Item 2 -->
                <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm font-semibold text-gray-800">Match Completed</p>
                        <p class="text-xs text-gray-600">Thunder FC vs Lightning United ended 2-1</p>
                        <p class="text-xs text-gray-400 mt-1">5 hours ago</p>
                    </div>
                </div>

                <!-- Activity Item 3 -->
                <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm font-semibold text-gray-800">New Player Registered</p>
                        <p class="text-xs text-gray-600">Rajesh Kumar joined Kathmandu Gorkhas</p>
                        <p class="text-xs text-gray-400 mt-1">1 day ago</p>
                    </div>
                </div>

                <!-- Activity Item 4 -->
                <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm font-semibold text-gray-800">Match Scheduled</p>
                        <p class="text-xs text-gray-600">Titans FC vs Warriors United scheduled for tomorrow</p>
                        <p class="text-xs text-gray-400 mt-1">2 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
