<template>
  <div id="app">
    <p>{{ countEvery }}</p>
    <button v-on:click="plus">+</button>
    <button v-on:click="minus">-</button>
  </div>
</template>
<script>
export default {
  name: "Counter",
  props: ["index"],
  data: function() {
    return {
      countEvery: 0
    };
  },
  methods: {
    plus: function() {
      this.countEvery++;
      this.$emit("plus", this.countEvery, this.index);
    },
    minus: function() {
      this.countEvery--;
      this.$emit("minus", this.countEvery, this.index);
    }
  }
};
</script>