//@ts-ignore
import { TG } from "../typeGoblin";

//going deeper

/**
 * @typedef {Object} Building
 * @property {'building'} type
 * @property {String} color
 * @property {{width: Number, height: Number, length: Number, floors: Number}} size
 * @property {{street: String, number: Number, city: String}} adress
 */

/**
 * @typedef {Object} Tent
 * @property {'tent'} type
 * @property {String} color
 * @property {{width: Number, height: Number, length: Number, chambers: Number}} size
 * @property {{street: String, number: Number, city: String}} adress
 */





































/**
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {import('./4').Union2<T0, T1>} ShallowUnion
 */

/** @type {ShallowUnion<Building, Tent>['=>']} */
let test_simpleUnion;









































/** 
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {{'=>': (
 * {[K in ((keyof T0) | (keyof T1)) as (ShallowUnion<T0, T1>['=>'])[K] extends String|Number|null ? K : never]: 'simple'} &
 * {[K in ((keyof T0) | (keyof T1)) as (ShallowUnion<T0, T1>['=>'])[K] extends String|Number|null ? never : K]: 'obj'}
 * )}} CategorizeKeys
 */

/** @type {CategorizeKeys<Building, Tent>['=>']} */
let test_categorize;



































/** 
 * Kindof recursive function
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {{'=>': (
 * {[K in ((keyof T0) | (keyof T1)) as (ShallowUnion<T0, T1>['=>'])[K] extends String|Number|null ? K : never]: (ShallowUnion<T0, T1>['=>'])[K]} &
 * {[K in ((keyof T0) | (keyof T1)) as (ShallowUnion<T0, T1>['=>'])[K] extends String|Number|null ? never : K]: DeepUnion<T0[K], T1[K]>['=>']}
 * )}} DeepUnion
 */


// also now we see why '=>' is curcial, nice and readable type without it :D
/** @type {DeepUnion<Building, Tent>['=>']} */
let test_deepUnion;













































//fixing errors
/** 
 * @template {{[id: String]: *}} T0
 * @template {{[id: String]: *}} T1
 * @typedef {TG.StealHisLook<(
 * {[K in ((keyof T0) | (keyof T1)) as (ShallowUnion<T0, T1>['=>'])[K] extends String|Number|null ? K : never]: (ShallowUnion<T0, T1>['=>'])[K]} &
 * {[K in ((keyof T0) | (keyof T1)) as (ShallowUnion<T0, T1>['=>'])[K] extends String|Number|null ? never : K]: MoreDeepUnion<T0[K extends keyof T0 ? K : never], T1[K extends keyof T1 ? K : never]>['=>']}
 * )>} MoreDeepUnion
 */

/** @type {MoreDeepUnion<Building, Tent>['=>']} */
let test_moreDeepUnion;