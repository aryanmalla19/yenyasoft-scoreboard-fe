<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');
    
const login = async () => {
  loading.value = true;
  errorMessage.value = '';

  try {
    const api = axios.create({
      baseURL: "http://localhost:8000",
      withCredentials: true,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        withXSRFToken: true,
    });

    await api.get('/sanctum/csrf-cookie');

    const response = await api.post('/login', {
      email: email.value,
      password: password.value,
    });

    const token = response.data.token;
    localStorage.setItem('token', token);

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    router.push('/admin/dashboard');

  } catch (error) {
    errorMessage.value = 'Invalid credentials or server error.';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="max-w-md mx-auto mt-20 p-6 shadow rounded bg-white">
    <h2 class="text-2xl font-bold mb-6 text-center">Admin Login</h2>

    <form @submit.prevent="login">
      <div class="mb-4">
        <label class="block font-medium mb-1">Email</label>
        <input 
          type="email" 
          v-model="email" 
          class="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div class="mb-4">
        <label class="block font-medium mb-1">Password</label>
        <input 
          type="password" 
          v-model="password" 
          class="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <p v-if="errorMessage" class="text-red-500 text-sm mb-3">
        {{ errorMessage }}
      </p>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        :disabled="loading"
      >
        {{ loading ? 'Logging in…' : 'Login' }}
      </button>
    </form>
  </div>
</template>
