<template>
    <div class="test">
        <!--<rkhy-slider  v-model="value1" :step="10" showStops></rkhy-slider>
        <rkhy-icon name="date"></rkhy-icon>
        <rkhy-input class="test-input"  placeholder="请输入内容">
            <rkhy-icon slot="suffix" name="date"></rkhy-icon>
            <i class="test-i" slot="prefix"></i>
        </rkhy-input>
        <rkhy-row justify="start">
            <rkhy-col flex="2" class="testll">
                <rkhy-slider  v-model="value2" :step="10" showStops></rkhy-slider>
            </rkhy-col>
            <rkhy-col>111</rkhy-col>
        </rkhy-row>-->
        <!--<rkhy-cell>
            <label class="rkhy-checklist-label" slot="title">
        <span class="rkhy-checkbox">
          <input
              class="rkhy-checkbox-input"
              type="checkbox"
              v-model="value5"
              value="1"
          >
          <span class="rkhy-checkbox-core"></span>
        </span>
                <div>
                    sdfsdfdsf
                </div>
            </label>

        </rkhy-cell>
        <div>{{value4}}</div>
        <div>{{value3}}</div>
        <rkhy-actsheet :actions="actions" v-model="sheetVisible">

        </rkhy-actsheet>
        <rkhy-checklist :options="opt" v-model="value3">
            &lt;!&ndash;<div slot="ckeckcon">tetetsdfds</div>&ndash;&gt;
        </rkhy-checklist>
        <rkhy-loadmore :top-method="loadTop" ref="loadmore" :bottom-all-loaded="true">
            <ul>
                <li v-for="item in items">{{ item }}</li>
            </ul>
        </rkhy-loadmore>
        <rkhy-navbar v-model="selected">
            <rkhy-tabitem id="testest1">111111</rkhy-tabitem>
            <rkhy-tabitem id="testest2">22222</rkhy-tabitem>
            <rkhy-tabitem id="testest3">333333</rkhy-tabitem>
        </rkhy-navbar>
        <rkhy-button size="small" type="default">按钮</rkhy-button>
        <rkhy-tabcon v-model="selected" :swipeable="true">
            <rkhy-tabconitem  :sid="'testest1'">
                <rkhy-cell title="标题文字">
                    <rkhy-button size="small"  slot="value" type="default">按钮11</rkhy-button>
                </rkhy-cell>
                <rkhy-cell title="标题文字">

                </rkhy-cell>
            </rkhy-tabconitem>
            <rkhy-tabconitem  :sid="'testest2'">
                sdfsdfsd2
            </rkhy-tabconitem>
            <rkhy-tabconitem  :sid="'testest3'">
                sdfsdfsd3
            </rkhy-tabconitem>
        </rkhy-tabcon>
        <rkhy-field  label="username" placeholder="Input username"></rkhy-field>
        <rkhy-picker :slots="slots" v-model="PickerVisible"  @change="onValuesChange"></rkhy-picker>-->
        <rkhy-picker :slots="slots"  @change="getSlotValue1"></rkhy-picker>
        <rkhy-button @click="openPicker">11111</rkhy-button>
        <rkhy-field  label="username" placeholder="Input username" :disableClear="true"></rkhy-field>
        <span>{{pickerValue}}</span>
        <!--<rkhy-dpicker ref="picker" type="datetime" v-model="pickerValue" :visibleItemCount="5"></rkhy-dpicker>-->

        <rkhy-navbar v-model="selected">
            <rkhy-tabitem id="testest1">111111</rkhy-tabitem>
            <rkhy-tabitem id="testest2">22222</rkhy-tabitem>
            <rkhy-tabitem id="testest3">333333</rkhy-tabitem>
        </rkhy-navbar>

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

        <!--<rkhy-row>
            <rkhy-col>
                <rkhy-button @click="testest(1)">111</rkhy-button>
            </rkhy-col>
            <rkhy-col>
                <rkhy-button @click="testest(2)">222</rkhy-button>
            </rkhy-col>
            <rkhy-col>
                <rkhy-button @click="testest(3)">333</rkhy-button>
            </rkhy-col>
        </rkhy-row>
        <rkhy-tabcon v-model="active">
            <rkhy-tabconitem  id="tab-container1">
                sdfsdfsd1
            </rkhy-tabconitem>
            <rkhy-tabconitem  id="tab-container2">
                sdfsdfsd2
            </rkhy-tabconitem>
            <rkhy-tabconitem  id="tab-container3">
                sdfsdfsd3
            </rkhy-tabconitem>
        </rkhy-tabcon>-->
        <!--<div class="div1">
            <test-child :level="3">Hello world!</test-child>
        </div>
        <div class="testtest">
            1122
        </div>-->
        <rkhy-button :plain="false">测试</rkhy-button>
    </div>
</template>

<script>
import TestChild from './component/TestChild.vue'
export default {
    name:'test',
    data(){
        return{
            pickerValue:'',
            selected:'testest3',
            slots: [
                {
                    flex: 1,
                    values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot1',
                    textAlign: 'right'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot3',
                    textAlign: 'left'
                }
            ],
            /*dialogFormVisible:true,
            value1:0,
            cselected:[],
            sheetVisible:false,
            value2:0,
            value3:[],
            value4:[],
            value5:[],
            selected:'testest3',
            active:'tab-container1',
            pickerValue:'',
            PickerVisible:true,
            items:[1,2,3,4,5,6,7],
            opt:[
                    {
                        label:'斯蒂芬',
                        value: '值F',
                        disabled: true
                    },
                    {
                        label:'斯蒂芬',
                        value: '选中禁用的值',
                        disabled: true
                    },
                    {
                        label:'斯蒂芬',
                        value: '值A'
                    },
                    {
                        label:'斯蒂芬',
                        value: '值B'
                    }
                ],
            actions:[{'name':'test'},{'name':'test2'}],
            slots: [
                {
                    flex: 1,
                    values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot1',
                    textAlign: 'right'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot3',
                    textAlign: 'left'
                }
            ]*/
        }
    },
    watch:{
    },
    components: {
        TestChild
    },
    mounted(){
        /*this.$messagebox.confirm('确定执行此操作?').then(action => {
            console.log(action)
        });*/
        //this.$messagebox('提示', '操作成功');
    },
    computed:{

    },
    created () {

    },
    methods:{
        openPicker(){
            this.$refs.picker.open()
        },
        getSlotValue1(v,val){
            console.log(v.getSlotValues(0))
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
@import '../../assets/css/rem';
@import '../../assets/css/vars';
.test-i{
    display: block;
    width: rem(30);
    height:rem(30);
    background: #000;
}
    .test-input{
        width: rem(300);
    }
    .testll{
        margin-left: rem(20);
    }
</style>
