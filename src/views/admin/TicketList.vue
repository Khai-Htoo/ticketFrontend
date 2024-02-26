<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const ticket = ref();
const sort = ref("asc");
const date = ref("");
const url = ref("/api/ticket");
const fetchTicket = async () => {
  const res = await axios.get(url.value);
  ticket.value = res.data.data;
};

const SortBy = async () => {
  url.value = `/api/sortTicket/${sort.value}`;
  fetchTicket();
};

const filterDate = async () => {
  url.value = `/api/filterTicket/${date.value}`;
  fetchTicket();
};
const changeStatus = async (data) => {
  const res = await axios.patch("/api/changeStatus", data);
  if (res) {
    fetchTicket();
  }
};

onMounted(() => {
  fetchTicket();
});
</script>
<template>
  <div class="py-7 px-5">
    <h1 class="text-sm font-bold ml-10 mb-5">Ticket List</h1>
    <div class="flex items-center">
      <div class="ml-10 mb-3">
        Sort :
        <select class="px-3 py-2" @change="SortBy" v-model="sort">
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <div class="ml-10 mb-3">
        Filter By Date :
        <input
          type="date"
          class="px-3 py-1 bg-gray-100"
          v-model="date"
          @change="filterDate"
        />
      </div>
    </div>
    <!-- table -->
    <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
      <table class="table-fixed overflow-x-auto">
        <thead>
          <tr class="bg-gray-100">
            <th
              class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
            >
              Name
            </th>
            <th
              class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
            >
              Category
            </th>
            <th
              class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
            >
              Phone
            </th>
            <th
              class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
            >
              Date
            </th>
            <th
              class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
            >
              Priority
            </th>
            <th
              class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
            >
              Nrc Number
            </th>
            <th
              class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
            >
              Description
            </th>
            <th
              class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody class="bg-white" v-if="ticket">
          <template v-for="t in ticket" :key="t.id">
            <tr>
              <td class="py-4 px-6 border-b border-gray-200">{{ t.name }}</td>
              <td class="py-4 px-6 border-b border-gray-200 truncate">
                {{ t.category?.name }}
              </td>
              <td class="py-4 px-6 border-b border-gray-200">{{ t.phone }}</td>
              <td class="py-4 px-6 border-b border-gray-200">{{ t.date }}</td>
              <td class="py-4 px-6 border-b border-gray-200">
                {{ t.priority }}
              </td>
              <td class="py-4 px-6 border-b border-gray-200">
                {{ t.nrc_number }}
              </td>
              <td class="py-4 px-6 border-b border-gray-200">
                {{ t.description }}
              </td>
              <td class="border-b relative">
                <button
                  @click="changeStatus(t)"
                  :class="[
                    t.status == 'accept'
                      ? '  border-[green] rounded-md'
                      : 'border-[yellow] rounded-md',
                  ]"
                  class="px-3 py-1 border-2"
                >
                  {{ t.status }}
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
