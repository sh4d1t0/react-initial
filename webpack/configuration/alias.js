// dependencies
const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  App: resolveApp('src/app/'),
  Components: resolveApp('src/app/components/'),
  Api: resolveApp('src/app/features/api'),
  Context: resolveApp('src/app/features/context'),
  Views: resolveApp('src/app/views/'),
  Shared: resolveApp('src/shared/'),
  SharedComponents: resolveApp('src/shared/components'),
  SharedUtils: resolveApp('src/shared/utils/'),
  SharedStyles: resolveApp('src/shared/styles/'),
  Server: resolveApp('src/server/')
}
