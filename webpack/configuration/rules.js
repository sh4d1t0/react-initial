// dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

export default type => {
  const rules = [
    {
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    },
    {
      test: /\.(csv|tsv)$/,
      use: ['csv-loader']
    },
    {
      test: /\.xml$/,
      use: ['xml-loader']
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
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?minimize=true&modules=true&localIdentName=[name]_[local]',
          'less-loader'
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
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?minimize=true&modules=true&localIdentName=[name]_[local]',
          'less-loader'
        ]
      }
    )
  }

  return rules
}
