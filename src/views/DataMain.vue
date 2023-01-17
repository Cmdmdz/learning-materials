<template>
  <a-card hoverable style="width: 50%; height: auto">
    <a-row :gutter="60">
        <div style="padding: 20px; width: 100%">
          <h2>
            ฝึกอ่านออกเสียงพยัญชนะ
          </h2>
          <a-progress
              :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
              :percent="99.9"
          />
        </div>

        <div style="padding: 20px; width: 100%">
          <h2>
            ฝึกเขียนพยัญชนะ
          </h2>
          <a-progress
              :stroke-color="{
        from: '#108ee9',
        to: '#87d068',
      }"
              :percent="50"
              status="active"
          />
        </div>

      <div style="padding: 20px; width: 100%">
        <h2>
          ฝึกอ่านออกเสียงสระ
        </h2>
        <a-progress
            :stroke-color="{
        from: '#108ee9',
        to: '#87d068',
      }"
            :percent="50"
            status="active"
        />
      </div>

      <div style="padding: 20px; width: 100%">
        <h2>
          ฝึกเขียนสละ
        </h2>
        <a-progress
            :stroke-color="{
        from: '#108ee9',
        to: '#87d068',
      }"
            :percent="50"
            status="active"
        />
      </div>

    </a-row>

  </a-card>
</template>

<script>
export default {
  name: "DataMain"
}
</script>

<style scoped>

</style>
