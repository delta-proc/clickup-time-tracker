<template>
    <div>
      <Header>
        <MainNavigation />

        <template v-slot:controls>
          <router-link class="p-1" to="preferences">
            <IconCog width="20" class="text-white" />
          </router-link>
        </template>
      </Header>

      <Bordered class="flex flex-col items-center justify-center">
        <h2 class="text-xl text-gray-600">You aren't tracking any tasks</h2>
        <router-link to="tasks" class="text-sm text-blue-500">Show all tasks assigned to you</router-link>
      </Bordered>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import MainNavigation from "./../layout/MainNavigation";
import Header from "./../layout/Header";
import Bordered from "./../layout/Bordered";
import IconCog from "./../icons/Cog";

export default {
  name: "Tracking",
  components: {
    MainNavigation,
    Header,
    Bordered,
    IconCog
  },

  methods: {
    ...mapActions(["setToken"]),
  },

  computed: mapState(["preferences"]),
};
</script>
