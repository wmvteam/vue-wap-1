<template>
    <button
        :type="nativeType"
        class="rkhy-button"
        :class="['rkhy-button--' + type, 'rkhy-button--' + size, {
      'is-disabled': disabled,
      'is-plain': plain
    }]"
        @click="handleClick"
        :disabled="disabled">
    <span class="rkhy-button-icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <i v-if="icon" class="rkhyui" :class="'rkhyui-' + icon"></i>
      </slot>
    </span>
        <label class="rkhy-button-text"><slot></slot></label>
    </button>
</template>

<script>
    /**
     * @param {string} icon - 按钮内Icon名字（暂不可用）
     * @param {boolean} disabled - 按钮是否能点击
     * @param {string} nativeType - 原生按钮的type类型（基本没用）
     * @param {boolean} plain - 是否高亮按钮边框
     * @param {string} type - 几种按钮类型，自己试试就知道了
     * @param {string} size - 几种按钮大小，自己试试就知道了
     **/

    export default {
        name: 'RkhyButton',

        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },

        props: {
            icon: String,
            disabled: Boolean,
            nativeType: String,
            plain: Boolean,
            type: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                        'default',
                        'danger',
                        'primary'
                    ].indexOf(value) > -1;
                }
            },
            size: {
                type: String,
                default: 'normal',
                validator(value) {
                    return [
                        'small',
                        'normal',
                        'large'
                    ].indexOf(value) > -1;
                }
            }
        }
    };
</script>
