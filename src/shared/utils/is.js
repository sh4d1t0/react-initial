// @flow
export function isDefined(variable?: string): any {
  return typeof variable !== 'undefined' && variable !== null
}
