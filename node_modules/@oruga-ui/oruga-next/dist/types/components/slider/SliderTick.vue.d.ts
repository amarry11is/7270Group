import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Value of single tick */
    value: {
        type: NumberConstructor;
        required: true;
    };
    /** Tick label */
    label: {
        type: StringConstructor;
        default: any;
    };
    tickClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when slider tick is hidden */
    tickHiddenClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of tick label */
    tickLabelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Value of single tick */
    value: {
        type: NumberConstructor;
        required: true;
    };
    /** Tick label */
    label: {
        type: StringConstructor;
        default: any;
    };
    tickClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when slider tick is hidden */
    tickHiddenClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of tick label */
    tickLabelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>>, {
    label: string;
    override: boolean;
    tickClass: ComponentClass;
    tickHiddenClass: ComponentClass;
    tickLabelClass: ComponentClass;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
