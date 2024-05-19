<template>
<el-card class="box-card dashboard-card	custom-scroll">
	<div class="h-8	0 text-#686C74">
	<div class=" mb-4" v-for="item of balanceList" :key="item" >
		<div class="flex justify-between">
			<span>Token Amount：</span>
			<span class="text-#fff text-base">{{item.holdingAmount}}</span>
		</div>
		<div @click="handleToContractAddres(item.tokenContractAddress)" class="cursor-pointer">
			<span>Token Address：</span>
			<span>{{item.tokenContractAddress}}</span>
		</div>
	</div>
</div>
</el-card>
</template>

<script setup lang="ts">

const balanceList = ref()
const handleGetAccountsBalance = ()=>{
	fetch('https://www.oklink.com/api/v5/explorer/address/token-balance-multi?chainShortName=eth&address=0x78172f781095206899cd44d38c4f99bb846fe3d5', {
      method: 'GET',
      headers: {
        'Ok-Access-Key': '8eb3dd08-27ef-420f-bac9-a0b4e67f4f6c'
      }
    })
    .then(response => response.json())
    .then(data => {
      balanceList.value = data.data[0].balanceList.slice(0,4); // 假设返回的数据结构中包含一个 data 数组
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

const handleToContractAddres = (tokenContractAddress:string)=>{
	window.open(`https://etherscan.io/address/${tokenContractAddress}`)
}
onMounted(()=>{
	handleGetAccountsBalance()
})

</script>

<style scoped>
.dashboard-card {
  padding: 16px;
	background-color: #1A1A1A;
	border:0
}
</style>
