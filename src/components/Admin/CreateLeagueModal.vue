<script setup>
import { ref, watch } from "vue";
import api from "@/plugins/axios";
import Modal from "@/components/Modal.vue";
import { toast } from "vue-sonner";

const showCreateModal = ref(false);

const emit = defineEmits(["updated"]);

const form = ref({
  name: "",
  description: "",
  start_date: "",
  duration: "",
  end_date: "",
  logo: null,
});

watch(
  () => [form.value.start_date, form.value.duration],
  () => {
    if (form.value.start_date && form.value.duration) {
      const start = new Date(form.value.start_date);
      start.setMonth(start.getMonth() + parseInt(form.value.duration));
      form.value.end_date = start.toISOString().slice(0, 10);
    }
  }
);

const submitForm = async () => {
  const fd = new FormData();
  fd.append("name", form.value.name);
  fd.append("description", form.value.description);
  fd.append("start_date", form.value.start_date);
  fd.append("duration", form.value.duration);
  fd.append("end_date", form.value.end_date);
  fd.append("logo", form.value.logo);

  try {
    const response = await api.post("/leagues", fd);
    console.log("Created:", response.data);
    emit("updated");
    showCreateModal.value = false;

    toast.success("Successfully created League " + form.value.name);

    // Reset form
    form.value = {
      name: "",
      description: "",
      start_date: "",
      duration: "",
      end_date: "",
      logo: null,
    };

  } catch (error) {
    toast.error(error.response.data.message ?? 'Some error occurred');
    console.error("Error creating league:", error);
  }
};
</script>

<template>
  <button
    @click="showCreateModal = true"
    class="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
  >
    Create New League
  </button>

  <Modal :show="showCreateModal" @close="showCreateModal = false">
    <h2 class="text-xl font-semibold mb-4">Create League</h2>

    <form @submit.prevent="submitForm" class="space-y-4">

      <!-- Name -->
      <div>
        <label class="block mb-1 font-medium">League Name</label>
        <input
          type="text"
          v-model="form.name"
          required
          class="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <!-- Logo -->
      <div>
        <label class="block mb-1 font-medium">League Logo</label>
        <input
          type="file"
          accept="image/*"
          @change="(e) => (form.logo = e.target.files[0])"
          required
        />
      </div>

      <!-- Description -->
      <div>
        <label class="block mb-1 font-medium">Description</label>
        <textarea
          v-model="form.description"
          placeholder="Write league description..."
          rows="3"
          class="border text-sm rounded-md block w-full p-3.5 shadow-xs"
        ></textarea>
      </div>

      <!-- Start Date -->
      <div>
        <label class="block mb-1 font-medium">Start Date</label>
        <input
          type="date"
          v-model="form.start_date"
          required
          class="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <!-- Duration -->
      <div>
        <label class="block mb-1 font-medium">Duration (months)</label>
        <input
          type="number"
          v-model="form.duration"
          min="1"
          required
          class="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <!-- End Date (Auto) -->
      <div>
        <label class="block mb-1 font-medium">End Date (auto-calculated)</label>
        <input
          type="date"
          v-model="form.end_date"
          readonly
          class="w-full border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
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
