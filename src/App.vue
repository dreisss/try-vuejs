<script setup>
import "@picocss/pico";

import Header from "@/components/header.vue";

import { todos } from "./store";
</script>

<template>
  <Header />

  <main style="padding: 0">
    <ul v-for="todo in todos.list" :key="todo.text">
      <li style="list-style: none">
        <input v-model="todo.checked" type="checkbox" />
        <span>{{ todo.text }}</span>
      </li>
    </ul>
  </main>

  <footer>
    <progress
      :value="todos.list.filter((t) => t.checked).length"
      :max="todos.list.length"
      aria-label="Progress bar"
    ></progress>
  </footer>
</template>
