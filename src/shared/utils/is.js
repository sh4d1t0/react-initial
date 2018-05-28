// @flow
export function isDefined(variable?: string) {
  return typeof variable !== 'undefined' && variable !== null
}
