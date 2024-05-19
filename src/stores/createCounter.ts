import { defineStore } from 'pinia'

export default defineStore('counter', {
	state() {
		return {
			count: 0,
			remainBalance:200
		}
	},
	actions: {
		inc() {
			this.count++
		},

		updateBalance(remain:number){
			this.remainBalance = remain
		}
	},
	persist: true,
})
