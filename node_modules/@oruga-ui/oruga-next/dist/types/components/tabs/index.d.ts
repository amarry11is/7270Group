import type { Plugin } from "vue";
import Tabs from "./Tabs.vue";
import TabItem from "./TabItem.vue";
/** export tabs specific types */
export type * from "./types";
/** export tabs plugin */
declare const _default: Plugin;
export default _default;
/** export tabs components */
export { Tabs as OTabs, TabItem as OTabItem };
