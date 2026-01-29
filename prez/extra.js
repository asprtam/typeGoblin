/**
 * @template {*} BASE_TYPE
 * @template {Array<*>} NOT
 * @typedef {{'=>': ({[K in NOT[Number]]: never} & {[id: String|Number]: BASE_TYPE})}} SimpleTypeNegation
 */

/** @type {SimpleTypeNegation<String, ['aaa']>['=>']} */
let test = 'aaa';


/**
 * @template {String|Number|symbol} BASE_TYPE
 * @template {BASE_TYPE} NOT
 * @typedef {{'=>': (BASE_TYPE) extends NOT ? never : BASE_TYPE}} SimpleTypeNegation2
 */

/** @type {SimpleTypeNegation2<String, 'aaa'>['=>']} */
let test2 = 'aaa';

/** @type {SimpleTypeNegation2<'aaa'|'bbb', 'aaa'>['=>']} */
let test3 = 'aaa';

/** @type {Exclude<String, 'aaa'>} */
let test4 = 'aaa';






//doesnt work yet..
/**
 * @template {*} T
 * @template {Array<*>} T_ARRAY
 * @typedef {{'=>': ReturnType<((Map<T_ARRAY[number], true> & Map<T, false>)['get'])>}} ArrayIncludesWithObjects
 */
/** @type {ArrayIncludesWithObjects<'bbb', ['bbb', 'ccc', 'DDD']>['=>']} */
let testObjects;