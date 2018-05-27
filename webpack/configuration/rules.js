// dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

export default type => {
  const rules = [
    {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }
  ]

  if (!isDevelopment || type === 'server') {
    rules.push({
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader?minimize=true&modules=true&localIdentName=[name]_[local]',
        'sass-loader'
      ]
    })
  } else {
    rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?minimize=true&modules=true&localIdentName=[name]_[local]',
        'sass-loader'
      ]
    })
  }

  return rules
}
