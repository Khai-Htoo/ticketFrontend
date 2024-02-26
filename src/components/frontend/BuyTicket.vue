<script setup>
import { ref } from "vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import TicketSubForm from "./TicketSubForm.vue";
const visible = ref(false);
</script>
<template>
  <div>
    <Button
      label="Buy Ticket"
      icon="pi pi-external-link"
      @click="visible = true"
    />
    <Dialog
      v-model:visible="visible"
      modal
      header="Ticket Submission Form"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <TicketSubForm :user="user" @close="visible = false" />
    </Dialog>
  </div>
</template>
