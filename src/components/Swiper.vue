<template>
	<div class="swiper-container">
		<el-carousel :interval="5000" arrow="always" class="h-130">
			<el-carousel-item v-for="(card, index) in cards" :key="index">
				<div class="card">
					<!-- 卡片头部 -->
					<div class="card-header flex justify-between items-center mb-4">
						<div
							class="flex items-center space-x-4 cursor-pointer"
							@click="handleToUserAccount(card.walletAddress)"
						>
							<img
								:src="card.avatar"
								alt="avatar"
								class="w-16 h-16 rounded-full"
							/>
							<div>
								<div class="text-overflow">
									{{ formatAddress(card.walletAddress) }}
								</div>
								<div><span class="profit">$+116.5k</span></div>
							</div>
						</div>
						<el-button size="small">Track</el-button>
					</div>

					<!-- 文本内容区 -->
					<div
						class="card-content flex-grow mb-4 overflow-scroll custom-scroll"
					>
						<!-- <p v-html="card.content"></p> -->
						<h1 class="my-4 text-2xl font-700">
							Deep Dive into $AlphaToken Project
						</h1>
						<p>
							I've been diving deep into <strong>#AlphaToken</strong>, a
							promising DeFi project offering high-yield liquidity mining. Here
							are the core features:
						</p>
						<ul>
							<li>
								<strong>Decentralized Exchange (DEX):</strong> Efficient trading
								platform.
							</li>
							<li><strong>Liquidity Mining:</strong> Attractive yields.</li>
							<li>
								<strong>Cross-Chain Interoperability:</strong> Connecting
								different blockchains.
							</li>
						</ul>
						<h2>Project Highlights:</h2>
						<ul>
							<li>Partnerships with top blockchain projects.</li>
							<li>Experienced development team.</li>
							<li>Multiple security audits passed.</li>
						</ul>
						<h2>Personal Insight:</h2>
						<p>
							AlphaToken's solid fundamentals and ambitious roadmap caught my
							eye. Their cross-chain interoperability is a potential
							game-changer. With recent partnerships and security audits, I feel
							confident in their vision. The current price looks like a great
							opportunity given the anticipated growth next quarter. Definitely
							a project to watch.
						</p>
						<p>Learn More: Link</p>
					</div>
					<!-- 打赏按钮 -->
				</div>
			</el-carousel-item>
		</el-carousel>
		<div class="flex justify-between">
			     
			<el-button size="small" class="donate-button" @click="handleOpen">
				        <span class="border border-white px-2 py-1">A</span>        
				<span class="mx-2">1000</span>      
			</el-button>
			     
			<img :src="collect" alt="avatar" class="w-8 h-8 rounded-full mr-3" />

			   
		</div>
		<RewardDialog
			:dialog-visible="dialogueVisible"
			@handleClose="handleClose"
		></RewardDialog>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import 'element-plus/dist/index.css'
import { ElCarousel, ElCarouselItem, ElButton } from 'element-plus'
import collect from '/collect.png'
import { formatAddress } from '@/utils'

// 定义 swiper 卡片数据
const cards = ref([
	{
		avatar: './avatar.jpg',
		walletAddress: '0x78172f781095206899cd44d38c4f99bb846fe3d5',
		content: ` <h1>Deep Dive into $AlphaToken Project</h1>
    <p>I've been diving deep into <strong>#AlphaToken</strong>, a promising DeFi project offering high-yield liquidity mining. Here are the core features:</p >
    <ul>
        <li><strong>Decentralized Exchange (DEX):</strong> Efficient trading platform.</li>
        <li><strong>Liquidity Mining:</strong> Attractive yields.</li>
        <li><strong>Cross-Chain Interoperability:</strong> Connecting different blockchains.</li>
    </ul>
    <h2>Project Highlights:</h2>
    <ul>
        <li>Partnerships with top blockchain projects.</li>
        <li>Experienced development team.</li>
        <li>Multiple security audits passed.</li>
    </ul>
    <h2>Personal Insight:</h2>
    <p>AlphaToken's solid fundamentals and ambitious roadmap caught my eye. Their cross-chain interoperability is a potential game-changer. With recent partnerships and security audits, I feel confident in their vision. The current price looks like a great opportunity given the anticipated growth next quarter. Definitely a project to watch.</p >
    <p>Learn More: Link</p >`,
	},
	{
		avatar: './avatar.jpg',
		walletAddress: '0x78172f781095206899cd44d38c4f99bb846fe3d5',
		content: 'Card 2 Content',
	},
])

const { push } = useRouter()

const handleToUserAccount = (walletAddress: string) => {
	push({ path: '/user-account', query: { walletAddress } })
}

const dialogueVisible = ref(false)

const handleOpen = () => {
	dialogueVisible.value = true
}

const handleClose = () => {
	dialogueVisible.value = false
}
</script>

<style scoped>
.swiper-container {
	width: 100%;
	height: 100%;
}

.card {
	border-radius: 8px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
	padding: 16px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 90%;
}

.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.card-content {
	flex-grow: 1;
	margin-bottom: 16px;
}

.donate-button {
	display: flex;
	align-items: center;
	width: 100px;
	height: 40px;
	background-color: transparent;
	color: #fff;
	float: right;
}

:deep(.el-carousel__container) {
	height: 100%;
}

p {
	padding: 0;
}

section {
	margin-bottom: 20px;
}

.profit {
	color: #83ce8e;
	font-size: 16px;
	font-weight: bold;
}
</style>
