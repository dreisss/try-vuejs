<script setup>
import Dialog from "@/components/dialog.vue";

import { dialog, todos } from "../store";
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><strong>To-do</strong></li>
      </ul>

      <ul>
        <li>
          <button @click="dialog.open = true" class="outline">New</button>
        </li>
        <li>
          <button @click="todos.deleteChecked()" class="outline">Delete Completed</button>
        </li>
        <li>
          <button @click="todos.deleteAll()" class="outline">Delete All</button>
        </li>
      </ul>
    </nav>

    <Dialog />
  </header>
</template>
