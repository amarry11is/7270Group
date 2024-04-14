import type { Plugin } from "vue";
import Steps from "./Steps.vue";
import StepItem from "./StepItem.vue";
/** export steps specific types */
export type * from "./types";
/** export steps plugin */
declare const _default: Plugin;
export default _default;
/** export steps components */
export { Steps as OSteps, StepItem as OStepItem };
