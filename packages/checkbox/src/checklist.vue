<template>
  <div @change="$emit('change', currentValue)" class="rkhy-checklist" :class="{ 'is-limit': max <= currentValue.length }">
    <label class="rkhy-checklist-title" v-text="title"></label>
    <x-cell v-for="(option,index) in options" :key="index">
      <label class="rkhy-checklist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="rkhy-checkbox">
          <input
            class="rkhy-checkbox-input"
            type="checkbox"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="rkhy-checkbox-core"></span>
        </span>
        <span v-if="option.label" class="rkhy-checkbox-label">{{option.label || option}}</span>
          <!--<span class="rkhy-checkbox-con" v-if="$slots.ckeckcon">
              <slot name="ckeckcon">
                  <div></div>
              </slot>
          </span>-->
      </label>

    </x-cell>
  </div>
</template>

<script>

    /**
     * @param {Number} max - 最多可以选中的复选框数量
     * @param {String} title - 复选框集合上面的标题
     * @param {String} align - 复选框在cell里面的位置，一般就用左边left或者右边right
     * @param {Array} options - 复选框的具体信息 例子：[{label:'斯蒂芬',value: '值F',disabled: true},{label:'斯蒂芬',value: '选中禁用的值',disabled: true}]
     * @param {Array} value - 选中的值的数据，这个会发送到父组件的v-model的值里
     **/

import XCell from '~/cell/index.js';
export default {
  name: 'RkhyChecklist',

  props: {
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: Array
  },

  components: { XCell },

  data() {
    return {
      currentValue: this.value
    };
  },

  computed: {
    limit() {
      return this.max < this.currentValue.length;
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
        console.log(val)
      if (this.limit) val.pop();
      this.$emit('input', val);
    }
  }
};
</script>
