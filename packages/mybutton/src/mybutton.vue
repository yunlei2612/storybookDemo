<template>
  <button :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "DiMybutton",
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
