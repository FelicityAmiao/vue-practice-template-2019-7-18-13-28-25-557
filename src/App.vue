<template>
  <div id="app">
    <input-bar></input-bar>
    <counter-group></counter-group>
    <counter-sum></counter-sum>
  </div>
</template>

<script>
import CounterGroup from "./components/CounterGroup.vue";
import InputBar from "./components/InputBar.vue";
import CounterSum from "./components/CounterSum.vue";
export default {
  name: "app",
  components: {
    CounterGroup,
    InputBar,
    CounterSum
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
