<template>
	<header class="h-40 text-white p-4 flex justify-between items-center">
		<!-- Logo -->
		<div class="flex items-center">
			<img :src="avatar" alt="avatar" class="w-20 h-20 rounded-full mr-3" />
			<div>
				<div class="text-overflow">
					{{ formatAddress(address) }}
				</div>
				<div><span class="profit text-2xl">$+316.5k</span></div>
			</div>
		</div>

		<div class="relative">
			<div class="flex items-center space-x-4">
				<div class="flex flex-col items-end">
					<div class="text-sm">Daily Tips Balance： <span>100 / 200</span></div>
					<div class="text-sm">Tips Received： <span>1,000</span></div>
				</div>
				<div class="relative account-wrapper">
					<button
						class="mt-2 text-base bg-#D4D8DA text-#000 rounded px-6 py-4 flex justify-between items-center cursor-pointer shadow-md"
						@click="handleOpen"
						v-if="role"
					>
						Clain onchains Tips reward
					</button>
					<button
						class="mt-2 text-base bg-#D4D8DA text-#000 rounded px-6 py-4 flex justify-between items-center cursor-pointer shadow-md"
						@click="handleOpen"
						v-else
					>
						Track
					</button>
				</div>
			</div>
		</div>
	</header>

	<TokenDialog
		:dialog-visible="dialogVisible"
		@handle-close="handleClose"
	></TokenDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import avatar from '/avatar.jpg'
import { formatAddress } from '~/utils'

defineProps({
	role: String,
	address: {
		type: String,
		default: '',
	},
})

// 声明一个 ref 变量来保存钱包地址和下拉框的显示状态
const walletAddress = ref('')
const dialogVisible = ref(false)

walletAddress.value = localStorage.getItem('account') || ''

// 定义显示下拉框的方法
const handleOpen = () => {
	dialogVisible.value = true
}

// 定义隐藏下拉框的方法
const handleClose = () => {
	dialogVisible.value = false
}

// 定义断开钱包的方法
const disconnectWallet = () => {
	if (window.ethereum && window.ethereum.selectedAddress) {
		window.ethereum.selectedAddress = null
		console.log('Disconnected from MetaMask')
	} else {
		console.log('No wallet is connected')
	}

	// 跳转回首页
	window.location.href = '/'
}
</script>

<style scoped lang="scss">
.show-on-hover {
	display: none;

	.account-wrapper:hover & {
		position: absolute;
		display: block;
	}
}
</style>
