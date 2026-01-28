//@ts-ignore
import { TG } from "../typeGoblin";

/** @typedef {TG.StealHisLook<import('./3').Person>['=>']} Person */
/** @typedef {TG.StealHisLook<import('./3').Cat>['=>']} Cat */

//union type

//doesnt work
/**
 * @typedef {Person & Cat} CatPerson_invalid
 */










































/** 
 * Also with few tweaks it would be intersect, we lose optional param if it exists in both types idk why
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {{'=>': {[K in (keyof T0) & (keyof T1)]: T0[K] | T1[K]}}} SharedKeys
 */

/** @type {SharedKeys<Cat, Person>['=>']} */
let test_sharedKeys;












































/**
 * Checks if exists in T0 but not T1, keys existing in both will be of type undefined
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {{'=>': {[K in keyof T0]: ({[key in keyof T1]: undefined} & {[id: String]: T0[K]})[K & String]}}} BoolIntermediary
 */
/** @type {BoolIntermediary<Cat, Person>['=>']} */
let test_bool;












































/**
 * Ok this becomes unreadable
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {{'=>': {[K in keyof BoolIntermediary<T0, T1>['=>'] as BoolIntermediary<T0, T1>['=>'][K] extends undefined ? never : K]: T0[K]}}} NotSharedKeys
 */

/** @type {NotSharedKeys<Cat, Person>['=>']} */
let test_notSharedKeys;

/** @type {NotSharedKeys<Person, Cat>['=>']} */
let test_notSharedKeys_;





































/**
 * Making this more readable by extracting clearing to second fucntion/type
 * @template {{[id: String]: *}} T
 * @typedef {{'=>': {[K in keyof T as T[K] extends undefined ? never : K]: T[K]}}} ClearUndefinedParams
 */

/** @type {ClearUndefinedParams<BoolIntermediary<Cat, Person>['=>']>['=>']} */
let test_clear;

/** 
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {{'=>': ClearUndefinedParams<BoolIntermediary<T0, T1>['=>'] & BoolIntermediary<T1, T0>['=>']>['=>']}} NotSharedKeys2
 */

/** @type {NotSharedKeys2<Cat, Person>['=>']} */
let test_notSharedKeys2;































/**
 * 
 */

/**
 * Union finally
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {{'=>': (
 * {[K in keyof SharedKeys<T0, T1>['=>']]: SharedKeys<T0, T1>['=>'][K]} &
 * {[K in keyof NotSharedKeys<T0, T1>['=>']]: NotSharedKeys<T0, T1>['=>'][K]} &
 * {[K in keyof NotSharedKeys<T1, T0>['=>']]: NotSharedKeys<T1, T0>['=>'][K]}
 * )}} Union
 */

/** @type {Union<Cat, Person>['=>']} */
let test_union;

/** @typedef {TG.StealHisLook<Union<Cat, Person>['=>']>['=>']} CatPerson_ */



































// it could be easier with use of other subtypes/typefunctions
/**
 * @template {String} T
 * @template {{[id: String]: *}} CONDITIONS
 * @typedef {{'=>': (CONDITIONS & {[id: String]: undefined})[T]}} MoreMoreAdvancedConditional
 */

/**
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {{'=>': ({[K in (keyof T0) | (keyof T1)]: MoreMoreAdvancedConditional<K & String, T1|T0>['=>']})}} Union2
 */

/** @typedef {Union2<Cat, Person>['=>']} CatPerson */

/** @type {Union2<Cat, Person>['=>']} */
let test_union2;