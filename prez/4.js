//@ts-ignore
import { TG } from "../typeGoblin";

// type negation

/**
 * @template {*} T
 * @template {Array<*>} T_ARRAY
 * @typedef {{'=>': ({[K in T_ARRAY[number]]: true} & {[id: String]: false})[T]}} ArrayIncludes
 */

//dont works on objects
/** @type {ArrayIncludes<String, [String, 'bbb', 'ccc', {aaa: String}]>['=>']} */
let test;

/**
 * @template {*} T
 * @typedef {{'=>': ({'true': never} & {[id: String]: T})[`${ArrayIncludes<String, Array<String>>['=>']}`]}} SimpleTypeNegation
 */

/** @type {SimpleTypeNegation<String>['=>']} */
let test2;






//doesnt work yet..
/**
 * @template {*} T
 * @template {Array<*>} T_ARRAY
 * @typedef {{'=>': ReturnType<((Map<T_ARRAY[number], true> & Map<T, false>)['get'])>}} ArrayIncludesWithObjects
 */
/** @type {ArrayIncludesWithObjects<'bbb', ['bbb', 'ccc', 'DDD']>['=>']} */
let testObjects;