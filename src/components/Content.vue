<template>
	<!-- 内容区 -->
	<div class="flex flex-grow p-4 w-full text-white text-center h-full">
		<!-- 左侧 Swiper -->
		<div class="w-3/8 bg-#161615 rounded shadow-md overflow-hidden hfull">
			<!-- 这里可以放置 Swiper 组件 -->
			<div class="mt-2">Top-tipped Insight</div>
			<p class="text-left p-4 h-full">
				<Swiper></Swiper>
			</p>
		</div>

		<!-- 中间卡片 -->
		<div class="w-3/8 rounded shadow-md mx-4 text-left">
			<div class="h-full custom-scroll">
				<div class="text-center mt-2">Followed Hunters</div>

				<div
							class="flex items-center space-x-4 cursor-pointer"
							@click="handleToUserAccount('0x78172f781095206899cd44d38c4f99bb846fe3d5')"
						>
							<img
								:src="avatar"
								alt="avatar"
								class="w-10 h-10 rounded-full"
							/>
							<div class="text-overflow">0x78172f781095206899cd44d38c4f99bb846fe3d5</div>
						</div>
				<div class="tip1">
					<h1 class="my-4 text-2xl font-700">Weekly Trading Review and Summary</h1>

					<section class="">
						<h2>Historical Trading Review: TradingAnalysis</h2>
						<p><strong>Timeframe:</strong> May 1, 2023 - May 7, 2023</p>
						<p><strong>Trades Executed:</strong> 15</p>
						<p>
							<strong>Overall Profit:</strong>
							<span class="profit"><strong>+20%</strong></span>
						</p>
					</section>

					<section>
						<h2>Top Performing Trades:</h2>
						<ul>
							<li>
								<strong>$BTC:</strong>
								<span class="profit"><strong>+10% (Short)</strong></span>
								<strong>Details</strong>
							</li>
							<li>
								<strong>$ETH:</strong>
								<span class="profit"><strong>+15% (Long)</strong></span>
								<strong>Details</strong>
							</li>
							<li>
								<strong>$DOT:</strong>
								<span class="profit"><strong>+5% (Scalping)</strong></span>
								<strong>Details</strong>
							</li>
						</ul>
					</section>

					<section>
						<h2>Lessons Learned:</h2>
						<ul>
							<li class="lessons">
								<strong
									>Need to improve risk management on leveraged
									positions.</strong
								>
							</li>
							<li class="lessons">
								<strong
									>Monitoring market news more closely for early trend
									detection.</strong
								>
							</li>
						</ul>
					</section>

					<section>
						<h2>Conclusion:</h2>
						<p>
							<strong
								>A strong week with valuable insights gained for future
								strategies.</strong
							>
						</p>
					</section>
					<img :src="data0" alt="" />
				</div>
				<div class="tip1 mt-10">
					<h1 class=" my-4 text-2xl font-700">Antimacy’s Q2 Portfolio Performance Update</h1>

					<h2><strong>Portfolio Update: #CryptoPortfolio</strong></h2>
					<p><strong>Period:</strong> Q2 2023</p>
					<p><strong>Overall Performance:</strong> +35%</p>
					<p>
						Reflecting on this past quarter, I’ve realized how dynamic the
						crypto market can be. It’s been a whirlwind, but a rewarding one.
						Here’s a closer look at my top performers and the areas where I need
						to improve.
					</p>

					<h3><strong>Top Assets:</strong></h3>
					<ul>
						<li><strong>$BTC:</strong> +15% Transaction History</li>
						<li><strong>$ETH:</strong> +10%</li>
						<li><strong>$LINK:</strong> +5%</li>
					</ul>
					<p>
						Bitcoin and Ethereum performed well, with Bitcoin’s steady climb and
						Ethereum’s developments. LINK also outperformed my expectations.
					</p>

					<h3><strong>Underperformers:</strong></h3>
					<ul>
						<li><strong>$ADA:</strong> -5%</li>
						<li><strong>$XRP:</strong> -2%</li>
					</ul>
					<p>
						ADA and XRP didn’t hit the mark. These setbacks remind me to stay
						adaptable.
					</p>

					<h3><strong>Strategy Adjustments:</strong></h3>
					<ul>
						<li>
							Rebalancing my portfolio to increase allocation in stablecoins to
							buffer against market volatility.
						</li>
						<li>Exploring new DeFi and NFT opportunities.</li>
					</ul>

					<h3><strong>Goal for Next Quarter:</strong></h3>
					<p>
						Achieve an additional 20% growth through diversified investments.
						I’m optimistic about the next steps and excited to explore new
						sectors. Here’s to another quarter of learning, adapting, and
						growing!
					</p>
					<img :src="data" alt="" />
				</div>
			</div>
		</div>

		<!-- 右侧看板 -->
		<div class="w-1/4 flex flex-col space-y-4">
			<!-- 看板卡片1 -->
			<div class="bg-#161615 rounded shadow-md flex-1">
				<div class="space-y-4 text-left">
					<p class="text-2xl font-bold text-yellow-400">KAG</p>
					<p>
						24小时涨幅：
						<span class="text-xl text-green-300">98.8%</span>
					</p>
					<p class="text-lg text-green-300">机器人：84</p>
					<p class="text-base text-gray-400">
						0x71c7fe6ed639dfd26f04ec5f3ca3de6b81846e99
					</p>
					<p class="text-base text-gray-400">关注者：65</p>
				</div>
			</div>
			<!-- 看板卡片2 -->
			<div class="bg-#161615 rounded shadow-md flex-1">
				<div class="space-y-4 text-left">
					<p class="text-2xl font-bold text-yellow-400">TRUNK</p>
					<p class="text-xl text-blue-300">交易量：32K</p>
					<p class="text-base text-gray-400">
						0x389ced4b83210cf46d34e8ab49fddc292d492956
					</p>
					<p class="text-lg text-green-300">holders：1018</p>
				</div>
			</div>
			<!-- 看板卡片3 -->
			<div class="bg-#161615 rounded shadow-md flex-1">
				<div class="table-container">
					<table class="custom-table">
						<thead>
							<tr>
								<th>代币名称</th>
								<th>涨幅</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="token in tokens" :key="token.name">
								<td>
									<a :href="token.url" target="_blank" class="flex">
										<img :src="token.logo" alt="logo" class="logo" />
										{{ token.name }}
									</a>
								</td>
								<td class="text-green-200">{{ token.change }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import data0 from '/data0.png'
import data from '/data.png'
import avatar from '/avatar.jpg'

const tokens = [
	{
		name: 'PEPE',
		url: 'https://etherscan.io/token/0x6982508145454ce325ddbe47a25d4ec3d2311933',
		logo: '/pepe.png',
		change: '2.4%',
	},
	{
		name: 'ENA',
		url: 'https://etherscan.io/token/0x57e114b691db790c35207b2e685d4a43181e6061',
		logo: '/ena.png',
		change: '1.2%',
	},
	{
		name: 'Uni',
		url: 'https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
		logo: 'uni.png',
		change: '0.3%',
	},
]

const { push } = useRouter()

const handleToUserAccount = (walletAddress: string) => {
	push({ path: '/user-account', query: { walletAddress } })
}

</script>

<style scoped lang="scss">
.table-container {
	padding: 20px;
	background-color: #000;
}

.custom-table {
	width: 100%;
	border-collapse: collapse;
	color: #fff;
}

.custom-table th,
.custom-table td {
	padding: 10px;
	text-align: left;
}

.custom-table th {
	background-color: #333;
}

.custom-table a {
	color: #fff;
	text-decoration: none;
}

.custom-table a:hover {
	text-decoration: underline;
}

.logo {
	width: 20px;
	height: 20px;
	margin-right: 10px;
	vertical-align: middle;
}

p{
	padding: 0
}

section{
	margin-bottom: 20px
}


</style>
