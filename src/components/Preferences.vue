<template>

  <form @submit.prevent="save">

    <Header title="Preferences">
      <Button type="submit">
        <IconSave width="18" class="mr-1.5" />
        Save
      </Button>
    </Header>

    <div class="p-3">
      <InputGroup label="Personal Token">
        <InputText v-model="token" add-on="pk_" />

        <span class="mt-2 text-sm text-gray-500 flex">
          <IconQuestionmark width="18" class="mr-1.5" />

          <button
            v-on:click="
              require('electron').shell.openExternal(
                'https://jsapi.apiary.io/apis/clickup20/introduction/authentication.html'
              )
            "
            type="button"
            class="text-blue-500"
          >
            Here's how to obtain a personal API token
          </button>
        </span>
      </InputGroup>
    </div>

  </form>
</template>

<script>
import Header from "./layout/Header";
import InputGroup from "./input/Group";
import InputText from "./input/Text";
import Button from "./input/Button";

import IconQuestionmark from "./icons/Questionmark";
import IconSave from "./icons/Save";

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

  methods: {
    save() {
      alert(this.token);
    },
  },
};
</script>
