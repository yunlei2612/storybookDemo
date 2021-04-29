<template>
  <Page :total="total" size="small" show-elevator show-sizer></Page>
</template>

<script>
export default {
  name: "DiIviewPage",
  props: {
    total: {
      default: 0,
      type: Number , //总数
    },
  },
};
</script>

<style>
</style>
