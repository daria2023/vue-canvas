import { defineStore } from 'pinia'

export const useStore = defineStore('config', {
  state: () => {
    return {
      color: '#000',
      width: 1,
    }
  },
  actions: {
    setColor(value) {
      this.color = value;
    },
    setWidth(num) {
      this.width = num;
    },
  }
})