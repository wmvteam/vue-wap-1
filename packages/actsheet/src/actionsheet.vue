<template>
  <transition name="actionsheet-float">
    <div v-show="currentValue" class="rkhy-actionsheet">
      <ul class="rkhy-actionsheet-list" :style="{ 'margin-bottom': cancelText ? '5px' : '0' }">
        <li v-for="( item, index ) in actions" class="rkhy-actionsheet-listitem" :key="index" @click.stop="itemClick(item, index)">{{ item.name }}</li>
      </ul>
      <a class="rkhy-actionsheet-button" @click.stop="currentValue = false" v-if="cancelText">{{ cancelText }}</a>
    </div>
  </transition>
</template>



<script type="text/babel">
    /**
     * @param {boolean} modal - 是否显示遮罩层
     * @param {boolean} modalFade - 遮罩层显示是否要动画
     * @param {boolean} lockScroll - 是否要锁定滚动条
     * @param {boolean} closeOnClickModal - 是否点击遮罩层关闭弹框
     * @param {string} cancelText - 关闭按钮的文字
     * @param {Array} actions - 弹框里的列表内容 例：[{'name':'test'},{'name':'test2'}]
     **/
  import Popup from '~/utils/popup';

  export default {
    name: 'RkhyActsheet',
    mixins: [Popup],
    props: {
      modal: {
        default: true
      },

      modalFade: {
        default: false
      },

      lockScroll: {
        default: false
      },

      closeOnClickModal: {
        default: true
      },

      cancelText: {
        type: String,
        default: '取消'
      },

      actions: {
        type: Array,
        default: () => []
      }
    },

    data() {
      return {
        currentValue: false
      };
    },

    watch: {
      currentValue(val) {
        this.$emit('input', val);
      },

      value(val) {
        this.currentValue = val;
      }
    },

    methods: {
      itemClick(item, index) {
        if (item.method && typeof item.method === 'function') {
          item.method(item, index);
        }
        this.currentValue = false;
      }
    },

    mounted() {
      if (this.value) {
        this.rendered = true;
        this.currentValue = true;
        this.open();
      }
    }
  };
</script>
