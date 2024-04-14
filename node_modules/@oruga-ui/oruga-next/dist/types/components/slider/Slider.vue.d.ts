import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** @model */
    modelValue: {
        type: PropType<number | number[]>;
        default: number;
    };
    /** Minimum value */
    min: {
        type: NumberConstructor;
        default: number;
    };
    /** Maximum  value */
    max: {
        type: NumberConstructor;
        default: number;
    };
    /** Step interval of ticks */
    step: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Color of the slider
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Vertical size of slider
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Show tick marks */
    ticks: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show tooltip when thumb is being dragged */
    tooltip: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Color of the tooltip
     * @values primary, info, success, warning, danger, and any other custom color
     */
    tooltipVariant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Tooltip displays always */
    tooltipAlways: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Rounded thumb */
    rounded: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Slider will be disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Update v-model only when dragging is finished */
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Function to format the tooltip label for display */
    customFormatter: {
        type: FunctionConstructor;
        default: any;
    };
    /** Increases slider size on focus */
    biggerSliderFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show indicators */
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Define v-model format
     * @values row, percent
     */
    format: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Date format locale */
    locale: {
        type: PropType<string | string[]>;
        default: () => unknown;
    };
    /** Accessibility aria-label to to be passed to the slider thumb element. */
    ariaLabel: {
        type: PropType<string | string[]>;
        default: () => unknown;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the vertical slider size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the slider track */
    trackClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the filled part of the slider */
    fillClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when the slider is rounded */
    thumbRoundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when the thumb gets dragged */
    thumbDraggingClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when slider is disabled */
    disabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the thumb wrapper */
    thumbWrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the thumb */
    thumbClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the slider variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of slider tick */
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
    /** Class to display on the wrapper element when the slider is dragged */
    thumbWrapperDraggingClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number | number[]) => void;
    change: (value: number | number[]) => void;
    dragging: (value: number | number[]) => void;
    dragstart: () => void;
    dragend: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** @model */
    modelValue: {
        type: PropType<number | number[]>;
        default: number;
    };
    /** Minimum value */
    min: {
        type: NumberConstructor;
        default: number;
    };
    /** Maximum  value */
    max: {
        type: NumberConstructor;
        default: number;
    };
    /** Step interval of ticks */
    step: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Color of the slider
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Vertical size of slider
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Show tick marks */
    ticks: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show tooltip when thumb is being dragged */
    tooltip: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Color of the tooltip
     * @values primary, info, success, warning, danger, and any other custom color
     */
    tooltipVariant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Tooltip displays always */
    tooltipAlways: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Rounded thumb */
    rounded: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Slider will be disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Update v-model only when dragging is finished */
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Function to format the tooltip label for display */
    customFormatter: {
        type: FunctionConstructor;
        default: any;
    };
    /** Increases slider size on focus */
    biggerSliderFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show indicators */
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Define v-model format
     * @values row, percent
     */
    format: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Date format locale */
    locale: {
        type: PropType<string | string[]>;
        default: () => unknown;
    };
    /** Accessibility aria-label to to be passed to the slider thumb element. */
    ariaLabel: {
        type: PropType<string | string[]>;
        default: () => unknown;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the vertical slider size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the slider track */
    trackClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the filled part of the slider */
    fillClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when the slider is rounded */
    thumbRoundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when the thumb gets dragged */
    thumbDraggingClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when slider is disabled */
    disabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the thumb wrapper */
    thumbWrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the thumb */
    thumbClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the slider variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of slider tick */
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
    /** Class to display on the wrapper element when the slider is dragged */
    thumbWrapperDraggingClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onChange?: (value: number | number[]) => any;
    onDragend?: () => any;
    onDragstart?: () => any;
    "onUpdate:modelValue"?: (value: number | number[]) => any;
    onDragging?: (value: number | number[]) => any;
}, {
    size: string;
    override: boolean;
    modelValue: number | number[];
    variant: string;
    rootClass: ComponentClass;
    rounded: boolean;
    disabled: boolean;
    disabledClass: ComponentClass;
    sizeClass: ComponentClass;
    variantClass: ComponentClass;
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
    trackClass: ComponentClass;
    fillClass: ComponentClass;
    thumbRoundedClass: ComponentClass;
    thumbDraggingClass: ComponentClass;
    thumbWrapperClass: ComponentClass;
    thumbClass: ComponentClass;
    tickClass: ComponentClass;
    tickHiddenClass: ComponentClass;
    tickLabelClass: ComponentClass;
    thumbWrapperDraggingClass: ComponentClass;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
