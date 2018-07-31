// @flow
// utils
import isDefined from './is'

export default function isFirstRender(items: any): any {
  return (
    !isDefined(items) || items.length === 0 || Object.keys(items).length === 0
  )
}
