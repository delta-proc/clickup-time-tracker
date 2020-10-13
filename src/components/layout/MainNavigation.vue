<template>
    <span class="text-l font-medium text-gray-400 leading-7 tracking-wide text-white truncate">
        <router-link :to="{ name: 'tracking' }">Tracking</router-link>

        <span class="mx-2">/</span>

        <router-link :to="{ name: 'tasks' }">Tasks</router-link>
    </span>
</template>

<style scoped>
.router-link-exact-active {
    @apply italic;
    @apply text-gray-100;
}
</style>
