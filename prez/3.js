//@ts-ignore
import { TG } from "../typeGoblin";

// conditional

// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html - this is only a simple IF

const check = (foo) => {
    switch(foo) {
        case 'val': {
            return true;
        }
        default: {
            return false;
        }
    }
}

/**
 * @template {String|Number|null} T
 * @typedef {{'=>': ({'val': true} & {[id: String]: false})[T]}} SimpleConditional
 */

/** @type {SimpleConditional<'val'>['=>']} */
let test_check;
































/**
 * @template {String|Number|null} T
 * @template {Array<String|Number|null>} CONDITIONS
 * @typedef {{'=>': ({[K in CONDITIONS[number]]: true} & {[id: String|number|null]: false})[T]}} MoreAdvancedConditional
 */

//this also basically becomes Array.prototype.includes
/** @type {MoreAdvancedConditional<'aaa', ['aaa'|'bbb', 'bbb']>['=>']} */
let test_check1;




























/**
 * @template {String|Number|null} T
 * @template {{[id: String|Number|null]: *}} CONDITIONS
 * @typedef {{'=>': (CONDITIONS & {[id: String|number|null]: never})[T]}} MoreMoreAdvancedConditional
 */

/** @typedef {(import('./2').Person) & {species: 'Homo Sapiens', occupation: String}} Person */
/** @typedef {{name: String, age: Number, species: 'Felis Catus', tailLenght: Number}} Cat */

/** @type {MoreMoreAdvancedConditional<'cat', {'cat': Cat, 'human': Person}>['=>']} */
let test_check2;