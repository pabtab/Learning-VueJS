Vue.component('pablo-component', {
  props: ['people'],
  template: '#slots',
  methods: {
    chooseWinner() {
      let peopleAmount = this.peopleList.length;
      let index = Math.floor((Math.random() * peopleAmount));
      this.winner = this.people[index - 1];
    }
  },
  data() {
    return {
      winner: false,
      peopleList: this.people
    }
  }
})

const app = new Vue({
  el: '#app1',
  data: {
    personas: ['Goku', 'Gohan', 'Picoro', 'Vegeta', 'Zeno Sama', 'Bills', 'Jiren']
  }
})
