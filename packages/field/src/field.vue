<template>
  <x-cell
    class="rkhy-field"
    :title="label"
    v-clickoutside="doCloseActive"
    :class="[{
      'is-textarea': type === 'textarea',
      'is-nolabel': !label
    }]">
    <textarea
      @change="$emit('change', currentValue)"
      ref="textarea"
      class="rkhy-field-core"
      :placeholder="placeholder"
      v-if="type === 'textarea'"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      v-model="currentValue">
    </textarea>
    <input
      @change="$emit('change', currentValue)"
      ref="input"
      class="rkhy-field-core"
      :placeholder="placeholder"
      :number="type === 'number'"
      v-else
      :type="type"
      @focus="active = true"
      :disabled="disabled"
      :readonly="readonly"
      :value="currentValue"
      @input="handleInput">
    <div
      @click="handleClear"
      class="rkhy-field-clear"
      v-if="!disableClear"
      v-show="currentValue && type !== 'textarea' && active">
      <i class="rkhyui rkhyui-field-error"></i>
    </div>
    <span class="rkhy-field-state" v-if="state" :class="['is-' + state]">
      <i class="rkhyui" :class="['rkhyui-field-' + state]"></i>
    </span>
    <div class="rkhy-field-other">
      <slot></slot>
    </div>
  </x-cell>
</template>

<script>
import XCell from '~/cell/index.js';
import Clickoutside from '~/utils/clickoutside';

/**
 * @param {string} type - 类型就两种text,textarea
 * @param {String} rows - textarea能输入的行数
 * @param {String} label - 输入框前面的名字
 * @param {String} placeholder - 默认显示的字
 * @param {Boolean} readonly - 是否只读
 * @param {Boolean} disabled - 输入框是否植灰
 * @param {Boolean} disableClear - 是否能一键清空
 * @param {String} state - 表单校验状态样式，接受 error, warning, success
 * @param {String} value - 输入框的值，这个会发送到父组件的v-model的值里
 * @param {String} attr - 给输入框设置原生的一些属性 例：:attr="{ maxlength: 10 }"
 **/

export default {
  name: 'RkhyField',

  data() {
    return {
      active: false,
      currentValue: this.value
    };
  },

  directives: {
    Clickoutside
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    rows: String,
    label: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    disableClear: Boolean,
    state: {
      type: String,
      default: 'default'
    },
    value: {},
    attr: Object
  },

  components: { XCell },

  methods: {
    doCloseActive() {
      this.active = false;
    },

    handleInput(evt) {
      this.currentValue = evt.target.value;
    },

    handleClear() {
      if (this.disabled || this.readonly) return;
      this.currentValue = '';
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit('input', val);
    },

    attr: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const target = [this.$refs.input, this.$refs.textarea];
          target.forEach(el => {
            if (!el || !attrs) return;
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
          });
        });
      }
    }
  }
};
</script>
