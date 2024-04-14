import { type PropType } from "vue";
import type { ComponentClass, DynamicComponent } from '../../types';
/** Previous button click listener. */
declare function prev(event?: Event): void;
/** Next button click listener. */
declare function next(event?: Event): void;
/** First button click listener. */
declare function first(event?: Event): void;
/** Last button click listener. */
declare function last(event?: Event): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Total count of items */
    total: {
        type: NumberConstructor;
        default: any;
    };
    /** Items count for each page */
    perPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    /** Current page number, use v-model:current to make it two-way binding. */
    current: {
        type: NumberConstructor;
        default: number;
    };
    /** Number of pagination items to show before current page. */
    rangeBefore: {
        type: NumberConstructor;
        default: number;
    };
    /** Number of pagination items to show after current page. */
    rangeAfter: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Pagination size
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Simple style */
    simple: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Rounded button style */
    rounded: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Buttons order
     * @values centered, right, left
     */
    order: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Pagination button tag name */
    buttonTag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Icon to use for previous button */
    iconPrev: {
        type: StringConstructor;
        default: () => string;
    };
    /** Icon to use for next button */
    iconNext: {
        type: StringConstructor;
        default: () => string;
    };
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility label for the next page button. */
    ariaNextLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /** Accessibility label for the previous page button. */
    ariaPreviousLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /** Accessibility label for the page button. */
    ariaPageLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /** Accessibility label for the current page button. */
    ariaCurrentLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the prev button */
    prevButtonClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the next button */
    nextButtonClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the pagination list */
    listClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the pagination list items */
    listItemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the link button */
    linkClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the current link */
    linkCurrentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the pagination ellipsis */
    ellipsisClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the info in `simple` mode */
    infoClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the pagination order */
    orderClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the pagination in `simple` mode */
    simpleClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the pagination when rounded */
    roundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the disabled link */
    linkDisabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the pagination size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of pagination component when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {
    last: typeof last;
    first: typeof first;
    prev: typeof prev;
    next: typeof next;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:current": (value: number) => void;
    change: (event: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Total count of items */
    total: {
        type: NumberConstructor;
        default: any;
    };
    /** Items count for each page */
    perPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    /** Current page number, use v-model:current to make it two-way binding. */
    current: {
        type: NumberConstructor;
        default: number;
    };
    /** Number of pagination items to show before current page. */
    rangeBefore: {
        type: NumberConstructor;
        default: number;
    };
    /** Number of pagination items to show after current page. */
    rangeAfter: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Pagination size
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Simple style */
    simple: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Rounded button style */
    rounded: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Buttons order
     * @values centered, right, left
     */
    order: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Pagination button tag name */
    buttonTag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Icon to use for previous button */
    iconPrev: {
        type: StringConstructor;
        default: () => string;
    };
    /** Icon to use for next button */
    iconNext: {
        type: StringConstructor;
        default: () => string;
    };
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility label for the next page button. */
    ariaNextLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /** Accessibility label for the previous page button. */
    ariaPreviousLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /** Accessibility label for the page button. */
    ariaPageLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /** Accessibility label for the current page button. */
    ariaCurrentLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the prev button */
    prevButtonClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the next button */
    nextButtonClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the pagination list */
    listClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the pagination list items */
    listItemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the link button */
    linkClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the current link */
    linkCurrentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the pagination ellipsis */
    ellipsisClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the info in `simple` mode */
    infoClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the pagination order */
    orderClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the pagination in `simple` mode */
    simpleClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the pagination when rounded */
    roundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the disabled link */
    linkDisabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the pagination size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of pagination component when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onChange?: (event: number) => any;
    "onUpdate:current"?: (value: number) => any;
}, {
    size: string;
    override: boolean;
    iconPack: string;
    mobileBreakpoint: string;
    rootClass: ComponentClass;
    mobileClass: ComponentClass;
    rounded: boolean;
    roundedClass: ComponentClass;
    sizeClass: ComponentClass;
    iconPrev: string;
    iconNext: string;
    ariaNextLabel: string;
    ariaPreviousLabel: string;
    prevButtonClass: ComponentClass;
    nextButtonClass: ComponentClass;
    listClass: ComponentClass;
    linkClass: ComponentClass;
    linkCurrentClass: ComponentClass;
    total: number;
    perPage: string | number;
    current: number;
    rangeBefore: number;
    rangeAfter: number;
    simple: boolean;
    order: string;
    buttonTag: DynamicComponent;
    ariaPageLabel: string;
    ariaCurrentLabel: string;
    listItemClass: ComponentClass;
    ellipsisClass: ComponentClass;
    infoClass: ComponentClass;
    orderClass: ComponentClass;
    simpleClass: ComponentClass;
    linkDisabledClass: ComponentClass;
}, {}>, {
    previous?(_: {
        number: number;
        isCurrent: boolean;
        click: (event: Event) => void;
        ariaLabel: string;
        tag: DynamicComponent;
    }): any;
    next?(_: {
        number: number;
        isCurrent: boolean;
        click: (event: Event) => void;
        ariaLabel: string;
        tag: DynamicComponent;
    }): any;
    default?(_: {
        number: number;
        isCurrent: boolean;
        click: (event: Event) => void;
        ariaLabel: string;
        tag: DynamicComponent;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
