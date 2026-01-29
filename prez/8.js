//@ts-ignore
import { TG } from "../typeGoblin";


// type creation

/**
 * @typedef {Object} ConfigString
 * @property {'string'} type
 */

/**
 * @typedef {Object} ConfigNumber
 * @property {'number'} type
 */

/**
 * @typedef {Object} ConfigBoolean
 * @property {'boolean'} type
 */


/**
 * @typedef {Object} CreationReturnsSimple
 * @property {String} string
 * @property {Number} number
 * @property {Boolean} boolean
 */

/**
 * @template {{[id: String]: ConfigString|ConfigNumber|ConfigBoolean}} MAP
 * @param {MAP & {[id: String]: ConfigString|ConfigNumber|ConfigBoolean}} map
 * @returns {TG.StealHisLook<{[K in keyof MAP]: CreationReturnsSimple[MAP[K]['type']]}>['=>']}
 */
const createObjectSimple = (map) => {
    return;
}
const testSimple = createObjectSimple({
    'aaa': {
        type: 'string'
    },
    'bbb': {
        type: 'number',
    },
    'ccc': {
        type: 'boolean'
    }
});


/**
 * @typedef {{[id: String]: InfiniteObject}} InfiniteObject
 */

/**
 * @template {{[id: String]: *}} OPTIONS
 * @typedef {Object} ConfigSwitch
 * @property {'switch'} type
 * @property {Array<keyof OPTIONS>} options
 */

/**
 * @template {InfiniteObject} T
 * @typedef {TG.StealHisLook<ConfigString|ConfigNumber|ConfigBoolean|ConfigSwitch<T>>['=>']} ConfigAny_simple
 */
/**
 * @template {ConfigAny_simple<InfiniteObject>} T
 * @typedef {Object} CreationReturnsMoreComplex
 * @property {String} string
 * @property {Number} number
 * @property {Boolean} boolean
 * @property {(T & ConfigSwitch<T>)['options'][number]} switch
 */


/**
 * @template {{[id: String]: *}} T
 * @template {{[id: String]: ConfigAny_simple<T>}} MAP
 * @param {MAP & {[id: String]: ConfigAny_simple<T>}} map
 * @returns {TG.StealHisLook<{[K in keyof MAP]: CreationReturnsMoreComplex<T>[MAP[K]['type']]}>['=>']}
 */
const createObject1 = (map) => {
    return;
}

const test1 = createObject1({
    'aaa': {
        type: 'string'
    },
    'bbb': {
        type: 'switch',
        options: ['1', '2']
    },
    'ccc': {
        type: 'switch',
        options: ['a', 'b']
    }
});

/**
 * @template {ConfigAny_simple<InfiniteObject>} T
 * @typedef {Object} CreationReturnsMoreComplex2
 * @property {String} string
 * @property {Number} number
 * @property {Boolean} boolean
 * @property {(T & ConfigSwitch<*>)['options'][number]} switch
 */

/**
 * @template {{[id: String]: *}} T
 * @template {{[id: String]: ConfigAny_simple<T>}} MAP
 * @param {MAP & {[id: String]: ConfigAny_simple<T>}} map
 * @returns {TG.StealHisLook<{[K in keyof MAP]: CreationReturnsMoreComplex2<MAP[K]>[MAP[K]['type']]}>['=>']}
 */
const createObject2 = (map) => {
    return;
}

const test2 = createObject2({
    'aaa': {
        type: 'string'
    },
    'bbb': {
        type: 'switch',
        options: ['1', '2']
    },
    'ccc': {
        type: 'switch',
        options: ['a', 'b']
    }
});

/**
 * @template {InfiniteObject} T
 * @typedef {TG.StealHisLook<ConfigString|ConfigNumber|ConfigBoolean|ConfigSwitch<T>>['=>']} ConfigAny
 */

/**
 * @template {InfiniteObject} T
 * @typedef {{[id: String]: ConfigAny<T>|InfiniteConfig<T>}} InfiniteConfig
 */

/**
 * @typedef {ConfigAny<*>['type']} SimpleTypes
 */

/**
 * @template {{[id: String]: *}} MAP
 * @typedef {Object} CreationReturns
 * @property {String} string
 * @property {Number} number
 * @property {Boolean} boolean
 * @property {(MAP & ConfigSwitch<*>)['options'][number]} switch
 * @property {{[K in keyof MAP]: MAP[K]['type'] extends SimpleTypes ? CreationReturns<MAP[K]>[MAP[K]['type']] : CreationReturns<MAP[K]>['obj']}} obj
 */

/**
 * @template {{[id: String]: *}} T
 * @template {InfiniteConfig<T>} MAP
 * @param {MAP & InfiniteConfig<T>} map
 * @returns {TG.StealHisLook<(
 * {[K in keyof MAP]: MAP[K]['type'] extends SimpleTypes ? CreationReturns<MAP[K]>[MAP[K]['type']] : CreationReturns<MAP[K]>['obj']}
 * )>['=>']}
 */
const createObject3 = (map) => {
    return;
}

const test3 = createObject3({
    'aaa': {
        type: 'string'
    },
    'bbb': {
        type: 'switch',
        options: ['1', '2']
    },
    'ccc': {
        'ddd': {
            type: 'string'
        },
        'eee': {
            type: 'switch',
            options: ['a', 'b']
        },
        'fff': {
            'ggg': {
                type: 'string'
            }
        }
    }
});