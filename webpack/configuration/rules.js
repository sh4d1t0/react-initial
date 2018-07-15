// dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

export default type => {
  const rules = [
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }
  ]

  if (!isDevelopment || type === 'server') {
    rules.push(
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?minimize=true&modules=true&localIdentName=[name]_[local]'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?minimize=true&modules=true&localIdentName=[name]_[local]',
          'sass-loader'
        ]
      }
    )
  } else {
    rules.push(
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?minimize=true&modules=true&localIdentName=[name]_[local]'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?minimize=true&modules=true&localIdentName=[name]_[local]',
          'sass-loader'
        ]
      }
    )
  }

  return rules
}
