<script setup>
import Login from "@/components/Auth/LoginCard.vue";
import Register from "@/components/Auth/RegisterCard.vue";
import trainVideo from "@/assets/video/train.mp4";
</script>

<template>
  <section
    class="relative flex items-center justify-center h-screen mb-12 overflow-hidden"
  >
    <div class="relative z-20 p-5 text-white rounded-xl">
      <h1
        class="text-red-600 lg:text-[70px] md:text-md sm:text-sm text-center font-semibold"
      >
        Welcome From Plancy Trains Service
      </h1>
      <h1
        class="text-center lg:text-[50px] md:text-md sm:text-sm text-yellow-400 font-semibold"
      >
        Find your dream journey!
      </h1>
      <div class="text-center mt-5">
        <div class="">
          <Login />
          <Register />
        </div>
      </div>
    </div>

    <!-- bg video -->
    <video
      autoplay
      loop
      muted
      class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    >
      <source :src="trainVideo" type="video/mp4" class="h-screen" />
    </video>
  </section>
</template>
