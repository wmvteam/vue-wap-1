<script>

    /**
     * @param {String} tag - 标签元素
     * @param {String} flex - flex值
     **/
    export default {
        name: 'RkhyCol',

        componentName: 'RkCol',

        props: {
            tag: {
                type: String,
                default: 'div'
            },
            flex: {
                type: String,
                default:'1'
            }
        },

        computed: {
        },

        render(h) {
            return h(this.tag, {
                class: [
                    'rkhy-col'
                ],
                style:{flex:this.flex}
            }, this.$slots.default);
        }
    };
</script>

