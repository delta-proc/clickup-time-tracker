<template>
  <span class="inline-f lex rounded-md shadow-sm">
    <button
      :type="type"
      @click="$emit('click')"
      class="inline-flex items-center px-2.5 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
    >
      <slot />
    </button>
  </span>
</template>

<script>
export default {
    props: {
        type: { String, default: 'button', required: false }
    }
}
</script>
