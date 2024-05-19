<template>
  <el-card class="box-card dashboard-card">
    <div class="dashboard-item">
      <span class="text-muted">Profit in the Last 30 Days</span>
    </div>
    <div class="dashboard-item">
      <span class="profit">$+116.5k</span>
    </div>
    <div class="dashboard-item flex justify-between">
      <span class="text-muted">Last Active</span>
      <span class="text-muted">3 days ago</span>
    </div>
  </el-card>
</template>

<script setup lang="ts">

</script>

<style scoped>
.dashboard-card {
  padding: 16px;
	background-color: #1A1A1A;
	border:0
}

.dashboard-item {
  margin-bottom: 8px;
	margin-top: 24px;
}

.text-muted {
  color: #686C74;
  font-size: 14px;
}

.profit {
  color: #83CE8E;
  font-size: 24px;
  font-weight: bold;
}

.growth {
  background-color: rgba(131, 206, 142, 0.5);
  font-size: 20px;
  padding: 2px 8px;
  border-radius: 4px;
}
</style>
