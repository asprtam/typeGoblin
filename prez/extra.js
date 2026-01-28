/**
 * @template {*} BASE_TYPE
 * @template {Array<*>} NOT
 * @typedef {{'=>': ({[K in NOT[Number]]: never} & {[id: String|Number]: BASE_TYPE})}} SimpleTypeNegation
 */

/** @type {SimpleTypeNegation<String, ['aaa']>['=>']} */
let test2 = 'aaa';






//doesnt work yet..
/**
 * @template {*} T
 * @template {Array<*>} T_ARRAY
 * @typedef {{'=>': ReturnType<((Map<T_ARRAY[number], true> & Map<T, false>)['get'])>}} ArrayIncludesWithObjects
 */
/** @type {ArrayIncludesWithObjects<'bbb', ['bbb', 'ccc', 'DDD']>['=>']} */
let testObjects;