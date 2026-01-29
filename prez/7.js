//@ts-ignore
import { TG } from "../typeGoblin";

/** @typedef {import('./4').Cat} Cat */
/** @typedef {import('./4').Person} Person */
/** @typedef {import('./4').CatPerson} CatPerson */




















































/** 
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {{'=>': (
 * {[K in (keyof T0) & (keyof T1) as (T0[K] & T1[K]) extends never ? K : never]: `${T0[K]} ${T1[K]}` | `${T1[K]} ${T0[K]}`}
 * )}} SharedKeysAddStrings
 */

/** @type {SharedKeysAddStrings<Cat, Person>['=>']} */
let test_sharedKeysAdd;

/** 
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {{'=>': (
 * {[K in (keyof T0) & (keyof T1) as (T0[K] & T1[K]) extends never ? never : K]: T0[K] | T1[K]}
 * )}} SharedKeysNoStrings
 */

/** @type {SharedKeysNoStrings<Cat, Person>['=>']} */
let test_sharedKeyNoStrings;


/**
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {TG.StealHisLook<(SharedKeysAddStrings<T0, T1>['=>'] & SharedKeysNoStrings<T0, T1>['=>'])>} SharedKeysFinal
 */

/** @type {SharedKeysFinal<Cat, Person>['=>']} */
let test_sharedKeys;

/** 
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {import('./4').NotSharedKeys2<T0, T1>} NotSharedKeys
 */

/**
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {TG.StealHisLook<SharedKeysFinal<T0, T1>['=>'] & NotSharedKeys<T0, T1>['=>']>} UnionAgain
 */
/** @type {UnionAgain<Cat, Person>['=>']} */
let test_union;

























































//challenge - replace keys


















































/** 
 * @template {{[id: String]: *}} OBJECT
 * @template {{[K in keyof OBJECT]?: *}} REPLACED_KEYS
 * @typedef {TG.StealHisLook<(
 * {[K in keyof REPLACED_KEYS]: REPLACED_KEYS[K]} &
 * {[K in keyof OBJECT as (OBJECT[K] & REPLACED_KEYS[K]) extends never|undefined ? never : K]: OBJECT[K]}
 * )>} ReplaceKeys
 */
/**
 * @type {ReplaceKeys<CatPerson, {species: 'Felis Sapiens'}>['=>']}
 */
let test_replace;

// https://www.typescriptlang.org/docs/handbook/utility-types.html
/** 
 * @template {{[id: String]: *}} OBJECT
 * @template {{[K in keyof OBJECT]?: *}} REPLACED_KEYS
 * @typedef {TG.StealHisLook<(
 * {[K in keyof Omit<OBJECT, keyof REPLACED_KEYS>]: OBJECT[K]} &
 * {[K in keyof REPLACED_KEYS]: REPLACED_KEYS[K]}
 * )>} ReplaceKeysTS
 */
/**
 * @type {ReplaceKeysTS<CatPerson, {species: 'Felis Sapiens'}>['=>']}
 */
let test_replaceTS;