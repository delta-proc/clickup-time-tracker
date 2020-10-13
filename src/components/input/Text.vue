<template>
  <div class="max-w-lg flex rounded-md shadow-sm">
    <span
      v-show="addOn"
      class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
    >
      {{ addOn }}
    </span>

    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      id="username"
      class="flex-1 form-input block w-full min-w-0 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
    />
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: {
    value: { String, required: true },
    addOn: { String, required: false },
  },
};
</script>
