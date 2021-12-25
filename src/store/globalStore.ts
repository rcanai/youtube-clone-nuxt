import { defineStore } from 'pinia'

export const globalStore = defineStore("global", {
  state: () => ({
    count: 0
  }),
  getters: {
    getCount: (state) => state.count
  },
  actions: {
    resetCount() {
      this.count = 0
    },
    addCount() {
      this.count += 1
    }  
  }
})