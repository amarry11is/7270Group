import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare function onPrev(): void;
declare function onNext(): void;
declare function switchTo(index: number, onlyMove?: boolean): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** @model */
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    /** Enable drag mode */
    dragable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Timer interval for `autoplay` */
    interval: {
        type: NumberConstructor;
        default: () => number;
    };
    /** Move item automaticalls after `interval` */
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Pause autoplay on hover */
    pauseHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Repeat from the beginning after reaching the end */
    repeat: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show an overlay */
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable indicators */
    indicators: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Place indicators inside the carousel */
    indicatorInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Indicator interaction mode
     * @values click, hover
     */
    indicatorMode: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    /** Position of the indicator - depends on used theme */
    indicatorPosition: {
        type: StringConstructor;
        default: () => string;
    };
    /** Style of the indicator - depends on used theme */
    indicatorStyle: {
        type: StringConstructor;
        default: () => string;
    };
    /** Number of items to show at once*/
    itemsToShow: {
        type: NumberConstructor;
        default: () => number;
    };
    /** Number of items to switch at once */
    itemsToList: {
        type: NumberConstructor;
        default: () => number;
    };
    /** Show next / prev arrows */
    arrows: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Show next / prev arrows only on hover */
    arrowsHover: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Icon name for previous icon */
    iconPrev: {
        type: StringConstructor;
        default: () => string;
    };
    /** Icon name for next icon */
    iconNext: {
        type: StringConstructor;
        default: () => string;
    };
    /** Define these props for different screen sizes */
    breakpoints: {
        type: PropType<Record<number, any>>;
        default: () => {};
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the root element in overlay */
    overlayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the wrapper element of carousel items */
    wrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of slider items */
    itemsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of slider items on drag */
    itemsDraggingClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of arrow elements */
    arrowIconClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of prev arrow element */
    arrowIconPrevClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of next arrow element */
    arrowIconNextClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicator link element */
    indicatorClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicators wrapper element */
    indicatorsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicators wrapper element when inside */
    indicatorsInsideClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicators wrapper element when inside and position */
    indicatorsInsidePositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicator item element */
    indicatorItemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicator element when is active */
    indicatorItemActiveClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicator element to separate different styles */
    indicatorItemStyleClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => void;
    scroll: (value: number) => void;
    click: (event: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** @model */
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    /** Enable drag mode */
    dragable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Timer interval for `autoplay` */
    interval: {
        type: NumberConstructor;
        default: () => number;
    };
    /** Move item automaticalls after `interval` */
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Pause autoplay on hover */
    pauseHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Repeat from the beginning after reaching the end */
    repeat: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show an overlay */
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable indicators */
    indicators: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Place indicators inside the carousel */
    indicatorInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Indicator interaction mode
     * @values click, hover
     */
    indicatorMode: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    /** Position of the indicator - depends on used theme */
    indicatorPosition: {
        type: StringConstructor;
        default: () => string;
    };
    /** Style of the indicator - depends on used theme */
    indicatorStyle: {
        type: StringConstructor;
        default: () => string;
    };
    /** Number of items to show at once*/
    itemsToShow: {
        type: NumberConstructor;
        default: () => number;
    };
    /** Number of items to switch at once */
    itemsToList: {
        type: NumberConstructor;
        default: () => number;
    };
    /** Show next / prev arrows */
    arrows: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Show next / prev arrows only on hover */
    arrowsHover: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Icon name for previous icon */
    iconPrev: {
        type: StringConstructor;
        default: () => string;
    };
    /** Icon name for next icon */
    iconNext: {
        type: StringConstructor;
        default: () => string;
    };
    /** Define these props for different screen sizes */
    breakpoints: {
        type: PropType<Record<number, any>>;
        default: () => {};
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the root element in overlay */
    overlayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the wrapper element of carousel items */
    wrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of slider items */
    itemsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of slider items on drag */
    itemsDraggingClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of arrow elements */
    arrowIconClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of prev arrow element */
    arrowIconPrevClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of next arrow element */
    arrowIconNextClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicator link element */
    indicatorClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicators wrapper element */
    indicatorsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicators wrapper element when inside */
    indicatorsInsideClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicators wrapper element when inside and position */
    indicatorsInsidePositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicator item element */
    indicatorItemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicator element when is active */
    indicatorItemActiveClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of indicator element to separate different styles */
    indicatorItemStyleClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onClick?: (event: Event) => any;
    onScroll?: (value: number) => any;
    "onUpdate:modelValue"?: (value: number) => any;
}, {
    override: boolean;
    iconPack: string;
    modelValue: number;
    repeat: boolean;
    rootClass: ComponentClass;
    wrapperClass: ComponentClass;
    dragable: boolean;
    interval: number;
    autoplay: boolean;
    pauseHover: boolean;
    overlay: boolean;
    indicators: boolean;
    indicatorInside: boolean;
    indicatorMode: string;
    indicatorPosition: string;
    indicatorStyle: string;
    itemsToShow: number;
    itemsToList: number;
    arrows: boolean;
    arrowsHover: boolean;
    iconSize: string;
    iconPrev: string;
    iconNext: string;
    breakpoints: Record<number, any>;
    overlayClass: ComponentClass;
    itemsClass: ComponentClass;
    itemsDraggingClass: ComponentClass;
    arrowIconClass: ComponentClass;
    arrowIconPrevClass: ComponentClass;
    arrowIconNextClass: ComponentClass;
    indicatorClass: ComponentClass;
    indicatorsClass: ComponentClass;
    indicatorsInsideClass: ComponentClass;
    indicatorsInsidePositionClass: ComponentClass;
    indicatorItemClass: ComponentClass;
    indicatorItemActiveClass: ComponentClass;
    indicatorItemStyleClass: ComponentClass;
}, {}>, {
    default?(_: {}): any;
    arrow?(_: {
        hasPrev: boolean;
        prev: typeof onPrev;
        hasNext: boolean;
        next: typeof onNext;
    }): any;
    indicators?(_: {
        active: number;
        switchTo: typeof switchTo;
        indicatorIndex: number;
    }): any;
    indicator?(_: {
        index: number;
    }): any;
    overlay?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
