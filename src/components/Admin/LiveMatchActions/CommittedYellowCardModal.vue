<script setup>
import Modal from '@/components/Modal.vue';
import api from '@/plugins/axios';
import { ref } from 'vue';
import { toast } from 'vue-sonner';

const showCreateModal = ref(false);

const props = defineProps({
    players: {
        type: Array,
        required: true,
    },
    matchId: {
        type: Number,
        required: true,
    },
});

const form = ref({
    player_id: null,
    value: 1,
})

const submitForm = async () => {
    const payload = {
        player_id: form.value.player_id,
        value: form.value.value,
        type: "yellow_card",
    };

    try {
        const response = await api.patch(`/matches/${props.matchId}/yellow-card`, payload);
        console.log("Created:", response.data);

        showCreateModal.value = false;
        toast.success("Successfully given Yellow Card");

        form.value = {
            player_id: null,
            value: 1,
        };
    } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message ?? 'Some error occurred');
    }
}
</script>


<template>
    <button @click="showCreateModal = true" className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-5 border border-border text-foreground py-2.5 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
        Add Foul (Yellow Card)
    </button>

  <Modal :show="showCreateModal" @close="showCreateModal = false">
    <h2 class="text-xl font-semibold mb-4">Add Foul</h2>

    <form @submit.prevent="submitForm" class="space-y-4">

      <div v-if="players.length">
        <label class="block mb-2 font-medium">Which player fouled?</label>
        <select v-model="form.player_id"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg">
          <option value="" disabled>Select Player</option>
          <option v-for="player in players" :key="player.id" :value="player.id">
            {{ player.name }}
          </option>
        </select>
      </div>

      <!-- Submit -->
      <button type="submit"
        class="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
        Submit
      </button>
    </form>
  </Modal>
</template>