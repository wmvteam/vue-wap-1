<template>
  <a class="rkhy-cell" :href="href">
    <span class="rkhy-cell-mask" v-if="isLink"></span>
    <div class="rkhy-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="rkhy-cell-wrapper">
      <div class="rkhy-cell-title">
        <slot name="icon">
          <i v-if="icon" class="mintui" :class="'rkhyui-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="rkhy-cell-text">{{title}}</span>
          <span v-if="label" class="rkhy-cell-label">{{label}}</span>
        </slot>
      </div>
      <div class="rkhy-cell-value" :class="{ 'is-link' : isLink }">
         <slot name="value"></slot>
        <slot>
          <span>{{value}}</span>
        </slot>
      </div>
      <i v-if="isLink" class="rkhy-cell-allow-right"></i>
    </div>
    <div class="rkhy-cell-right">
      <slot name="right"></slot>
    </div>
  </a>
</template>

<script>
    /**
     * @param {string,object} to - 跳转路由可以是链接地址xxx.com或者是组件路由地址{path:'/router'}
     * @param {String} icon - 图标名称(暂不可用)
     * @param {String} title - 主标题，可以用具名slot自定义覆盖
     * @param {String} label - 紧跟主标题后面的字，可以用具名slot自定义覆盖
     * @param {Boolean} isLink - 是否是链接
     * @param {string} value - 在最后面的字，可以用具名slot自定义覆盖
     **/
export default {
  name: 'RkhyCell',

  props: {
    to: [String, Object],
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },

  computed: {
    href() {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;

        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick);
        });
        return resolved.fullPath || resolved.path;
      }
      return this.to;
    }
  },

  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
};
</script>
