import { defineStore } from 'pinia'

export const globalStore = defineStore('global', {
  state: () => ({
    count: 0,
    showMenu: true
  }),
  getters: {
    getCount: state => state.count,
    getShowMenu: state => state.showMenu
  },
  actions: {
    resetCount () {
      this.count = 0
    },
    addCount () {
      this.count += 1
    },
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    setShowMenu (bool: boolean) {
      this.showMenu = bool
    }
  }
})
