<template>
  <el-tag :type="type">标签一</el-tag>
</template>

<script>
export default {
  name: "DiEleTag",
  props: {
    type: {
      default: "",
      type: String,
    },
  },
};
</script>

<style>
</style>
