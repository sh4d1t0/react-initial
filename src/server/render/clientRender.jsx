// @flow
// HTML
import html from './html'

function clientRender() {
  // eslint-disable-next-line consistent-return
  return (
    req: { url: string, isMobile: boolean, isBot: boolean },
    res: { redirect: void, send: void },
    next: void
  ) => {
    if (req.isBot) {
      next()
    }

    const initialState: Object = {
      device: {
        isMobile: req.isMobile
      }
    }

    res.send(
      html({
        markup: '',
        initialState
      })
    )

    return true
  }
}

export default clientRender
