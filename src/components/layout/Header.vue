<template>
  <div class="px-3 py-2 bg-gray-800">
    <div class="flex items-center justify-between">
      <div class="flex-1 min-w-0">
        <h1 v-show="title" class="text-l font-medium leading-7 tracking-wide text-white sm:text-3xl sm:leading-9 sm:truncate">
          {{ title }}
        </h1>
      </div>
      <div class="flex md:mt-0 md:ml-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: { String, required: false },
    }
}
</script>
