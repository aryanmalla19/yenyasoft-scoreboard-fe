<script setup>
import Swal from "sweetalert2";
import api from "@/plugins/axios";

const props = defineProps({
    leagueSlug: {
        type: String,
        require: true,
    }
})

const emit = defineEmits(['updated']);

const deleteLeague = (slug) => {
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
      await api.delete(`/leagues/${slug}`);
      Swal.fire("Deleted!", "League has been deleted.", "success");
      emit('updated');
    }
  });
};
</script>

<template>
  <button
    @click="deleteLeague(leagueSlug)"
    class="px-3 py-1.5 bg-red-600 text-white rounded-lg text-xs shadow hover:bg-red-700 transition"
  >
    Delete
  </button>
</template>
