import { type Ref } from "vue";
import type { ProgrammaticInstance } from "..";
type ProgrammaticProps = {
    active: boolean;
    /** Define if the component is cancelable at all or by specific events. */
    cancelable?: boolean | string[];
    /** Callback function to call after user canceled (pressed escape / clicked outside). */
    onCancel: (...args: any[]) => void;
    /** Callback function to call after close (programmatically close or user canceled). */
    onClose: (...args: any[]) => void;
    /** DOM element where the programmatic component will be mounted on. */
    container?: string | HTMLElement;
    /** This defines the programmatic usage. */
    programmatic?: ProgrammaticInstance;
};
export interface ProgrammaticOptions {
    /** Method options that allow the component to be cancelled. */
    cancelOptions?: string[];
    /** Destroy the component on hide. Default is `true`. */
    destroyOnHide?: boolean;
}
/**
 * This provides functionalities for programmatic usage.
 * The component get appended to the container.
 * This defines a cancel and close handler, as well as escape handler.
 * The component will be distroyed on close.
 * @param elementRef HTMLElement which should injected
 * @param props ProgrammaticProps
 * @param emits ["update:active", "close"]
 * @param options
 */
export declare function useProgrammaticComponent(elementRef: Ref<HTMLElement> | (() => HTMLElement), props: ProgrammaticProps, emits: {
    (e: "update:active", value: boolean): void;
    (e: "close", ...args: any[]): void;
}, options?: ProgrammaticOptions): {
    close: (...args: any[]) => void;
    cancel: (method: string) => void;
    isActive: import("vue").WritableComputedRef<any>;
    container: import("vue").ComputedRef<HTMLElement>;
};
export {};
