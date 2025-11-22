<script setup>
import { ref, watch, defineProps } from "vue";
import api from "@/plugins/axios";
import Modal from "@/components/Modal.vue";
import { toast } from "vue-sonner";

const props = defineProps({
  show: Boolean,
  leagueId: String,
});

const emit = defineEmits(["close", "updated"]);

const form = ref({
  name: "",
  description: "",
  start_date: "",
  duration: "",
  end_date: "",
  logo: null,
});

watch(
  () => props.show,
  async (newVal) => {
    if (newVal && props.leagueId) {
      const response = await api.get(`/leagues/${props.leagueId}`);
      const league = response.data.data;

      form.value = {
        name: league.name,
        description: league.description,
        start_date: league.start_date,
        duration: league.duration_months,
        end_date: league.end_date,
        logo: null,
      };
    }
  }
);

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

// Submit Edit Form
const submitEdit = async () => {
  const fd = new FormData();
  fd.append("name", form.value.name);
  fd.append("description", form.value.description);
  fd.append("start_date", form.value.start_date);
  fd.append("duration", form.value.duration);
  fd.append("end_date", form.value.end_date);

  if (form.value.logo) {
    fd.append("logo", form.value.logo);
  }

  try {
    await api.post(`/leagues/${props.leagueId}`, fd, {
      headers: { "X-HTTP-Method-Override": "PUT" },
    });

    emit("updated");
    emit("close");
    toast.success("Successfully updated League " + form.value.name);
  } catch (error) {
    toast.error(error.response.data.message ?? 'Some error occurred');
    console.error("Update failed:", error);
  }
};
</script>

<template>
  <Modal :show="show" @close="$emit('close')">
    <h2 class="text-xl font-semibold mb-4">Edit League</h2>

    <form @submit.prevent="submitEdit" class="space-y-4">
      <div>
        <label class="block mb-1 font-medium">League Name</label>
        <input type="text" v-model="form.name" class="w-full border rounded-lg px-3 py-2" required />
      </div>

      <div>
        <label class="block mb-1 font-medium">Upload New Logo (optional)</label>
        <input type="file" accept="image/*" @change="e => form.logo = e.target.files[0]" />
      </div>

      <div>
        <label class="block mb-1 font-medium">Description</label>
        <textarea
          v-model="form.description"
          rows="3"
          class="border text-sm rounded-md block w-full p-3.5 shadow-xs"
        ></textarea>
      </div>

      <div>
        <label class="block mb-1 font-medium">Start Date</label>
        <input type="date" v-model="form.start_date" class="w-full border rounded-lg px-3 py-2" />
      </div>

      <div>
        <label class="block mb-1 font-medium">Duration (months)</label>
        <input type="number" v-model="form.duration" min="1" class="w-full border rounded-lg px-3 py-2" />
      </div>

      <div>
        <label class="block mb-1 font-medium">End Date</label>
        <input
          type="date"
          v-model="form.end_date"
          readonly
          class="w-full border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
        />
      </div>

      <button class="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
        Update League
      </button>
    </form>
  </Modal>
</template>
