// dependencies
const path = require('path')

module.exports = {
  App: path.resolve(__dirname, '../../src/app/'),
  Components: path.resolve(__dirname, '../../src/app/components/'),
  Features: path.resolve(__dirname, '../../src/app/features/'),
  Views: path.resolve(__dirname, '../../src/app/views/'),
  Shared: path.resolve(__dirname, '../../src/shared/'),
  SharedReducers: path.resolve(__dirname, '../../src/shared/reducers/'),
  SharedUtils: path.resolve(__dirname, '../../src/shared/utils/'),
  SharedStyles: path.resolve(__dirname, '../../src/shared/styles/'),
  Server: path.resolve(__dirname, '../../src/server/')
}
