// @flow
// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

export default (): mixed => {
  const performance = {
    hints: !isDevelopment ? false : 'warning',
    maxAssetSize: 100000,
    maxEntrypointSize: 400000,
    assetFilter: function(assetFilename: string): mixed {
      // Function predicate that provides asset filenames
      return (
        assetFilename.endsWith('.css') ||
        assetFilename.endsWith('.js') ||
        assetFilename.endsWith('.jsx')
      )
    }
  }

  return performance
}
