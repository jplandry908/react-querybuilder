import { numericRegex as numericQuantityRegex } from 'numeric-quantity';

/**
 * Regex matching numeric strings. Passes for positive/negative integers, decimals,
 * and E notation, with optional surrounding whitespace.
 */
export const numericRegex: RegExp = new RegExp(
  numericQuantityRegex.source.replace(/^\^/, String.raw`^\s*`).replace(/\$$/, String.raw`\s*$`)
);

/**
 * Determines if a variable is a plain old JavaScript object, aka POJO.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isPojo = (obj: any): obj is Record<string, any> =>
  obj === null || typeof obj !== 'object' ? false : Object.getPrototypeOf(obj) === Object.prototype;

/**
 * Simple helper to determine whether a value is null, undefined, or an empty string.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const nullOrUndefinedOrEmpty = (value: any): value is null | undefined | '' =>
  value === null || value === undefined || value === '';
