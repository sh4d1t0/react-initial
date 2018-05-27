export default function deviceReducer (state = {}) {
  let isMobile = false

  if (state.isMobile === 'true') {
    isMobile = true
  }

  return {
    ...state,
    isMobile
  }
}
