const bridge = new Vue()

Vue.component('search-input', {
  props: ['searchValue'],
  template: `
    <input type="search" :value="searchValue" @input="search($event.target.value)" placeholder="Search"/>
  `,
  methods: {
    search(searchValue) {
      this.$emit('input', searchValue)
    }
  }
})

Vue.component('list-users', {
  template: '#parent',
  mounted() {
    axios.get('https://randomuser.me/api/?results=50')
    .then((result) => {
      this.users = result.data.results.map(user => {
        return {
          name: user.name.first,
          email: user.email,
          pic: user.picture.medium
        }
      })
    }).catch((err) => {
      
    });
  },
  data() {
    return {
      users: [],
      searchValue: ''
    }
  },
  computed: {
    filteredValues() {

      return this.users.filter( val => {
        return val.name.includes(this.searchValue)
      })
    }
  }
})

Vue.component('card-user', {
  props: ['user'],
  template: `
          <li>
            <img :src="user.pic" :alt="user.name"/>
            {{user.name}}
          </li>
        `
})

const app = new Vue({
  el: '#app1'
})
