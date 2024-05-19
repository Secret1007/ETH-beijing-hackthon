<template>
	<div class="flex flex-col w-full h-full">
		<div class="h-full">
			<Header></Header>
			<div class="flex items-center p-4 w-full relative ">
				<!-- 搜索框容器 -->
				<div class="relative flex-grow" style="flex-basis: 75%"	>
					<input
						type="text"
						placeholder="Search..."
						class="w-full bg-[#131313] text-white border border-gray-600 rounded px-4 py-2 pr-10"
					/>
					<svg
						class="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						@click="handleSearchAaddress"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</div>

				<!-- New Insight 按钮 -->
				<button
					class="bg-[#E4E6E7] text-black rounded px-4 py-2 flex items-center shadow-md ml-2"
				>
					<svg
						class="w-4 h-4 mr-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 4v16m8-8H4"
						></path>
					</svg>
					New Insight
				</button>
			</div>

			<Content></Content>
		</div>
	</div>
</template>

<script setup lang="ts">

const { push } = useRouter()

const handleToUserAccount = () => {
	push({path:'/user-account'})
}
const handleSearchAaddress = ()=>{
	handleToUserAccount()
}

</script>
