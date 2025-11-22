<script setup>
import { ref, watch, defineProps } from "vue";
import api from "@/plugins/axios";
import Modal from "@/components/Modal.vue";
import { toast } from "vue-sonner";

const props = defineProps({
  show: Boolean,
  teamSlug: String,
});

const emit = defineEmits(["close", "updated"]);

const form = ref({
  name: "",
  logo: null,
});

watch(
  () => props.show,
  async (newVal) => {
    if (newVal && props.teamSlug) {
      const response = await api.get(`/teams/${props.teamSlug}`);
      const team = response.data.data;

      form.value = {
        name: team.name,
        logo: null,
      };
    }
  }
);

// Submit Edit Form
const submitEdit = async () => {
  const fd = new FormData();
  fd.append("name", form.value.name);

  if (form.value.logo) {
    fd.append("logo", form.value.logo);
  }

  try {
    await api.post(`/teams/${props.teamSlug}`, fd, {
      headers: { "X-HTTP-Method-Override": "PUT" },
    });

    emit("updated");
    emit("close");
    toast.success("Successfully updated Team " + form.value.name);
  } catch (error) {
    toast.error(error.response.data.message ?? 'Some error occurred');
    console.error("Update failed:", error);
  }
};
</script>

<template>
  <Modal :show="show" @close="$emit('close')">
    <h2 class="text-xl font-semibold mb-4">Edit Team</h2>

    <form @submit.prevent="submitEdit" class="space-y-4">
      <div>
        <label class="block mb-1 font-medium">Team Name</label>
        <input type="text" v-model="form.name" class="w-full border rounded-lg px-3 py-2" required />
      </div>

      <div>
        <label class="block mb-1 font-medium">Upload New Logo (optional)</label>
        <input type="file" accept="image/*" @change="e => form.logo = e.target.files[0]" />
      </div>

      <button class="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
        Update Team
      </button>
    </form>
  </Modal>
</template>
