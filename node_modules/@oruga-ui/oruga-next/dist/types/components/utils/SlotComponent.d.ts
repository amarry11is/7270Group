import type { DefineComponent, PropType } from "vue";
import type { DynamicComponent } from '../../types';
/** This components renders a specific slot and only the slot of another component */
declare const _default: DefineComponent<{
    /** Component to be get the slot from */
    component: {
        type: ObjectConstructor;
        required: true;
    };
    /** Slot name */
    name: {
        type: StringConstructor;
        default: string;
    };
    /** Props passed to the slot */
    props: {
        type: ObjectConstructor;
        default: () => void;
    };
    /** Tag name of the slot wrapper element */
    tag: {
        type: PropType<DynamicComponent>;
        default: DynamicComponent;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Component to be get the slot from */
    component: {
        type: ObjectConstructor;
        required: true;
    };
    /** Slot name */
    name: {
        type: StringConstructor;
        default: string;
    };
    /** Props passed to the slot */
    props: {
        type: ObjectConstructor;
        default: () => void;
    };
    /** Tag name of the slot wrapper element */
    tag: {
        type: PropType<DynamicComponent>;
        default: DynamicComponent;
    };
}>>, {
    props: Record<string, any>;
    name: string;
    tag: any;
}, {}>;
export default _default;
