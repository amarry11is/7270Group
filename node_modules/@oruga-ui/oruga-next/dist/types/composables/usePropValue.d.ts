import { type ExtractPropTypes, type WritableComputedRef, type Ref, type UnwrapRef, type ComponentObjectPropsOptions } from "vue";
/**
 * Adaption of {@link https://vueuse.org/core/useVModel/} options.
 */
export interface PropBindingOptions<Passive extends boolean = false> {
    /**
     * When passive is set to `true`, it will use `watch` to sync with props and ref.
     * Instead of relying on the `v-model` or `.sync` to work.
     *
     * @default false
     */
    passive?: Passive;
    /**
     * When eventName is set, it's value will be used to overwrite the emit event name.
     *
     * @default undefined
     */
    eventName?: string;
    /**
     * Attempting to check for changes of properties in a deeply nested object or array.
     * Apply only when `passive` option is set to `true`
     *
     * @default false
     */
    deep?: boolean;
}
export declare function usePropBinding<T>(name: string, props: Readonly<ExtractPropTypes<ComponentObjectPropsOptions<any>>>, emit: (event: any, value: T) => void, options?: PropBindingOptions<false>): WritableComputedRef<T>;
export declare function usePropBinding<T>(name: string, props: Readonly<ExtractPropTypes<ComponentObjectPropsOptions<any>>>, emit: (event: any, value: T) => void, options?: PropBindingOptions<true>): Ref<UnwrapRef<T>>;
export declare function useVModelBinding<T>(props: Readonly<ExtractPropTypes<ComponentObjectPropsOptions>>, emit: {
    /** on input focus event */
    (e: "update:modelValue", value: T): void;
}, options?: PropBindingOptions<false>): WritableComputedRef<T>;
export declare function useVModelBinding<T>(props: Readonly<ExtractPropTypes<ComponentObjectPropsOptions>>, emit: {
    /** on input focus event */
    (e: "update:modelValue", value: T): void;
}, options?: PropBindingOptions<true>): Ref<UnwrapRef<T>>;
