<template>
    <h1>{{ getName }}</h1>
</template>

<script>
import {mapState} from 'vuex';

export default {
  computed: mapState({
    getName: state => state.name
  })
  /* computed: {
    getName() {
      return this.$store.state.name
    }
  } */
};
</script>
