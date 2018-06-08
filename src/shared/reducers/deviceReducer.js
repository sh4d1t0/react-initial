// @flow
export default function deviceReducer(state: { isMobile?: boolean } = {}) {
  let isMobile = false

  if (state.isMobile === 'true') {
    isMobile = true
  }

  return {
    ...state,
    isMobile
  }
}
