// simple conditional

// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

/**
 * @template {*} T
 * @typedef {{'=>':
 * ({'val': true} & //switch cases
 * {[id: String]: false})[`${T}`] //default
 * }} SimpleConditional
 */

const check = (foo) => {
    switch(`${foo}`) {
        case 'val': {
            return true;
        }
        default: {
            return false;
        }
    }
}

/**
 * Transform values of array to keys in object
 * @template {Array<String>} T
 * @typedef {{'=>': {[K in T[number]]: *}}} ArrayHitsDifferent
 */

/**
 * Checks if T0 is in T1 array
 * @template {*} T0
 * @template {Array<Boolean | String | Number | BigInt | undefined>} T1 
 * @typedef {{'=>': ( 
 * {[K in T1[number] as `${K}`]: true} & //@ts-ignore
 * {[id: String]: false})[`${T0}`]}} IsGiving
 */