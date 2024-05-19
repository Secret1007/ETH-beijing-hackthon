<template>
<div class="p-10 w-full h-full flex flex-col">
	<div class="flex justify-end"><LoginButton @click="connectMetaMask" class="w-40"></LoginButton></div>
	<div class=" h-full flex items-center justify-center">
		<div class="text-white text-center">
    <div class="font-bold text-5xl h-20 mb-10 hover-text">AlphaHub</div>
    <div class="text-xl hover-text">Where hunters connect, track, and earn by sharing</div>
  </div>
	</div>
</div>
</template>

<script setup lang="ts">
import Web3 from 'web3'
import { RegisteredSubscription } from 'web3/lib/commonjs/eth.exports'

const { push } = useRouter()
const web3 = ref<Web3<RegisteredSubscription>>()
const account = ref<string>()

const connectMetaMask = async () => {
	if (window.ethereum) {
		try {
			// 请求用户授权
			await window.ethereum.request({ method: 'eth_requestAccounts' })
			// 创建web3实例
			web3.value = new Web3(window.ethereum)
			// 获取用户账户
			const accounts = await web3.value.eth.getAccounts()
			account.value = accounts[0]
			localStorage.setItem('account', account.value)
			push('/user-pages')
		} catch (error) {
			console.error('User denied account access or error occurred', error)
		}
	} else {
		console.error(
			'MetaMask is not installed. Please consider installing it: https://metamask.io/download.html',
		)
	}
}
</script>

<style>
.logo {
	width: 10em;
	height: 10em;
	padding: 1.5rem;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}

.text-white {
  color: #eee;
}

.hover-text {
  transition: color 0.3s ease;
}

.hover-text:hover {
  color: #fff; /* Light gray color */
}
</style>
