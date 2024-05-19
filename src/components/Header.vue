<template>
	<header
		class="bg-#1A1A1A text-white p-4 flex justify-between items-center "
	>
		<!-- Logo -->
		<div class="text-2xl font-bold">Alphahub</div>

		<div class="relative" >
			<div class="flex items-center space-x-4">
				<div class="flex flex-col items-end">
					<div class="text-sm">Daily Tips Balance： <span>{{ counter.remainBalance }} / 200</span></div>
					<div class="text-sm">Tips Received： <span>1,000</span></div>
				</div>
				<!-- <div class="flex flex-col items-end">
					<div class="text-sm">Daily Tips Balance： <span>100 / 200</span></div>
					<div class="text-sm">Tips Received： <span>1,000</span></div>
				</div> -->
				<div class="relative account-wrapper" >
					<button
						class="mt-2 text-sm bg-#2E2E31 text-white rounded px-4 py-2 w-48 flex justify-between items-center cursor-pointer shadow-md"
						@mouseenter="showDropdown"
					>
						<img :src="avatar" alt="avatar" class="w-8 h-8 rounded-full mr-3" />
						<span class="text-overflow">
							{{ walletAddress }}
						</span>
						<svg
							class="ml-2 w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							></path>
						</svg>
					</button>
					<div
						class="show-on-hover top-12 right-0 mt-2 w-48 bg-#2E2E31 text-black rounded shadow-lg z-50 text-white"
					>
						<div class="px-4 py-2 text-light-900 hover:text-white cursor-pointer" @click="handleToUserAccount">
							My Profile
						</div>
						<div
							class="px-4 py-2 text-light-900 hover:text-white cursor-pointer"
							@click="disconnectWallet"
						>
							Disconnect
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import avatar from '/avatar.jpg'
import createCounter from '@/stores/createCounter'

// 声明一个 ref 变量来保存钱包地址和下拉框的显示状态
const walletAddress = ref('')
const dropdownVisible = ref(false)

walletAddress.value = localStorage.getItem('account') || ''

// 定义显示下拉框的方法
const showDropdown = () => {
	dropdownVisible.value = true
}

// 定义隐藏下拉框的方法
const hideDropdown = () => {
	dropdownVisible.value = false
}

// 定义断开钱包的方法
const disconnectWallet = () => {
  if (window.ethereum && window.ethereum.selectedAddress) {
    window.ethereum.selectedAddress = null;
    console.log('Disconnected from MetaMask');
  } else {
    console.log('No wallet is connected');
  }

	// 跳转回首页
	window.location.href = '/'
}

const counter = createCounter()

const { push } = useRouter()

const handleToUserAccount = () => {
	push({path:'/user-account',query:{role:'my'}})
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
