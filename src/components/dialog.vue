<script setup>
import { ref } from "vue";
import { dialog, todos } from "../store";

let text = ref("");
</script>

<template>
  <dialog :open="dialog.open">
    <form
      @submit.prevent="
        todos.createNew(text);
        dialog.open = false;
        text = '';
      "
    >
      <article>
        <header>
          <div @click="dialog.open = false" role="link" class="close" aria-label="Close" tabindex="0"></div>
          <strong>New To-do</strong>
        </header>

        <div>
          <label>To-do text:</label>
          <input v-model="text" type="text" aria-label="To-do text" required />
        </div>

        <footer>
          <button class="outline">Confirm</button>
        </footer>
      </article>
    </form>
  </dialog>
</template>
