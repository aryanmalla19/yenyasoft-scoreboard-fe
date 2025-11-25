<script setup>
import { ref, watch } from "vue";
import api from "@/plugins/axios";
import Modal from "@/components/Modal.vue";
import { toast } from "vue-sonner";

const showCreateModal = ref(false);

const emit = defineEmits(["updated"]);

const form = ref({
  is_live: false,
  start_time: "",
  end_time: "",
  home_team_id: null,
  away_team_id: null,
});

const props = defineProps({
  teams: {
    type: Array,
    default: () => [],
  },
});

// AUTO-CALCULATE END TIME
watch(
  () => {
    if (!form.value.start_time) return;

    const start = new Date(form.value.start_time);

    const totalMinutes = 90;
    const end = new Date(start.getTime() + totalMinutes * 60000);

    form.value.end_time = end.toISOString().slice(0, 16);
  }
);

// WHEN LIVE MATCH IS CLICKED → OVERRIDE start_time
watch(
  () => form.value.is_live,
  (val) => {
    if (val) {
      const now = new Date();
      form.value.start_time = now.toISOString().slice(0, 16);
    } else {
      form.value.start_time = "";
    }
  }
);

const submitForm = async () => {
  const fd = new FormData();

  // If LIVE → override start_time & end_time
  if (form.value.is_live) {
    const now = new Date();
    form.value.start_time = now.toISOString().slice(0, 16);
    const end = new Date(now.getTime() + (90 * 60000));
    form.value.end_time = end.toISOString().slice(0, 16);
    fd.append("is_live", true);
  }

  fd.append("start_time", form.value.start_time);
  fd.append("end_time", form.value.end_time);
  fd.append("home_team_id", form.value.home_team_id);
  fd.append("away_team_id", form.value.away_team_id);

  try {
    console.log("REQUEST = ", Object.fromEntries(fd.entries()));
    await api.post("/matches/start", fd);
    emit("updated");
    showCreateModal.value = false;
    toast.success("Successfully started a match!");
  } catch (error) {
    toast.error(error.response?.data?.message ?? "Some error occurred");
  }
};
</script>



<template>
  <button @click="showCreateModal = true"
    class="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
    Create New Match
  </button>

  <Modal :show="showCreateModal" @close="showCreateModal = false">
    <h2 class="text-xl font-semibold mb-4">Create Match</h2>

    <form @submit.prevent="submitForm" class="space-y-4">

      <!-- Live Toggle -->
      <div>
        <input class="mr-2" type="checkbox" v-model="form.is_live" id="is_live" />
        <label for="is_live">Is Live Match?</label>
      </div>

      <!-- Home Team -->
      <div v-if="teams.length">
        <label class="block mb-2 font-medium">Home Team</label>
        <select v-model="form.home_team_id"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg">
          <option value="" disabled>Select Home Team</option>
          <option v-for="team in teams" :key="team.id" :value="team.id">
            {{ team.name }}
          </option>
        </select>
      </div>

      <!-- Away Team -->
      <div v-if="teams.length">
        <label class="block mb-2 font-medium">Away Team</label>
        <select v-model="form.away_team_id"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg">
            <option value="" disabled>Select Away Team</option>
            <option v-for="team in teams" :key="team.id" :value="team.id">
                {{ team.name }}
            </option>
        </select>
      </div>

      <!-- Start Time (hidden when live) -->
      <div v-if="!form.is_live">
        <label class="block mb-1 font-medium">Start Time</label>
        <input
          type="datetime-local"
          v-model="form.start_time"
          required
          class="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <button type="submit"
        class="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
        Submit
      </button>
    </form>
  </Modal>
</template>