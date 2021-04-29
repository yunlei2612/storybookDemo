<template>
  <button :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "di-button",
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style>
</style>
