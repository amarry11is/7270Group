/**
 * Generates a random string
 */
export declare const uuid: () => string;
export declare const sign: (x: number) => number;
/**
 * Native modulo bug with negative numbers
 * @param n
 * @param mod
 * @returns {number}
 */
export declare const mod: (n: number, mod: number) => number;
/**
 * Asserts a value is beetween min and max
 * @param val
 * @param min
 * @param max
 * @returns {number}
 */
export declare function bound(val: number, min: number, max: number): number;
export declare const isObject: <T>(obj: T) => boolean;
export declare const isDefined: <T>(d: T) => boolean;
export declare const blankIfUndefined: (value: string) => string;
export declare const defaultIfUndefined: <T>(value: T | undefined, defaultValue: T) => T;
export declare const toCssDimension: (width: string | number) => string | number;
/**
 * Extension of indexOf method by equality function if specified
 */
export declare function indexOf<T>(array: T[], obj: T, fn: (value: T, array: T[]) => boolean): number;
/**
 * Deeply check if two values are equal
 */
export declare function isEqual(valueA: unknown, valueB: unknown): boolean;
/**
 * Clone an obj with Object.assign
 */
export declare function clone<T extends object>(obj: T): T;
/**
 * Merge function to replace Object.assign with deep merging possibility
 */
export declare function merge(target: any, source: any, deep?: boolean): any;
/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
export declare function mergeDeep(target: any, source: any): any;
/**
 * Get a value of an object property/path even if it's nested
 */
export declare function getValueByPath<T = any>(obj: Record<string, any>, path: string, defaultValue?: T): T;
/**
 * Set a value of an object property/path even if it's nested
 */
export declare function setValueByPath<T = any>(obj: Record<string, any>, path: string, value: T): void;
export declare function removeElement(el: Element): void;
export declare function createAbsoluteElement(el: Element): HTMLDivElement;
/**
 * Escape regex characters
 * http://stackoverflow.com/a/6969486
 */
export declare function escapeRegExpChars(value: string): string;
/**
 * Remove accents/diacritics in a string in JavaScript
 * https://stackoverflow.com/a/37511463
 */
export declare function removeDiacriticsFromString(value: string): string;
/**
 * Mobile detection
 * https://www.abeautifulsite.net/detecting-mobile-devices-with-javascript
 */
export declare const isMobileAgent: {
    Android: () => boolean;
    BlackBerry: () => boolean;
    iOS: () => boolean;
    Opera: () => boolean;
    Windows: () => boolean;
    any: () => boolean;
};
