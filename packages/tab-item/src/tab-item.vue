<template>
  <a class="rkhy-tab-item"
    @click="tabchange"
    :class="{ 'is-selected': $parent.value === id }">
    <div class="rkhy-tab-item-icon"><slot name="icon"></slot></div>
    <div class="rkhy-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>

    /**
     * @param {Boolean} id和sid对应 - 当前选中的tab的ID
     *
     * 此组件需要和tab-con,tab-con-item,tab-item一起使用，例：
     *
     <rkhy-tabbar v-model="selected">
     <rkhy-tabitem id="testest1">111111</rkhy-tabitem>
     <rkhy-tabitem id="testest2">22222</rkhy-tabitem>
     <rkhy-tabitem id="testest3">333333</rkhy-tabitem>
     </rkhy-tabbar>
     <rkhy-tabcon v-model="selected" :swipeable="true">
     <rkhy-tabconitem  :sid="'testest1'">
     sdfsdfsdf1
     </rkhy-tabconitem>
     <rkhy-tabconitem  :sid="'testest2'">
     sdfsdfsd2
     </rkhy-tabconitem>
     <rkhy-tabconitem  :sid="'testest3'">
     sdfsdfsd3
     </rkhy-tabconitem>
     </rkhy-tabcon>
     **/

export default {
  name: 'RkhyTabitem',
  props: ['id'],
    created(){
        //console.log(this)
    },
    methods:{
        tabchange(){
            this.$parent.$emit('input',this.id)
        }
    }
};
</script>
