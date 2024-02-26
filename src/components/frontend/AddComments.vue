<script setup>
import Message from "primevue/message";
import Dialog from "primevue/dialog";
import { ref } from "vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import axios from "axios";
const comment = ref();
const errors = ref();
const attachment = ref();
const visible = ref(false);
const props = defineProps(["ticket"]);
const emit = defineEmits();
const handleSubmit = async () => {
  const formData = {
    ticket_id: props.ticket.id,
    comment: comment.value,
    attachment: attachment.value,
  };
  try {
    const res = await axios.post("/api/comment", formData);
    if (res.data.status == 200) {
      visible.value = false;
      emit("alert");
    }
  } catch (error) {
    errors.value = error.response.data.errors;
  }
};
</script>
<template>
  <Button label="Comment" icon="pi pi-external-link" @click="visible = true" />
  <Dialog
    v-model:visible="visible"
    modal
    header="Add Comment & Attachment"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <form @submit.prevent="handleSubmit">
      <div class="">
        <label class="my-2">Comment </label>
        <InputText type="text" v-model="comment" class="w-full" />
        <strong v-if="errors?.comment" class="text-red-500">{{
          errors.comment[0]
        }}</strong>
      </div>
      <div class="my-3">
        <label class="my-2">Attachment</label>
        <InputText
          type="file"
          @change="(e) => (attachment = e.target.files[0])"
          class="w-full"
        />
        <strong v-if="errors?.attachment" class="text-red-500">{{
          errors.attachment[0]
        }}</strong>
      </div>
      <Button label="Submit" type="submit" />
    </form>
  </Dialog>
</template>
