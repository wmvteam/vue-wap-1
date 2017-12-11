<template>
    <div :class="['rkhy-input',
    {
      'is-disabled': disabled,
      'rkhy-input--prefix': $slots.prefix || prefixIcon,
      'rkhy-input--suffix': $slots.suffix || suffixIcon
    }
    ]">
        <input
            class="rkhy-input__inner"
            :value="currentValue"
            ref="input"
            :placeholder="placeholder"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
        >
        <!-- 前置内容 -->
        <span class="rkhy-input__prefix" v-if="$slots.prefix || prefixIcon">
        <slot name="prefix"></slot>
        <i class="rkhy-input__icon"
           v-if="prefixIcon"
           :class="prefixIcon">
        </i>
      </span>
        <!-- 后置内容 -->
        <span
            class="rkhy-input__suffix"
            v-if="$slots.suffix || suffixIcon"
            >
        <span class="rkhy-input__suffix-inner">
          <slot name="suffix"></slot>
          <i class="rkhy-input__icon"
             v-if="suffixIcon"
             :class="suffixIcon">
          </i>
        </span>
      </span>
    </div>
</template>

<script>
export default {
    name: 'RkhyInput',
    data() {
        return {
            currentValue: this.value,
        };
    },
  props: {
      value: [String, Number],
      placeholder: String,
      suffixIcon: String,
      prefixIcon: String,
      size: String,
      resize: String,
      name: String,
      form: String,
      id: String,
      maxlength: Number,
      minlength: Number,
      readonly: Boolean,
      autofocus: Boolean,
      disabled: Boolean,
      max: {},
      min: {},
      label: String
  },
    methods:{
        handleFocus(event) {
            this.$emit('focus', event);
        },
        handleInput(event) {
            const value = event.target.value;
            this.$emit('input', value);
        },
        handleBlur(event) {
            this.$emit('blur', event);
        },
    }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
