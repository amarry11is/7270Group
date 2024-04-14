import { type PropType } from "vue";
import type { TableColumn } from "./types";
import type { ClassBind } from '../../types';
declare const _default: import("vue").DefineComponent<{
    currentSortColumn: {
        type: PropType<TableColumn>;
        default: any;
    };
    columns: {
        type: PropType<TableColumn[]>;
        default: any;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    iconPack: {
        type: StringConstructor;
        default: any;
    };
    sortIcon: {
        type: StringConstructor;
        default: string;
    };
    sortIconSize: {
        type: StringConstructor;
        default: string;
    };
    isAsc: {
        type: BooleanConstructor;
        default: boolean;
    };
    mobileSortClasses: {
        type: PropType<ClassBind[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    sort: (column: TableColumn, event: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    currentSortColumn: {
        type: PropType<TableColumn>;
        default: any;
    };
    columns: {
        type: PropType<TableColumn[]>;
        default: any;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    iconPack: {
        type: StringConstructor;
        default: any;
    };
    sortIcon: {
        type: StringConstructor;
        default: string;
    };
    sortIconSize: {
        type: StringConstructor;
        default: string;
    };
    isAsc: {
        type: BooleanConstructor;
        default: boolean;
    };
    mobileSortClasses: {
        type: PropType<ClassBind[]>;
        required: true;
    };
}>> & {
    onSort?: (column: TableColumn, event: Event) => any;
}, {
    iconPack: string;
    placeholder: string;
    currentSortColumn: TableColumn;
    columns: TableColumn[];
    sortIcon: string;
    sortIconSize: string;
    isAsc: boolean;
}, {}>;
export default _default;
