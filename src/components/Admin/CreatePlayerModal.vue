<script setup>
import { ref } from "vue";
import api from "@/plugins/axios";
import Modal from "@/components/Modal.vue";
import { toast } from "vue-sonner";

const showCreateModal = ref(false);

const emit = defineEmits(["updated"]);

const form = ref({
    name: "",
    image: null,
    team_id: null,
});

const props = defineProps({
    teams: {
        type: Array,
        require: false,
        default: [],
    }
})


const submitForm = async () => {
  const fd = new FormData();
  fd.append("name", form.value.name);
  fd.append("image", form.value.image);
  if (form.value.team_id !== null && form.value.team_id !== "") {
    fd.append("team_id", form.value.team_id);
  }
  
  try {
    const response = await api.post("/players", fd);
    console.log("Created:", response.data);
    emit("updated");
    showCreateModal.value = false;
    
    toast.success('Successfully created ' + form.value.name + ' Player');

    // Reset form
    form.value = {
      name: "",
      image: null,
      team_id: null,
    };

  } catch (error) {
    toast.error(error.response.data.message ?? 'Some error occurred');
    console.error("Error creating player:", error);
  }
};
</script>

<template>
  <button @click="showCreateModal = true"
    class="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
    Create New Player
  </button>

  <Modal :show="showCreateModal" @close="showCreateModal = false">
    <h2 class="text-xl font-semibold mb-4">Create Player</h2>

    <form @submit.prevent="submitForm" class="space-y-4">

      <!-- Name -->
      <div>
        <label class="block mb-1 font-medium">Name</label>
        <input
          type="text"
          v-model="form.name"
          required
          class="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <!-- image -->
      <div>
        <label class="block mb-1 font-medium">Image</label>
        <input
          type="file"
          accept="image/*"
          @change="(e) => (form.image = e.target.files[0])"
        />
      </div>

    <div v-if="teams.length" class="mb-4">
        <label class="block mb-2 font-medium text-gray-700">
            Team <span class="text-gray-500 font-normal">(Optional)</span>
        </label>
        <select v-model="form.team_id" name="team_id" class="w-full px-4 py-2 border border-gray-300 rounded-lg">
  <option value="" disabled>Select a Team</option>
  <option v-for="team in teams" :key="team.id" :value="team.id">
      {{ team.name }}
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
