<script setup>
import Message from "primevue/message";
import ticketImg from "@/assets/image/ticket.jpg";
import TicketDetailData from "@/components/frontend/TicketDetailData.vue";
import axios from "axios";
import EditTicket from "@/components/frontend/EditTicket.vue";
import { onMounted, ref } from "vue";
import Loading from "@/components/Loading.vue";
import AddComments from "@/components/frontend/AddComments.vue";
const props = defineProps(["id"]);
const successComment = ref(false);
const successEdit = ref(false);
const ticket = ref();

// fetch ticket
const fetchTicket = async () => {
  const res = await axios.get("/api/ticket");
  res ? (ticket.value = res.data.data.find((item) => item.id == props.id)) : "";
};

const updateTicket = () => {
  fetchTicket();
  successEdit.value = true;
};

onMounted(() => {
  fetchTicket();
});
</script>
<template>
  <div class="flex justify-center items-center">
    <div
      class="md:shadow-lg rounded-2xl flex items-center sm:h-[700px] mt-3 sm:px-3 md:px-10 relative"
      v-if="ticket"
    >
      <div class="card absolute top-0 mx-auto" v-if="successComment">
        <Message severity="success">Successfully Add Comment</Message>
      </div>
      <div class="card absolute top-0 mx-auto" v-if="successEdit">
        <Message severity="success">Successfully Edited Ticket</Message>
      </div>
      <router-link :to="{ name: 'MyTicketList' }"
        ><i class="fas fa-angle-left absolute top-10 left-7"></i
      ></router-link>
      <!-- edit button -->
      <div class="absolute md:top-10 sm:top-28 right-5">
        <EditTicket :ticket="ticket" @updateTicket="updateTicket" />
      </div>
      <div class="absolute md:top-10 sm:top-28 right-28">
        <AddComments :ticket="ticket" @alert="successComment = true" />
      </div>
      <div class="sm:hidden lg:block">
        <img :src="ticketImg" alt="" class="lg:w-[600px] lg:h-[700px]" />
      </div>
      <TicketDetailData :ticket="ticket" />
    </div>
    <div class="flex items-center h-screen" v-else>
      <Loading />
    </div>
  </div>
</template>
