import type { Plugin } from "vue";
import Table from "./Table.vue";
import TableColumn from "./TableColumn.vue";
/** export table specific types */
export type { Column } from "./types";
/** export table plugin */
declare const _default: Plugin;
export default _default;
/** export table components */
export { Table as OTable, TableColumn as OTableColumn };
