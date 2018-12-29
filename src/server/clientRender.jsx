// HTML
import html from './html'

export default function clientRender() {
  // eslint-disable-next-line consistent-return
  return (req, res, next) => {
    if (req.isBot) {
      return next()
    }

    const initialState = {
      device: {
        isMobile: req.isMobile
      }
    }

    const title = 'SSR'
    const app = 'main'
    const vendor = 'vendor'
    const stylesheet = '/app/main.css'

    res.send(
      html({
        markup: '',
        initialState,
        title,
        app,
        vendor,
        stylesheet
      })
    )
  }
}
