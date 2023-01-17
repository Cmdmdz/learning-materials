<template>

    <a-row :gutter="60">
      <div style="padding: 20px">
      <a-card hoverable style="width: 300px; padding: 20px">
        <template #cover>
          <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template #actions>

          <edit-outlined key="edit" @click="$router.push('/seqStudy')" />
        </template>
        <a-card-meta style="margin-left: auto" title="การเรียนการสอน" >
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-card-meta>
      </a-card>
      </div>

      <div style="padding: 20px">
      <a-card hoverable style="width: 300px; padding: 20px">
        <template #cover>
          <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template #actions>
<!--          <edit-outlined key="edit" />-->
          <form-outlined key="edit" @click="$router.push('/boardGame')"  />
        </template>
        <a-card-meta title="เกมวัดผล">
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-card-meta>
      </a-card>
      </div>
    </a-row>

</template>

<script lang="ts" >
import { SettingOutlined, EditOutlined, EllipsisOutlined,FormOutlined } from '@ant-design/icons-vue';

export default {
  name: "main",
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    FormOutlined
  },
}
</script>

<style scoped>

</style>
