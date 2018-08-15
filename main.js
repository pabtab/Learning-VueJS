const bridge = new Vue()


Vue.component('pablo-component', {
  props: ['people'],
  template: '#parent',
  methods: {
    chooseWinner() {
      let peopleAmount = this.peopleList.length;
      let index = Math.floor((Math.random() * peopleAmount));
      bridge.$emit('winner-comp', this.people[index]);
    }
  },
  data() {
    return {
      peopleList: this.people
    }
  }
})

Vue.component('pablo-child-comp', {
  template: `
          <div> <h2>{{name}}</h2></div>
        `,
  data() {
    return {
      name: ''
    }
  },
  created() {
    bridge.$on('winner-comp', winnerGuy => {
      this.name = winnerGuy;
    });
  },
})

const app = new Vue({
  el: '#app1',
  data: {
    personas: ['Goku', 'Gohan', 'Picoro', 'Vegeta', 'Zeno Sama', 'Bills', 'Jiren']
  }
})
