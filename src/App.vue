<template>
  <div id="app">
    Input a number:
    <input type="text" v-model="counterCount" v-bind:onchange="changeCounterCount()"/>
    <div v-for="(item, index) in parseInt(counterCount)" v-bind:key="index">
      <counter v-bind:index="index" v-on:plus="acceptEveryCountAndcalculateSum" v-on:minus="acceptEveryCountAndcalculateSum"></counter>
    </div>
    Total Sum:{{sum}}
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
export default {
  name: "app",
  data: function() {
    return {
      sum: 0,
      counterCount: 3,
      counterArray: []
    };
  },
  methods: {
    changeCounterCount: function() {
      if(this.counterArray.length !== 0) {
        this.counterArray.length = parseInt(this.counterCount);
        this.calculateSum();
      }
    },
    acceptEveryCountAndcalculateSum: function(countEvery, index) {
      this.counterArray[index] = countEvery;
      this.calculateSum();
    },
    calculateSum: function() {
      this.sum = this.counterArray.reduce((a, b) => a+b);
    }
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
