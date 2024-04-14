import type { Plugin } from "vue";
import Loading from "./Loading.vue";
import LoadingProgrammatic from "./LoadingProgrammatic";
/** export loading specific types */
export type { LoadingProps } from "./types";
/** export loading plugin */
declare const _default: Plugin;
export default _default;
/** export loading components */
export { LoadingProgrammatic, Loading as OLoading };
