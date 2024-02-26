<script setup>
const props = defineProps(["data"]);
</script>
<template>
  <div
    class="bg-[#ffffe8] animate__animated animate__fadeIn border-2 rounded-lg p-3 flex space-x-4"
    v-if="props.data"
  >
    <div class="w-full">
      <div class="text-slate-600 space-y-2">
        <div class="flex justify-between items-center">
          <h1 class="sm:text-[20px] lg:text-[30px] font-[550] line-clamp-1">
            Name : {{ props.data?.name }}
          </h1>
          <div class="flex items-center">
            <h1
              :class="[
                props.data?.status == 'pending'
                  ? 'border-yellow-300'
                  : 'border-[green]',
              ]"
              class="bg-white border-2 rounded-lg px-2 py-2"
            >
              {{ props.data?.status }}
            </h1>
          </div>
        </div>
        <h1 class="text-[20px] font-[500]">
          Nrc Number : {{ props.data?.nrc_number }}
        </h1>
        <h1 class="text-[20px] font-[500]">
          Phone Number : {{ props.data?.phone }}
        </h1>
        <h1 class="text-[20px] font-[500]">
          Category : {{ props.data.category?.name }}
        </h1>
      </div>
      <div
        class="border-t-2 border-dashed border-slate-500 border-b-2 w-full my-4 py-2"
      >
        Safe & Happy Journey with Plancy train Ticket Service
      </div>
      <div class="text-slate-700 font-[500]">
        <i class="fas fa-clock"></i> {{ props.data?.date }} (
        {{ props.data?.priority }} )
      </div>
    </div>
  </div>
</template>
