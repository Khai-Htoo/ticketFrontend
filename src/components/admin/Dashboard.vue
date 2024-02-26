<script setup>
import router from "@/router";
import axios from "axios";
import { onMounted, ref } from "vue";
const user = ref();
const open = ref(true);
const fetchAuthUser = async () => {
  const res = await axios.get("/api/user");
  user.value = res.data;
};
const handelLogout = async () => {
  const res = await axios.post("/logout");
  if (res) {
    router.push({ name: "home" });
    localStorage.removeItem("auth");
  }
};
onMounted(() => {
  fetchAuthUser();
});
</script>
<template>
  <div
    :class="[open ? 'w-[280px]' : 'w-[100px] ']"
    class="bg-blue-950 h-screen relative rounded-r-xl duration-300"
  >
    <!-- toggle icon -->
    <i
      @click="open = !open"
      :class="[open ? 'rotate-180' : '']"
      class="fa-solid fa-arrow-right p-2 text-[18px] absolute top-20 text-blue-950 bg-white -right-3 border border-blue-950 rounded-full"
    ></i>

    <!-- user info -->
    <div class="px-3 py-5 flex items-center space-x-2">
      <img
        class="w-16 h-16 rounded-full"
        src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="
        alt=""
      />
      <div class="text-white" v-if="open">
        <h1>{{ user?.name }}</h1>
        <h1>{{ user?.email }}</h1>
      </div>
    </div>
    <router-link :to="{ name: 'TicketList' }"
      ><div
        class="bg-white mx-5 py-2 px-3 mt-4 rounded-md opacity-55 animate__animated animate__fadeInUp"
      >
        <i class="fa-solid fa-ticket"></i> <span v-if="open">TicketList</span>
      </div></router-link
    >
    <div
      @click="handelLogout"
      class="bg-red-500 mx-5 py-2 px-3 mt-4 rounded-md opacity-55 animate__animated animate__fadeInUp"
    >
      <i class="fa-solid fa-right-from-bracket"></i>
      <span v-if="open">Logout</span>
    </div>
  </div>
</template>
