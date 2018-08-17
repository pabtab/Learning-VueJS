<template>
  <div>
    <h1 v-text="amountVar"></h1>
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button>
  </div>
</template>

<script>
  export default {
    methods: {
      increase() {
        this.$store.state.amount++;
      },

      decrease() {
        this.$store.state.amount--;
      }
    },
    computed: {
      amountVar() {
        return this.$store.state.amount;
      }
    }
  };
  
</script>