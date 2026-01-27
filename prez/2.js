//@ts-ignore
import { TG } from "../typeGoblin";

/**
 * @typedef {Object} PersonRequired
 * @property {String} name
 * @property {String} lastName
 */

/**
 * @typedef {Object} PersonOptional
 * @property {String} [pseudonym]
 */

//intelisense tells nothing
/** @typedef {PersonRequired & PersonOptional} PersonOldWay */

//intelisesnse makes sense :D
/** @typedef {TG.StealHisLook<PersonRequired & PersonOptional>['=>']} Person */

/** @typedef {TG.StealHisLook<PersonRequired & {[id: String]: *}>['=>']} Person2 */