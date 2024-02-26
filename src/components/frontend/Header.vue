<script setup>
import LogiImg from "@/assets/image/logo.png";
import BuyTicket from "./BuyTicket.vue";
import Button from "primevue/button";
import axios from "axios";
import router from "@/router";
const handleLogout = async () => {
  const res = await axios.post("logout");
  if (res) {
    router.push("/");
    localStorage.removeItem("auth");
  }
};
</script>
<template>
  <div class="shadow-lg">
    <div class="max-w-screen-xl mx-auto py-2">
      <div class="flex justify-between items-center">
        <div class="">
          <img :src="LogiImg" class="w-20 h-20" alt="" />
        </div>
        <div class="flex items-center space-x-3">
          <BuyTicket />
          <Button label="Logout" @click="handleLogout" class=" " />
        </div>
      </div>
    </div>
  </div>
</template>
