import { reactive, watch } from "vue";

export const dialog = reactive({
  open: false,
});

export const todos = reactive({
  /**
   * @type {Array<{ text: string, checked: boolean }>}
   */
  list: JSON.parse(localStorage.getItem("todos_list")) || [],

  /**
   * @argument {string} text
   * @returns {void}
   */
  createNew(text) {
    this.list.push({ text: text, checked: false });
  },

  /**
   * @returns {void}
   */
  deleteChecked() {
    this.list = this.list.filter((t) => !t.checked);
  },

  /**
   * @returns {void}
   */
  deleteAll() {
    this.list = [];
  },
});

watch(todos.list, (newList) => {
  localStorage.setItem("todos_list", JSON.stringify(newList));
});
