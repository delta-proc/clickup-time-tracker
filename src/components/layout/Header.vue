<template>
  <div class="px-3 py-2 bg-gray-800">
    <div class="flex items-center justify-between">

      <div class="flex-1 min-w-0">
        <slot />
      </div>

      <div class="flex md:mt-0 md:ml-4">
        <slot name="controls" />
      </div>

    </div>
  </div>
</template>
