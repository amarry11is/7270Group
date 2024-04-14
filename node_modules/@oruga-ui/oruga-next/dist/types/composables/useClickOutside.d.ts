import { type MaybeRefOrGetter } from "vue";
/**
 * Listen for clicks outside of an element.
 * Adaption of {@link https://vueuse.org/core/onClickOutside}
 *
 * @param target Target element
 * @param handler Event handler
 * @param ignore Element to ignore
 * @return stop function
 */
export declare function useClickOutside(target: MaybeRefOrGetter, handler: (evt: PointerEvent) => void, ignore?: (MaybeRefOrGetter | string)[]): () => void;
