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
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: true,
              localIdentName: '[name]_[local]',
              importLoaders: 2,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                // eslint-disable-next-line
                require('autoprefixer')({
                  grid: true
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: true,
              localIdentName: '[name]_[local]',
              importLoaders: 2,
              sourceMap: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: true,
              localIdentName: '[name]_[local]',
              importLoaders: 2,
              sourceMap: false
            }
          },
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
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: true,
              localIdentName: '[name]_[local]',
              importLoaders: 2,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                // eslint-disable-next-line
                require('autoprefixer')({
                  grid: true
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: true,
              localIdentName: '[name]_[local]',
              importLoaders: 2,
              sourceMap: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: true,
              localIdentName: '[name]_[local]',
              importLoaders: 2,
              sourceMap: false
            }
          },
          'less-loader'
        ]
      }
    )
  }

  return rules
}
