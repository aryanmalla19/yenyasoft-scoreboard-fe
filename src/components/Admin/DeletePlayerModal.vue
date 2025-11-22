<script setup>
import Swal from "sweetalert2";
import api from "@/plugins/axios";

const props = defineProps({
    playerId: {
        type: Number,
        require: true,
    }
})

const emit = defineEmits(['updated']);

const deleteLeague = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This action cannot be undone!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc2626", // red-600
    cancelButtonColor: "#6b7280",  // gray-500
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      await api.delete(`/players/${id}`);
      Swal.fire("Deleted!", "Player has been deleted.", "success");
      emit('updated');
    }
  });
};
</script>

<template>
  <button @click="deleteLeague(playerId)"
    class="px-3 py-1.5 bg-red-600 text-white rounded-lg text-xs shadow hover:bg-red-700 transition">
    Delete
  </button>
</template>
