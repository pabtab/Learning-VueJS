Vue.component('pablo-component', {
  props: ['people'],
  template: `<div>
              <h1 v-if="winner">The winner is: {{winner}}</h1>
              <template v-else>
                <h1>Users List</h1>
                <ul>
                  <li v-for="person in peopleList">{{ person }}</li>
                </ul>
              </template>
              <button @click="chooseWinner">Choose Winner</button>
            </div>`,
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
