<script setup>
import { ref, watch, defineProps } from "vue";
import api from "@/plugins/axios";
import Modal from "@/components/Modal.vue";
import { toast } from "vue-sonner";

const props = defineProps({
  show: Boolean,
  playerId: Number,
});

const emit = defineEmits(["close", "updated"]);

const form = ref({
  name: "",
  image: null,
});

watch(
  () => props.show,
  async (newVal) => {
    if (newVal && props.playerId) {
      const response = await api.get(`/players/${props.playerId}`);
      const player = response.data.data;

      form.value = {
        name: player.name,
        image: null,
      };
    }
  }
);

// Submit Edit Form
const submitEdit = async () => {
  const fd = new FormData();
  fd.append("name", form.value.name);

  if (form.value.image) {
    fd.append("image", form.value.image);
  }

  try {
    await api.post(`/players/${props.playerId}`, fd, {
      headers: { "X-HTTP-Method-Override": "PUT" },
    });

    emit("updated");
    emit("close");
    toast.success("Successfully updated Player " + form.value.name);
  } catch (error) {
    toast.error(error.response.data.message ?? 'Some error occurred');
    console.error("Update failed:", error);
  }
};
</script>

<template>
  <Modal :show="show" @close="$emit('close')">
    <h2 class="text-xl font-semibold mb-4">Edit Player</h2>

    <form @submit.prevent="submitEdit" class="space-y-4">
      <div>
        <label class="block mb-1 font-medium">Name</label>
        <input type="text" v-model="form.name" class="w-full border rounded-lg px-3 py-2" required />
      </div>

      <div>
        <label class="block mb-1 font-medium">Upload New Image (optional)</label>
        <input type="file" accept="image/*" @change="e => form.image = e.target.files[0]" />
      </div>

      <button class="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
        Update Player
      </button>
    </form>
  </Modal>
</template>
