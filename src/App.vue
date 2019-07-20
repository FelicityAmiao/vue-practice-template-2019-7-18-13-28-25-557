<template>
  <div id="app">
    <counter v-on:plus="handlePlus" v-on:minus="handleMinus"></counter>

    From Child:{{sum}}
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
export default {
  name: 'app',
  data: function() {
    return {
      sum: 0,
      counterCount: 3
    }
  },
  methods: {
    handlePlus: function(countEvery) {
      this.sum = countEvery;
    },
    handleMinus: function(countEvery) {
      this.sum = countEvery;
    }
  },
  components: {
    Counter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
