import { type PropType } from "vue";
import type { ClassBind } from '../../types';
declare function setPosition(percent: number): void;
declare const _default: import("vue").DefineComponent<{
    /** parent slider component props  */
    sliderProps: {
        type: PropType<NonNullable<Partial<{
            size: string;
            override: boolean;
            modelValue: number | number[];
            variant: string;
            rootClass: import('../../types').ComponentClass;
            rounded: boolean;
            disabled: boolean;
            disabledClass: import('../../types').ComponentClass;
            sizeClass: import('../../types').ComponentClass;
            variantClass: import('../../types').ComponentClass;
            min: number;
            max: number;
            step: number;
            locale: string | string[];
            ariaLabel: string | string[];
            tooltip: boolean;
            ticks: boolean;
            tooltipVariant: string;
            tooltipAlways: boolean;
            lazy: boolean;
            customFormatter: Function;
            biggerSliderFocus: boolean;
            indicator: boolean;
            format: string;
            trackClass: import('../../types').ComponentClass;
            fillClass: import('../../types').ComponentClass;
            thumbRoundedClass: import('../../types').ComponentClass;
            thumbDraggingClass: import('../../types').ComponentClass;
            thumbWrapperClass: import('../../types').ComponentClass;
            thumbClass: import('../../types').ComponentClass;
            tickClass: import('../../types').ComponentClass;
            tickHiddenClass: import('../../types').ComponentClass;
            tickLabelClass: import('../../types').ComponentClass;
            thumbWrapperDraggingClass: import('../../types').ComponentClass;
        }> & Omit<{
            readonly size: string;
            readonly modelValue: number | number[];
            readonly variant: string;
            readonly rounded: boolean;
            readonly disabled: boolean;
            readonly min: number;
            readonly max: number;
            readonly step: number;
            readonly locale: string | string[];
            readonly ariaLabel: string | string[];
            readonly tooltip: boolean;
            readonly ticks: boolean;
            readonly tooltipVariant: string;
            readonly tooltipAlways: boolean;
            readonly lazy: boolean;
            readonly biggerSliderFocus: boolean;
            readonly indicator: boolean;
            readonly format: string;
            readonly override?: boolean;
            readonly rootClass?: import('../../types').ComponentClass;
            readonly disabledClass?: import('../../types').ComponentClass;
            readonly sizeClass?: import('../../types').ComponentClass;
            readonly variantClass?: import('../../types').ComponentClass;
            readonly customFormatter?: Function;
            readonly trackClass?: import('../../types').ComponentClass;
            readonly fillClass?: import('../../types').ComponentClass;
            readonly thumbRoundedClass?: import('../../types').ComponentClass;
            readonly thumbDraggingClass?: import('../../types').ComponentClass;
            readonly thumbWrapperClass?: import('../../types').ComponentClass;
            readonly thumbClass?: import('../../types').ComponentClass;
            readonly tickClass?: import('../../types').ComponentClass;
            readonly tickHiddenClass?: import('../../types').ComponentClass;
            readonly tickLabelClass?: import('../../types').ComponentClass;
            readonly thumbWrapperDraggingClass?: import('../../types').ComponentClass;
            onChange?: (value: number | number[]) => any;
            onDragend?: () => any;
            onDragstart?: () => any;
            "onUpdate:modelValue"?: (value: number | number[]) => any;
            onDragging?: (value: number | number[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            override: {
                type: BooleanConstructor;
                default: any;
            };
            modelValue: {
                type: PropType<number | number[]>;
                default: number;
            };
            min: {
                type: NumberConstructor;
                default: number;
            };
            max: {
                type: NumberConstructor;
                default: number;
            };
            step: {
                type: NumberConstructor;
                default: number;
            };
            variant: {
                type: StringConstructor;
                default: () => unknown;
            };
            size: {
                type: StringConstructor;
                default: () => unknown;
            };
            ticks: {
                type: BooleanConstructor;
                default: boolean;
            };
            tooltip: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            tooltipVariant: {
                type: StringConstructor;
                default: () => unknown;
            };
            tooltipAlways: {
                type: BooleanConstructor;
                default: boolean;
            };
            rounded: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            lazy: {
                type: BooleanConstructor;
                default: boolean;
            };
            customFormatter: {
                type: FunctionConstructor;
                default: any;
            };
            biggerSliderFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            indicator: {
                type: BooleanConstructor;
                default: boolean;
            };
            format: {
                type: StringConstructor;
                default: () => string;
                validator: (value: string) => boolean;
            };
            locale: {
                type: PropType<string | string[]>;
                default: () => unknown;
            };
            ariaLabel: {
                type: PropType<string | string[]>;
                default: () => unknown;
            };
            rootClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            sizeClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            trackClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            fillClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            thumbRoundedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            thumbDraggingClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            disabledClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            thumbWrapperClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            thumbClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            variantClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tickClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tickHiddenClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tickLabelClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            thumbWrapperDraggingClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
        }>> & {
            onChange?: (value: number | number[]) => any;
            onDragend?: () => any;
            onDragstart?: () => any;
            "onUpdate:modelValue"?: (value: number | number[]) => any;
            onDragging?: (value: number | number[]) => any;
        }, "size" | "override" | "modelValue" | "variant" | "rootClass" | "rounded" | "disabled" | "disabledClass" | "sizeClass" | "variantClass" | "min" | "max" | "step" | "locale" | "ariaLabel" | "tooltip" | "ticks" | "tooltipVariant" | "tooltipAlways" | "lazy" | "customFormatter" | "biggerSliderFocus" | "indicator" | "format" | "trackClass" | "fillClass" | "thumbRoundedClass" | "thumbDraggingClass" | "thumbWrapperClass" | "thumbClass" | "tickClass" | "tickHiddenClass" | "tickLabelClass" | "thumbWrapperDraggingClass">>>;
        required: true;
    };
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    sliderSize: {
        type: PropType<() => number>;
        required: true;
    };
    thumbWrapperClasses: {
        type: PropType<ClassBind[]>;
        required: true;
    };
    thumbClasses: {
        type: PropType<ClassBind[]>;
        required: true;
    };
}, {
    setPosition: typeof setPosition;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number | number[]) => void;
    change: () => void;
    dragstart: () => void;
    dragend: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** parent slider component props  */
    sliderProps: {
        type: PropType<NonNullable<Partial<{
            size: string;
            override: boolean;
            modelValue: number | number[];
            variant: string;
            rootClass: import('../../types').ComponentClass;
            rounded: boolean;
            disabled: boolean;
            disabledClass: import('../../types').ComponentClass;
            sizeClass: import('../../types').ComponentClass;
            variantClass: import('../../types').ComponentClass;
            min: number;
            max: number;
            step: number;
            locale: string | string[];
            ariaLabel: string | string[];
            tooltip: boolean;
            ticks: boolean;
            tooltipVariant: string;
            tooltipAlways: boolean;
            lazy: boolean;
            customFormatter: Function;
            biggerSliderFocus: boolean;
            indicator: boolean;
            format: string;
            trackClass: import('../../types').ComponentClass;
            fillClass: import('../../types').ComponentClass;
            thumbRoundedClass: import('../../types').ComponentClass;
            thumbDraggingClass: import('../../types').ComponentClass;
            thumbWrapperClass: import('../../types').ComponentClass;
            thumbClass: import('../../types').ComponentClass;
            tickClass: import('../../types').ComponentClass;
            tickHiddenClass: import('../../types').ComponentClass;
            tickLabelClass: import('../../types').ComponentClass;
            thumbWrapperDraggingClass: import('../../types').ComponentClass;
        }> & Omit<{
            readonly size: string;
            readonly modelValue: number | number[];
            readonly variant: string;
            readonly rounded: boolean;
            readonly disabled: boolean;
            readonly min: number;
            readonly max: number;
            readonly step: number;
            readonly locale: string | string[];
            readonly ariaLabel: string | string[];
            readonly tooltip: boolean;
            readonly ticks: boolean;
            readonly tooltipVariant: string;
            readonly tooltipAlways: boolean;
            readonly lazy: boolean;
            readonly biggerSliderFocus: boolean;
            readonly indicator: boolean;
            readonly format: string;
            readonly override?: boolean;
            readonly rootClass?: import('../../types').ComponentClass;
            readonly disabledClass?: import('../../types').ComponentClass;
            readonly sizeClass?: import('../../types').ComponentClass;
            readonly variantClass?: import('../../types').ComponentClass;
            readonly customFormatter?: Function;
            readonly trackClass?: import('../../types').ComponentClass;
            readonly fillClass?: import('../../types').ComponentClass;
            readonly thumbRoundedClass?: import('../../types').ComponentClass;
            readonly thumbDraggingClass?: import('../../types').ComponentClass;
            readonly thumbWrapperClass?: import('../../types').ComponentClass;
            readonly thumbClass?: import('../../types').ComponentClass;
            readonly tickClass?: import('../../types').ComponentClass;
            readonly tickHiddenClass?: import('../../types').ComponentClass;
            readonly tickLabelClass?: import('../../types').ComponentClass;
            readonly thumbWrapperDraggingClass?: import('../../types').ComponentClass;
            onChange?: (value: number | number[]) => any;
            onDragend?: () => any;
            onDragstart?: () => any;
            "onUpdate:modelValue"?: (value: number | number[]) => any;
            onDragging?: (value: number | number[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            override: {
                type: BooleanConstructor;
                default: any;
            };
            modelValue: {
                type: PropType<number | number[]>;
                default: number;
            };
            min: {
                type: NumberConstructor;
                default: number;
            };
            max: {
                type: NumberConstructor;
                default: number;
            };
            step: {
                type: NumberConstructor;
                default: number;
            };
            variant: {
                type: StringConstructor;
                default: () => unknown;
            };
            size: {
                type: StringConstructor;
                default: () => unknown;
            };
            ticks: {
                type: BooleanConstructor;
                default: boolean;
            };
            tooltip: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            tooltipVariant: {
                type: StringConstructor;
                default: () => unknown;
            };
            tooltipAlways: {
                type: BooleanConstructor;
                default: boolean;
            };
            rounded: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            lazy: {
                type: BooleanConstructor;
                default: boolean;
            };
            customFormatter: {
                type: FunctionConstructor;
                default: any;
            };
            biggerSliderFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            indicator: {
                type: BooleanConstructor;
                default: boolean;
            };
            format: {
                type: StringConstructor;
                default: () => string;
                validator: (value: string) => boolean;
            };
            locale: {
                type: PropType<string | string[]>;
                default: () => unknown;
            };
            ariaLabel: {
                type: PropType<string | string[]>;
                default: () => unknown;
            };
            rootClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            sizeClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            trackClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            fillClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            thumbRoundedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            thumbDraggingClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            disabledClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            thumbWrapperClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            thumbClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            variantClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tickClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tickHiddenClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tickLabelClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            thumbWrapperDraggingClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
        }>> & {
            onChange?: (value: number | number[]) => any;
            onDragend?: () => any;
            onDragstart?: () => any;
            "onUpdate:modelValue"?: (value: number | number[]) => any;
            onDragging?: (value: number | number[]) => any;
        }, "size" | "override" | "modelValue" | "variant" | "rootClass" | "rounded" | "disabled" | "disabledClass" | "sizeClass" | "variantClass" | "min" | "max" | "step" | "locale" | "ariaLabel" | "tooltip" | "ticks" | "tooltipVariant" | "tooltipAlways" | "lazy" | "customFormatter" | "biggerSliderFocus" | "indicator" | "format" | "trackClass" | "fillClass" | "thumbRoundedClass" | "thumbDraggingClass" | "thumbWrapperClass" | "thumbClass" | "tickClass" | "tickHiddenClass" | "tickLabelClass" | "thumbWrapperDraggingClass">>>;
        required: true;
    };
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    sliderSize: {
        type: PropType<() => number>;
        required: true;
    };
    thumbWrapperClasses: {
        type: PropType<ClassBind[]>;
        required: true;
    };
    thumbClasses: {
        type: PropType<ClassBind[]>;
        required: true;
    };
}>> & {
    onChange?: () => any;
    onDragend?: () => any;
    onDragstart?: () => any;
    "onUpdate:modelValue"?: (value: number | number[]) => any;
}, {}, {}>;
export default _default;
