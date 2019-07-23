<template>
  <div>
    <template v-if="$store.state.counterCount">
      <div v-for="(item, index) in parseInt($store.state.counterCount)" v-bind:key="index">
        <counter></counter>
      </div>
    </template>
  </div>
</template>
<script>
import Counter from "./Counter.vue";
export default {
  components: {
    Counter
  }
};
</script>

