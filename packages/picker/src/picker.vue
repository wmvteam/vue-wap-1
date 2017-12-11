<template>
  <div class="picker" :class="{ 'picker-3d': rotateEffect }">
    <div class="picker-toolbar" v-if="showToolbar"><slot></slot></div>
    <div class="picker-items">
      <picker-slot v-for="(slot,index) in slots" :key="index" :valueKey="valueKey" :values="slot.values || []" :text-align="slot.textAlign || 'center'" :visible-item-count="visibleItemCount" :class-name="slot.className" :flex="slot.flex" v-model="values[slot.valueIndex]" :rotate-effect="rotateEffect" :divider="slot.divider" :content="slot.content" :itemHeight="itemHeight" :default-index="slot.defaultIndex"></picker-slot>
      <div class="picker-center-highlight" :style="{ height: itemHeight + 'px', marginTop: -itemHeight / 2 + 'px' }"></div>
    </div>
  </div>
</template>

<script type="text/babel">

    /**
     * @param {Array} slots - 弹框里的内容 例：slots: [{flex: 1,values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],className: 'slot1',textAlign: 'right'}]
     * @param {boolean} showToolbar - 工具条是否显示
     * @param {Number} visibleItemCount - 弹框里能展示出的条数
     * @param {String} valueKey - 当 values 为对象数组时，作为文本显示在 Picker 中的对应字段的字段名
     * @param {Boolean} rotateEffect - 是否有角度特效
     * @param {Number} itemHeight - 每个一条数据的高度
     *
     * picker实例注册的方法
     *   getSlotValue(index)：获取给定 slot 目前被选中的值
         setSlotValue(index, value)：设定给定 slot 被选中的值，该值必须存在于该 slot 的备选值数组中
         getSlotValues(index)：获取给定 slot 的备选值数组
         setSlotValues(index, values)：设定给定 slot 的备选值数组
         getValues()：获取所有 slot 目前被选中的值（分隔符 slot 除外）
         setValues(values)：设定所有 slot 被选中的值（分隔符 slot 除外），该值必须存在于对应 slot 的备选值数组中
     **/

  export default {
    name: 'RkhyPicker',

    componentName: 'picker',

    props: {
      slots: {
        type: Array
      },
      showToolbar: {
        type: Boolean,
        default: false
      },
      visibleItemCount: {
        type: Number,
        default: 5
      },
      valueKey: String,
      rotateEffect: {
        type: Boolean,
        default: false
      },
      itemHeight: {
        type: Number,
        default: 36
      }
    },

    created() {
      this.$on('slotValueChange', this.slotValueChange);
      var slots = this.slots || [];
      this.values = [];
      var values = this.values;
      var valueIndexCount = 0;
      slots.forEach(slot => {
        if (!slot.divider) {
          slot.valueIndex = valueIndexCount++;
          values[slot.valueIndex] = (slot.values || [])[slot.defaultIndex || 0];
          this.slotValueChange();
        }
      });
    },

    methods: {
      slotValueChange() {
        this.$emit('change', this, this.values);
      },

      getSlot(slotIndex) {
        var slots = this.slots || [];
        var count = 0;
        var target;
        var children = this.$children.filter(child => child.$options.name === 'picker-slot');

        slots.forEach(function(slot, index) {
          if (!slot.divider) {
            if (slotIndex === count) {
              target = children[index];
            }
            count++;
          }
        });

        return target;
      },
      getSlotValue(index) {
        var slot = this.getSlot(index);
        if (slot) {
          return slot.value;
        }
        return null;
      },
      setSlotValue(index, value) {
        var slot = this.getSlot(index);
        if (slot) {
          slot.currentValue = value;
        }
      },
      getSlotValues(index) {
        var slot = this.getSlot(index);
        if (slot) {
            console.log(1122,slot)
          return slot.mutatingValues;
        }
        return null;
      },
      setSlotValues(index, values) {
        var slot = this.getSlot(index);
        if (slot) {
          slot.mutatingValues = values;
        }
      },
      getValues() {
        return this.values;
      },
      setValues(values) {
        var slotCount = this.slotCount;
        values = values || [];
        if (slotCount !== values.length) {
          throw new Error('values length is not equal slot count.');
        }
        values.forEach((value, index) => {
          this.setSlotValue(index, value);
        });
      }
    },

    computed: {
      values: {
        get() {
          var slots = this.slots || [];
          var values = [];
          slots.forEach(function(slot) {
            if (!slot.divider) values.push(slot.value);
          });

          return values;
        },
        set(values) {
          var slots = this.slots || [];
          var valueIndexCount = 0;
          slots.forEach(function(slot) {
            if (!slot.divider) {
              slots.value = values[valueIndexCount];
              valueIndexCount = valueIndexCount + 1;
            }
          });
        }
      },
      slotCount() {
        var slots = this.slots || [];
        var result = 0;
        slots.forEach(function(slot) {
          if (!slot.divider) result++;
        });
        return result;
      }
    },
    components: {
      PickerSlot: require('./picker-slot.vue')
    }
  };
</script>
