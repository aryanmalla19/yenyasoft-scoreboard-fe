<script setup lang="ts">
import Sidebar from '@/components/Admin/Sidebar.vue';
import Navbar from '@/components/Admin/Navbar.vue';
</script>

<template>
<div class="flex h-screen overflow-hidden">
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
        <Navbar/>

        <main class="flex-1 overflow-y-auto bg-gray-50 p-8">
          <router-view />
        </main>
    </div>
</div>
</template>

<style scoped>
    .sidebar-link {
        transition: all 0.3s ease;
    }
    .sidebar-link:hover {
        transform: translateX(5px);
    }
    .sidebar-link.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .animate-slideIn {
        animation: slideIn 0.5s ease-out;
    }
    .stat-card {
        transition: all 0.3s ease;
    }
    .stat-card:hover {
        transform: translateY(-8px);
    }
</style>