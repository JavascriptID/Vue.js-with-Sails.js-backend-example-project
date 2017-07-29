import Vue from 'vue'
import Vuex from 'vuex'
import {
  mount
} from 'avoriaz'
import sinon from 'sinon'
import sinonTestFactory from 'sinon-test'
import BootstrapVue from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import RegisterMixin from '@/components/Register.mixin'
import RegisterDesktop from '@/components/Register.desktop'
import faker from 'faker'

Vue.use(BootstrapVue)
Vue.use(VueI18n)
Vue.use(Vuex)

let sinonTest = sinonTestFactory(sinon)

describe('Register', () => {
  describe('Mixin', () => {
    it('should accept inputs', sinonTest(function() {
      const state = {
        User: {
          user: {
            name: '',
            password: ''
          }
        }
      }

      const mutations = {
        SET_USER_NAME(state, name) {
          state.User.user.name = name
        },

        SET_USER_PASSWORD(state, password) {
          state.User.user.password = password
        }
      }

      const store = new Vuex.Store({
        state,
        mutations
      })

      const vm = new Vue({
        store,
        mixins: [RegisterMixin]
      }).$mount()

      const name = faker.name.firstName()
      const password = faker.internet.password()

      vm.name = name
      vm.password = password

      vm.$nextTick(() => {
        expect(vm.$store.state.User.user.name).to.equal(name)
        expect(vm.$store.state.User.user.password).to.equal(password)
      })
    }))
  })
})
