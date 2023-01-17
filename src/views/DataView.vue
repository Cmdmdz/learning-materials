<template>
  <a-table :columns="columns" :data-source="data">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span>
          <smile-outlined/>
          วันที่
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical"/>
          <a>Delete</a>
          <a-divider type="vertical"/>
          <a class="ant-dropdown-link">
            More actions
            <down-outlined/>
          </a>
        </span>
      </template>
    </template>
  </a-table>
</template>

<script lang="js">
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';

const columns = [
  {
    name: 'วันที่',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'ชื่อ-นามสกุล',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'บทเรียนพยัญชนะ',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'บทเรียนอักษร 3 หมู่',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'จัดการข้อมูล',
    key: 'action',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  name: "DataView",
  components: {
    SmileOutlined,
    DownOutlined,
  },
  setup() {
    return {
      data,
      columns,
    };
  },
}
</script>

<style scoped>

</style>
