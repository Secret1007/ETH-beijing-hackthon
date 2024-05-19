<template>
	<div class="my-dialog">
		<el-dialog
			v-model="curVisible"
			:show-close="false"
			title="Tips"
			width="500"
		>
			<div class="text-center text-#fff">
				<div class="text-#ABABAA">tip for this Insight</div>

				<div class="my-10 text-base">
					You tip <input type="text" v-model="amount" class="h-12 w-24 bg-transparent border text-center"> AH points
				</div>

				<div class="text-xs">
					remaining tips balance for today:{{ remain }}
				</div>
			</div>
			<template #footer>
				<div class="dialog-footer flex justify-center">
					<el-button @click="handleConfirm" class="bg-#C8D1D6 w-72 mt-3">
						Confirm
					</el-button>
				</div>
			</template>
		</el-dialog>
	</div>
</template>

<script setup lang="ts">
import createCounter from '@/stores/createCounter'

const props = defineProps({
	dialogVisible: {
		type: Boolean,
		default: false,
	},
})

const curVisible = ref(false)

watch(
	() => props.dialogVisible,
	(val) => {
		curVisible.value = val
	},
	{
		immediate: true,
	},
)

interface IEmit {
	(e: 'handleClose', arg: boolean): void
}

const emit = defineEmits<IEmit>()
const handleClose = () => {
	emit('handleClose', false)
}
const amount = ref(null)
const remain = ref(200)
const counter = createCounter()
const handleConfirm = () => {
	curVisible.value = false
	if(amount.value){
		remain.value = 200 - amount.value
		counter.updateBalance(remain.value)
	}
}
</script>

<style scoped lang="scss">
.my-dialog {
	:deep(.el-dialog) {
		background: #171717 !important;
	}
}
</style>
