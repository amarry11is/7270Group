import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * Color of the field and help message, also adds a matching icon.
     * Used by Input, Select and Autocomplete.
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: any;
    };
    /** Field label */
    label: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Vertical size of input
     * @values small, medium, large
     */
    labelSize: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Same as native for set on the label */
    labelFor: {
        type: StringConstructor;
        default: any;
    };
    /** Help message text */
    message: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Direct child components/elements of Field will be grouped horizontally
     * (see which ones at the top of the page).
     */
    grouped: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Allow controls to fill up multiple lines, making it responsive */
    groupMultiline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Group label and control on the same line for horizontal forms */
    horizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Field automatically attach controls together */
    addons: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class to align label and control in horizontal forms */
    horizontalClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when fields are grouped together */
    groupedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when fields fill up multiple lines */
    groupMultilineClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for field label */
    labelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for field label size */
    labelSizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for field label when horizontal */
    labelHorizontalClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for field body */
    bodyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** "Class for field body when horizontal */
    bodyHorizontalClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for components automatically attached together when inside a field */
    addonsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the field message */
    messageClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the message field variant */
    variantMessageClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the label field variant */
    variantLabelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of file component when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the focused field */
    focusedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the filled field */
    filledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * Color of the field and help message, also adds a matching icon.
     * Used by Input, Select and Autocomplete.
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: any;
    };
    /** Field label */
    label: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Vertical size of input
     * @values small, medium, large
     */
    labelSize: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Same as native for set on the label */
    labelFor: {
        type: StringConstructor;
        default: any;
    };
    /** Help message text */
    message: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Direct child components/elements of Field will be grouped horizontally
     * (see which ones at the top of the page).
     */
    grouped: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Allow controls to fill up multiple lines, making it responsive */
    groupMultiline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Group label and control on the same line for horizontal forms */
    horizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Field automatically attach controls together */
    addons: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class to align label and control in horizontal forms */
    horizontalClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when fields are grouped together */
    groupedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when fields fill up multiple lines */
    groupMultilineClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for field label */
    labelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for field label size */
    labelSizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for field label when horizontal */
    labelHorizontalClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for field body */
    bodyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** "Class for field body when horizontal */
    bodyHorizontalClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for components automatically attached together when inside a field */
    addonsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the field message */
    messageClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the message field variant */
    variantMessageClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the label field variant */
    variantLabelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of file component when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the focused field */
    focusedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the filled field */
    filledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>>, {
    label: string;
    override: boolean;
    mobileBreakpoint: string;
    variant: string;
    message: string;
    labelSize: string;
    labelFor: string;
    grouped: boolean;
    groupMultiline: boolean;
    horizontal: boolean;
    addons: boolean;
    rootClass: ComponentClass;
    horizontalClass: ComponentClass;
    groupedClass: ComponentClass;
    groupMultilineClass: ComponentClass;
    labelClass: ComponentClass;
    labelSizeClass: ComponentClass;
    labelHorizontalClass: ComponentClass;
    bodyClass: ComponentClass;
    bodyHorizontalClass: ComponentClass;
    addonsClass: ComponentClass;
    messageClass: ComponentClass;
    variantMessageClass: ComponentClass;
    variantLabelClass: ComponentClass;
    mobileClass: ComponentClass;
    focusedClass: ComponentClass;
    filledClass: ComponentClass;
}, {}>, {
    label?(_: {}): any;
    default?(_: {}): any;
    message?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
