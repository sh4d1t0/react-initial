const html = ({ app, markup, stylesheet, vendor }) => `
  <!DOCTYPE html>
  <html>

  <head>
    <meta charset="utf-8" />
    <title><%= htmlWebpackPlugin.options.title %></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link type="text/css" rel="stylesheet" href="${stylesheet}" />
  </head>

  <body>
    <div id="root">${markup}</div>
    <script src="/app/${vendor}.bundle.js"></script>
    <script src="/app/${app}.bundle.js"></script>
  </body>

  </html>
  
`
export default html
