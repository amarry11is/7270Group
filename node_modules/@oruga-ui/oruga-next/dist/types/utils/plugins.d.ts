import type { App, Component, Plugin } from "vue";
export declare let VueInstance: App;
/** set the global vue instance */
export declare const setVueInstance: (Vue: App) => void;
/** register a plugin to the vue app instance */
export declare const registerPlugin: (app: App, plugin: Plugin) => void;
/** register a component to the vue app instance */
export declare const registerComponent: (app: App, component: Component) => void;
/** register a global programmatic component to the oruga object */
export declare const registerComponentProgrammatic: (app: App, property: string, component: Component) => void;
