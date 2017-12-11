<template>
  <i class="rkhy-icon" :class='`rkhy-icon-${name}`'></i>
</template>

<script>
    /**
     * @param {string} name - icon的名字
     **/
export default {
  name: 'RkhyIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
