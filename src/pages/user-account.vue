<template>
	<div class="flex flex-col w-full">
		<!-- <Header></Header> -->
		<div class="account-container  w-full">
			<div class="px-10">
				<MyAccount :role="role" :address="address"></MyAccount>
			</div>
			<!-- 上半部分 -->
			<div class="top-section">
				<div class="left-section">
					<!-- 左边上半部分：看板 -->
					<div class="dashboard">
						<Dashboard></Dashboard>
					</div>
					<!-- 左边下半部分：列表 -->
					<div class="list">
						<TokenList></TokenList>
					</div>
				</div>
				<!-- 右边部分：卡片 -->
				<div class="right-section">
					<el-card class="box-card">
						<div class="h-80 custom-scroll text-#fff">
							<h1 my-4 text-2xl font-700>
								Antimacy’s Q2 Portfolio Performance Update
							</h1>

							<h2><strong>Portfolio Update: #CryptoPortfolio</strong></h2>
							<p><strong>Period:</strong> Q2 2023</p>
							<p><strong>Overall Performance:</strong> +35%</p>
							<p>
								Reflecting on this past quarter, I’ve realized how dynamic the
								crypto market can be. It’s been a whirlwind, but a rewarding
								one. Here’s a closer look at my top performers and the areas
								where I need to improve.
							</p>

							<h3><strong>Top Assets:</strong></h3>
							<ul>
								<li><strong>$BTC:</strong> +15% Transaction History</li>
								<li><strong>$ETH:</strong> +10%</li>
								<li><strong>$LINK:</strong> +5%</li>
							</ul>
							<p>
								Bitcoin and Ethereum performed well, with Bitcoin’s steady climb
								and Ethereum’s developments. LINK also outperformed my
								expectations.
							</p>

							<h3><strong>Underperformers:</strong></h3>
							<ul>
								<li><strong>$ADA:</strong> -5%</li>
								<li><strong>$XRP:</strong> -2%</li>
							</ul>
							<p>
								ADA and XRP didn’t hit the mark. These setbacks remind me to
								stay adaptable.
							</p>

							<h3><strong>Strategy Adjustments:</strong></h3>
							<ul>
								<li>
									Rebalancing my portfolio to increase allocation in stablecoins
									to buffer against market volatility.
								</li>
								<li>Exploring new DeFi and NFT opportunities.</li>
							</ul>

							<h3><strong>Goal for Next Quarter:</strong></h3>
							<p>
								Achieve an additional 20% growth through diversified
								investments. I’m optimistic about the next steps and excited to
								explore new sectors. Here’s to another quarter of learning,
								adapting, and growing!
							</p>
						</div>
						<div>
							<img :src="data" alt="" />
						</div>
					</el-card>
				</div>
			</div>
			<!-- 下半部分：表格 -->
			<div class="bottom-section">
				<el-card class="box-card">
					<Table></Table>
				</el-card>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import data from '/data.png';

const route = useRoute()

const role = route.query.role ?? ''

const address = route.query.walletAddress ?? ''


</script>

<style scoped lang="scss">
.account-container {
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
}

.top-section {
	display: flex;
	flex: 1;
	padding: 16px;
}

.left-section {
	flex: 2;
	display: flex;
	flex-direction: column;
}

.dashboard {
	flex: 1;
	margin-bottom: 16px;
}

.list {
	flex: 2;
}

.right-section {
	flex: 4;
	padding-left: 16px;
}

.bottom-section {
	flex: 1;
	padding: 16px;
}

.box-card {
	background-color: #17171a;
	border: 0;
	height: 100%;
}
p {
	padding: 0;
}

section {
	margin-bottom: 20px;
}
</style>
