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
  data: function() {
    return {
      countEvery: 0
    };
  },
  methods: {
    plus: function() {
      this.countEvery++;
      this.$store.commit("increment");
    },
    minus: function() {
      this.countEvery--;
      this.$store.commit("decrease");
    }
  },
  destroyed() {
    this.$store.state.count -= this.countEvery;
    this.countEvery = 0;
  }
};
</script>