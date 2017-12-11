<script>
    /**
     * @param {String} tag - 标签元素
     * @param {String} justify - 弹性布局内部元素水平展示方式
     * @param {String} direction - 弹性布局内部元素垂直展示方式
     * @param {String} align - 弹性布局内部元素垂直展示方式
     **/
    export default {
        name: 'RkhyRow',

        componentName: 'RkRow',

        props: {
            tag: {
                type: String,
                default: 'div'
            },
            type: String,
            justify: {
                type: String,
                default: 'start'
            },
            direction: {
                type: String,
                default: 'row'
            },
            align: {
                type: String,
                default: 'start'
            }
        },

        computed: {
            /*style() {
                var ret = {};

                if (this.gutter) {
                    ret.marginLeft = `-${this.gutter / 2}px`;
                    ret.marginRight = ret.marginLeft;
                }

                return ret;
            }*/
        },

        render(h) {
            return h(this.tag, {
                class: [
                    'rkhy-row',
                    `is-justify-${this.justify}`,
                    `is-align-${this.align}`,
                    `is-direction-${this.direction}`
                ],
                //style: this.style
            }, this.$slots.default);
        }
    };
</script>
