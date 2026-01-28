//@ts-ignore
import { TG } from "../typeGoblin";

/** @typedef {TG.StealHisLook<import('./3').Person>['=>']} Person */
/** @typedef {TG.StealHisLook<import('./3').Cat>['=>']} Cat */

/** 
 * Lets head back to intersect
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {{'=>': {[K in (keyof T0) & (keyof T1)]: T0[K] & T1[K]}}} SharedKeys
 */

/** @type {SharedKeys<Cat, Person>['=>']} */
let test_sharedKeys;

/**
 * @template {{[id: String]: *}} T
 * @typedef {{'=>': {[K in keyof T as T[K] extends never ? never : K]: T[K]}}} ClearInvalidParams
 */

/** 
 * Lets head back to intersect
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {{'=>': ClearInvalidParams<SharedKeys<T0, T1>['=>']>['=>']}} Intersect
 */
/** @type {Intersect<Cat, Person>['=>']} */
let test_intersect;