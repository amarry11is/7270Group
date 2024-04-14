import { type MaybeRefOrGetter, type Ref } from "vue";
import type { ClassBind } from '../types';
type ComputedClass = readonly [
    className: string,
    defaultClass: string,
    suffix?: MaybeRefOrGetter<string>,
    apply?: MaybeRefOrGetter<boolean>
];
/** Helperfunction to get all active classes from a class binding list */
export declare const getActiveClasses: (classes: ClassBind[]) => string[];
/**
 * Calculate dynamic classes based on class definitions
 */
export declare function defineClasses(...classDefinitions: ComputedClass[]): Ref<ClassBind[]>;
export {};
