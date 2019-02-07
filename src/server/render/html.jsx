// Dependencies
import serialize from 'serialize-javascript'
// Environment
const isProduction = process.env.NODE_ENV === 'production'

export default function html(options) {
  const {
    app = 'main',
    title = 'SSR',
    markup,
    initialState,
    vendor = 'vendor'
  } = options
  let path = '/app'
  let link = `<link type="text/css" href="${path}/main.css" media="nope!" onload="this.media='all'" />`

  if (isProduction) {
    path = '/app'
    link = `<link rel="preload" href="${path}/main.css" as="style" onload="this.rel='stylesheet'" />`
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        ${link}
        <link rel="preload" href="/app/${vendor}.bundle.js" as="script">
        <link rel="preload" href="/app/${app}.bundle.js" as="script">
      </head>
      <body>
        <div id="root">${markup}</div>
        <script async>
          window.initialState = ${serialize(initialState)};
        </script>
        <script async src="/app/${vendor}.bundle.js"></script>
        <script async src="/app/${app}.bundle.js"></script>
      </body>
    </html>
  `
}
