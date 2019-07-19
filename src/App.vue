<template>
  <div id="app">
    <p>{{ count }}</p>
    <button v-on:click="plus">点我+</button>
    <button v-on:click="minus">点我-</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
    plus: function () {
      this.count++;
    },
    minus: function() {
      this.count--;
    }
  },
  components: {
    // HelloWorld
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
