import slider from './src/main.vue';

/* istanbul ignore next */
slider.install = function(Vue) {
  Vue.component(slider.name, slider);
};

export default slider;
