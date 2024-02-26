<script setup>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import TicketEditForm from "./TicketEditForm.vue";
import { onMounted, ref } from "vue";
import { GetData } from "@/api/GetData";
const { data, fetchData } = GetData();
const visible = ref(false);
const props = defineProps(["ticket"]);
const emit = defineEmits();
const updateTicket = () => {
  emit("updateTicket");
};
onMounted(() => {
  fetchData("api/category");
});
</script>
<template>
  <Button
    label="Edit"
    class="mx-2 dark:bg-white dark:border-2 dark:text-[gray]"
    icon="pi pi-external-link"
    @click="visible = true"
  />

  <Dialog
    v-model:visible="visible"
    modal
    header="Edit Your Ticket"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <TicketEditForm
      :ticket="props.ticket"
      :data="data"
      @close="visible = false"
      @updateTicket="updateTicket"
    />
  </Dialog>
</template>
