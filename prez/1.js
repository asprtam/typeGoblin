// simple copying - use case later

/**
 * @template {{[id: String]: *}} T
 * @typedef {{'=>': {[key in keyof T]: T[key]}}} StealHisLook
 */