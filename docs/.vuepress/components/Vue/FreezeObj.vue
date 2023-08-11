<template>
  <div class="FreezeObj">
    <div class="action">
      <button @click="loadFreezeData">冻结对象</button>
      <button @click="loadNormalData">正常对象</button>
    </div>
    <!-- 内容显示 -->
    <div class="content">
      <h4 class="freeze_obj">冻结对象数据条数:{{ freezeData.length }}</h4>
      <h4 class="normal_obj">正常获取数据条数:{{ normalData.length }}</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FreezeObj',
  data() {
    return {
      freezeData: [],
      normalData: []
    }
  },
  methods: {
    // 加载冻结对象数据
    loadFreezeData() {
      this.freezeData = Object.freeze(this.getDataList())
      console.log('加载冻结对象数据', this.freezeData)
    },
    // 加载正常数据
    async loadNormalData() {
      const res = confirm('如果你的电脑性能不是太好,点击"确定"按钮可能会造成浏览器奔溃!')
      if (res) {
        this.freezeData = this.getDataList()
        console.log('加载正常数据', this.freezeData)
      }
    },
    getDataList() {
      const dataList = []
      for (let index = 0; index < 1000000; index++) {
        dataList.push({
          id: index,
          name: `name${index}`,
          address: {
            city: `city${index}`,
            province: `province${index}`
          }
        })
      }
      return dataList
    }
  }
}
</script>
<style lang="scss" scoped>
.FreezeObj {
  padding-top: 20px;
  .action {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  .content {
    .freeze_obj {
      color: blue;
    }
    .normal_obj {
      color: red;
    }
  }
}
</style>
