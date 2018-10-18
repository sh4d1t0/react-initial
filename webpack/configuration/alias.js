// dependencies
const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  App: resolveApp('src/app/'),
  Components: resolveApp('src/app/components/'),
  Features: resolveApp('src/app/features/'),
  Views: resolveApp('src/app/views/'),
  Shared: resolveApp('src/shared/'),
  SharedReducers: resolveApp('src/shared/reducers/'),
  SharedUtils: resolveApp('src/shared/utils/'),
  SharedStyles: resolveApp('src/shared/styles/'),
  Server: resolveApp('src/server/')
}
