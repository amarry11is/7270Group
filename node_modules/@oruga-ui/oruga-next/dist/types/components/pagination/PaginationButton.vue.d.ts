import { type PropType } from "vue";
import type { ClassBind, DynamicComponent } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    number: {
        type: NumberConstructor;
        default: any;
    };
    isCurrent: {
        type: BooleanConstructor;
        default: boolean;
    };
    click: {
        type: PropType<(event: Event) => void>;
        required: true;
    };
    ariaLabel: {
        type: StringConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: PropType<DynamicComponent>;
        default: DynamicComponent;
    };
    class: {
        type: StringConstructor;
        default: any;
    };
    linkClass: {
        type: PropType<ClassBind[]>;
        required: true;
    };
    linkCurrentClass: {
        type: PropType<ClassBind[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    number: {
        type: NumberConstructor;
        default: any;
    };
    isCurrent: {
        type: BooleanConstructor;
        default: boolean;
    };
    click: {
        type: PropType<(event: Event) => void>;
        required: true;
    };
    ariaLabel: {
        type: StringConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: PropType<DynamicComponent>;
        default: DynamicComponent;
    };
    class: {
        type: StringConstructor;
        default: any;
    };
    linkClass: {
        type: PropType<ClassBind[]>;
        required: true;
    };
    linkCurrentClass: {
        type: PropType<ClassBind[]>;
        required: true;
    };
}>>, {
    number: number;
    class: string;
    disabled: boolean;
    tag: any;
    ariaLabel: string;
    isCurrent: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
