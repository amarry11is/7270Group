import type { Plugin } from "vue";
import Sidebar from "./Sidebar.vue";
import SidebarProgrammatic from "./SidebarProgrammatic";
/** export sidebar specific types */
export type { SidebarProps } from "./types";
/** export sidebar plugin */
declare const _default: Plugin;
export default _default;
/** export sidebar components */
export { SidebarProgrammatic, Sidebar as OSidebar };
