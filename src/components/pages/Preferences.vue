<template>
  <form @submit.prevent="save">
    <Header>
      <h1 class="text-l font-medium italic leading-7 tracking-wide text-gray-100 truncate">Preferences</h1>

      <template v-slot:controls>
        <Button type="submit">
          <IconSave width="18" class="mr-1.5" /> Save
        </Button>
      </template>
    </Header>

    <div class="p-3">
      <InputGroup label="Personal Token">
        <InputText v-model="token" add-on="pk_" />

        <!-- Help text -->
        <span class="mt-2 text-sm text-gray-500 flex">
          <IconQuestionmark width="18" class="mr-1.5" />

          <button
            type="button"
            class="text-blue-500"
            v-on:click="require('electron').shell.openExternal('https://jsapi.apiary.io/apis/clickup20/introduction/authentication.html')"
          >
            Here's how to obtain a personal API token
          </button>
        </span>
      </InputGroup>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Header from "./../layout/Header";
import InputGroup from "./../input/Group";
import InputText from "./../input/Text";
import Button from "./../input/Button";

import IconQuestionmark from "./../icons/Questionmark";
import IconSave from "./../icons/Save";

export default {
  name: "Preferences",
  components: {
    Header,
    InputGroup,
    InputText,
    Button,
    IconQuestionmark,
    IconSave,
  },

  data: () => ({
    token: "",
  }),

  mounted() {
    this.token = this.preferences.api_token;
  },

  methods: {
    save() {
      this.setToken(this.token);
      this.$router.push({ name: 'tracking' })
    },

    ...mapActions(["setToken"]),
  },

  computed: mapState(["preferences"]),
};
</script>
