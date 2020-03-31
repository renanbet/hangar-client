import AuthMixin from '@/shared/mixins/auth.mixin'

export default {
  name: 'login',
  components: {},
  mixins: [
    AuthMixin
  ],
  props: [],
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {

  },
  mounted () {
    this.removeUser()
    this.username = 'user'
  },
  methods: {
    login () {
      let user = {
        name: this.username,
        role: this.username,
        fullName: this.username
      }
      user.menu = [
        {
          icon: 'dashboard',
          title: 'Tiger',
          src: 'https://www.pexels.com/search/tiger'
        },
        {
          icon: 'shopping_cart',
          title: 'Lion',
          src: 'https://www.pexels.com/search/lion'
        }
      ]
      this.saveUser(user)
      let home = this.username === 'admin' ? '/admin' : '/reports'
      
      this.$router.push(home)
    }
  }
}
