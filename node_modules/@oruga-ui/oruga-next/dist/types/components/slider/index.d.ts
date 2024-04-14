import type { Plugin } from "vue";
import Slider from "./Slider.vue";
import SliderTick from "./SliderTick.vue";
/** export slider specific types */
export type * from "./types";
/** export slider plugin */
declare const _default: Plugin;
export default _default;
/** export slider components */
export { Slider as OSlider, SliderTick as OSliderTick };
