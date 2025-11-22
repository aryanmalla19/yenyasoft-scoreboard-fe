<script setup>
const props = defineProps({
    team: {
        type: Object,
        require: true,
    }
})
</script>

<template>
    <tr class="hover:bg-blue-50 transition cursor-pointer">
        <td class="px-6 py-5">
            <div class="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 text-white font-bold rounded-full shadow-md">
                1
            </div>
        </td>
        <td class="px-6 py-5">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gray-100 rounded-lg p-2 flex items-center justify-center shadow-sm">
                    <img :src="team.logo" alt="Team Logo" class="w-full h-full object-contain">
                </div>
                <div>
                    <div class="font-bold text-gray-900 text-lg">{{ team.name }}</div>
                    <a href="/team/1" class="text-xs text-blue-600 hover:text-blue-800 font-medium">View Details →</a>
                </div>
            </div>
        </td>
        <td class="px-6 py-5 text-center text-gray-700 font-semibold">0</td>
        <td class="px-6 py-5 text-center">
            <span class="text-green-600 font-bold text-lg">0</span>
        </td>
        <td class="px-6 py-5 text-center">
            <span class="text-gray-600 font-bold text-lg">0</span>
        </td>
        <td class="px-6 py-5 text-center">
            <span class="text-red-600 font-bold text-lg">0</span>
        </td>
        <td class="px-6 py-5 text-center">
            <span class="text-blue-600 font-bold text-lg">0</span>
        </td>
        <td class="px-6 py-5 text-center">
            <div class="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg px-4 py-2 rounded-lg shadow-md">
                0
            </div>
        </td>
    </tr>
</template>