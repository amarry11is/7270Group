import type { PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    current: {
        type: NumberConstructor;
        default: any;
    };
    paginated: {
        type: BooleanConstructor;
        default: boolean;
    };
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:current": (value: number) => void;
    change: (event: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    current: {
        type: NumberConstructor;
        default: any;
    };
    paginated: {
        type: BooleanConstructor;
        default: boolean;
    };
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onChange?: (event: number) => any;
    "onUpdate:current"?: (value: number) => any;
}, {
    rootClass: ComponentClass;
    current: number;
    paginated: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
