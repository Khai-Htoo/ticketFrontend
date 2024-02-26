<script setup>
import Dashboard from "@/components/admin/Dashboard.vue";
</script>
<template>
  <div class="flex">
    <!-- dashboard -->
    <Dashboard />
    <router-view></router-view>
  </div>
</template>
