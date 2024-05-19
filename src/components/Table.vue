<template>
	<table class="custom-table">
		<thead>
			<tr>
				<th>Token</th>
				<th>Amount</th>
				<th>TransactionTime</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item of tableList" class="text-center">
				<td>{{ item.transactionSymbol }}</td>
				<td>{{ item.amount }}</td>
				<td>{{ item.transactionTime}}</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">
const tableList = ref()
const handleGetTable = () => {
	fetch(
		'https://www.oklink.com/api/v5/explorer/address/transaction-list?chainShortName=eth&address=0x78172f781095206899cd44d38c4f99bb846fe3d5&limit=10',
		{
			method: 'GET',
			headers: {
				'Ok-Access-Key': '8eb3dd08-27ef-420f-bac9-a0b4e67f4f6c',
			},
		},
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			tableList.value = data.data[0].transactionLists
			// console.log('tableList:', tableList.value)
			tableList.value = tableList.value.map((element:any) => {
				element.transactionTime = formatTimestamp(Number(element.transactionTime));
				return element
			});
			// 在这里处理返回的数据
		})
		.catch((error) => {
			console.error('Error:', error)
		})
}
function formatTimestamp(timestamp:number) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以需要+1
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}


onMounted(() => {
	handleGetTable()
})
</script>

<style scoped>
.custom-table {
	width: 100%;
	border-collapse: collapse;
	background-color: #17171a;
	color: #686c74;
}

.custom-table th,
.custom-table td {
	border: 1px solid #333;
	padding: 12px 15px;
}

.custom-table tr {
	border-bottom: none; /* 行与行之间没有边框 */
}

.custom-table tr:hover {
	background-color: #333;
	color: #fff;
}

.custom-table th {
	background-color: #17171a;
}
</style>
