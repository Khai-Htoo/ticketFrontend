<script setup>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import LoginForm from "@/components/Auth/LoginForm.vue";
import { ref } from "vue";
const visible = ref(false);
</script>
<template>
  <Button
    label="SignIn"
    icon="pi pi-external-link"
    @click="visible = true"
    class="dark:bg-yellow-400 bg-yellow-400 md:text-[30px] md:px-9"
  />

  <Dialog
    v-model:visible="visible"
    modal
    header="SignIn Your Account"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <LoginForm />
  </Dialog>
</template>
