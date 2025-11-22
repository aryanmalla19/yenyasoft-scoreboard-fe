<script setup>
import { ref, watch } from "vue";
import api from "@/plugins/axios";
import Modal from "@/components/Modal.vue";
import { toast } from "vue-sonner";
import { useRoute } from "vue-router";

const showCreateModal = ref(false);

const emit = defineEmits(["updated"]);

const form = ref({
  name: "",
  logo: null,
});

const route = useRoute();

const submitForm = async () => {
  const fd = new FormData();
  fd.append("name", form.value.name);
  fd.append("logo", form.value.logo);

  try {
    const leagueSlug = route.params.slug;
    const response = await api.post("/leagues/" + leagueSlug +'/teams', fd);
    console.log("Created:", response.data);
    emit("updated");
    showCreateModal.value = false;

    toast.success("Successfully created Team " + form.value.name);

    // Reset form
    form.value = {
      name: "",
      logo: null,
    };

  } catch (error) {
    toast.error(error.response.data.message ?? 'Some error occurred');
    console.error("Error creating team:", error);
  }
};
</script>

<template>
  <button
    @click="showCreateModal = true"
    class="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
  >
    Create New Team
  </button>

  <Modal :show="showCreateModal" @close="showCreateModal = false">
    <h2 class="text-xl font-semibold mb-4">Create Team</h2>

    <form @submit.prevent="submitForm" class="space-y-4">

      <!-- Name -->
      <div>
        <label class="block mb-1 font-medium">Team Name</label>
        <input
          type="text"
          v-model="form.name"
          required
          class="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <!-- Logo -->
      <div>
        <label class="block mb-1 font-medium">Team Logo</label>
        <input
          type="file"
          accept="image/*"
          @change="(e) => (form.logo = e.target.files[0])"
          required
        />
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  </Modal>
</template>
