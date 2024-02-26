<script setup>
const props = defineProps(["ticket"]);
</script>
<template>
  <div class="md:pr-12 space-y-3" v-if="ticket">
    <h1 class="flex md:text-[30px]">
      <p class="sm:min-w-28 md:min-w-48">Name</p>
      <p>- {{ props.ticket.name }}</p>
    </h1>
    <h1 class="flex md:text-[30px]">
      <p class="sm:min-w-28 md:min-w-48">Category</p>
      <p>- {{ props.ticket?.category?.name }}</p>
    </h1>
    <h1 class="flex md:text-[30px]">
      <p class="sm:min-w-28 md:min-w-48">Nrc Number</p>
      <p>- {{ props.ticket.nrc_number }}</p>
    </h1>
    <h1 class="flex md:text-[30px]">
      <p class="sm:min-w-28 md:min-w-48">Phone</p>
      <p>- {{ props.ticket.phone }}</p>
    </h1>
    <h1 class="flex md:text-[30px]">
      <p class="sm:min-w-28 md:min-w-48">Description</p>
      <p>- {{ props.ticket.description }}</p>
    </h1>
    <h1 class="flex md:text-[30px]">
      <p class="sm:min-w-28 md:min-w-48">Date</p>
      <p>- {{ props.ticket.date }}</p>
    </h1>
    <h1 class="flex md:text-[30px]">
      <p class="sm:min-w-28 md:min-w-48">Priority</p>
      <p>- {{ props.ticket.priority }}</p>
    </h1>
    <h1 class="flex md:text-[30px]">
      <p class="sm:min-w-28 md:min-w-48">Status</p>
      <p>- {{ props.ticket.status }}</p>
    </h1>
  </div>
</template>
