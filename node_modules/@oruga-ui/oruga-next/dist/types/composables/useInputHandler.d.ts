import { type ExtractPropTypes, type MaybeRefOrGetter, type Component } from "vue";
declare const validatableFormElementTypes: ({
    new (): HTMLInputElement;
    prototype: HTMLInputElement;
} | {
    new (): HTMLButtonElement;
    prototype: HTMLButtonElement;
} | {
    new (): HTMLFieldSetElement;
    prototype: HTMLFieldSetElement;
} | {
    new (): HTMLObjectElement;
    prototype: HTMLObjectElement;
} | {
    new (): HTMLOutputElement;
    prototype: HTMLOutputElement;
} | {
    new (): HTMLSelectElement;
    prototype: HTMLSelectElement;
} | {
    new (): HTMLTextAreaElement;
    prototype: HTMLTextAreaElement;
})[];
export type ValidatableFormElement = InstanceType<(typeof validatableFormElementTypes)[number]>;
/**
 * Form input handler functionalities
 */
export declare function useInputHandler(
/** input ref element - can be a html element or a vue component*/
inputRef: MaybeRefOrGetter<ValidatableFormElement | Component>, 
/** emitted input events */
emits: {
    /** on input focus event */
    (e: "focus", value: Event): void;
    /** on input blur event */
    (e: "blur", value: Event): void;
    /** on input invalid event */
    (e: "invalid", value: Event): void;
}, 
/** validation configuration props */
props: Readonly<ExtractPropTypes<{
    useHtml5Validation?: boolean;
    validationMessage?: string;
}>>): {
    isFocused: import("vue").Ref<boolean>;
    isValid: import("vue").Ref<boolean>;
    setFocus: () => void;
    doClick: () => void;
    onFocus: (event?: Event) => void;
    onBlur: (event?: Event) => void;
    checkHtml5Validity: () => boolean;
    onInvalid: (event: Event) => void;
};
export {};
