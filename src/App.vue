<template>
  <div id="app">
    Input a number:
    <input type="text" v-model="counterCount" />
    <template v-if="counterCount">
      <div v-for="(item, index) in parseInt(counterCount)" v-bind:key="index">
        <counter></counter>
      </div>
    </template>
    Total Sum:{{$store.state.count}}
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
export default {
  name: "app",
  data: function() {
    return {
      counterCount: 3,
    };
  },
  components: {
    Counter
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
