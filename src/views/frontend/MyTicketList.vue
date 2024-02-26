<script setup>
import Header from "@/components/frontend/Header.vue";
import Ticket from "@/components/frontend/Ticket.vue";
import noDataImg from "@/assets/image/noData.jpg";
import axios from "axios";
import { onMounted, ref } from "vue";
const tickets = ref();
const date = ref();
const sort = ref("asc");
const url = ref("/api/ticket");

// fetch my ticket
const fetchTicket = async () => {
  const res = await axios.get("/api/user");
  if (res) {
    const result = await axios.get(url.value);
    result
      ? (tickets.value = result.data.data.filter(
          (d) => d.user_id == res.data.id
        ))
      : "";
  }
};

// filter by date
const filterByDate = async () => {
  url.value = `/api/filterTicket/${date.value}`;
  fetchTicket();
};

const SortBy = async () => {
  url.value = `/api/sortTicket/${sort.value}`;
  fetchTicket();
};

onMounted(() => {
  fetchTicket();
});
</script>
<template>
  <Header />
  <section class="max-w-screen-xl mx-auto py-2">
    <div class="flex items-center space-x-5">
      <div class="my-4 sm:mx-2 lg:mx-0">
        <label class="text-green-500">Filter By Date - </label>
        <input
          type="date"
          v-model="date"
          class="border-2 px-2 py-1 rounded-lg"
          @change="filterByDate"
        />
      </div>
      <div class="ml-10">
        Sort :
        <select class="px-3 py-2" @change="SortBy" v-model="sort">
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    </div>
    <div
      class="grid md:grid-cols-2 gap-5 mt-5 sm:mx-2 lg:mx-0"
      v-if="tickets && tickets.length > 0"
    >
      <template v-for="d in tickets" :key="d.id">
        <router-link :to="{ name: 'TicketDetail', params: { id: d.id } }">
          <Ticket :data="d"
        /></router-link>
      </template>
    </div>
    <div class="" v-else>
      <img
        :src="noDataImg"
        class="w-full lg:h-[700px] sm:px-3 lg:px-0 animate__animated animate__fadeIn"
      />
    </div>
  </section>
</template>
