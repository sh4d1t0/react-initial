// dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Autoprefixer = require('autoprefixer')
const PostCssImport = require('postcss-import')
// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

function rules(type) {
  const rule = [
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          cacheDirectory: true
        }
      }
    },
    {
      test: /\.(eot|otf|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/fonts/'
      }
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/images/'
      }
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
    rule.push(
      {
        test: /\.css$/,
        include: [
          /[\\/]src\/app\/components[\\/]/,
          /[\\/]src\/shared\/components[\\/]/,
          /[\\/]src\/shared\/styles[\\/]/
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]_[hash:base64]',
              importLoaders: 2,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                new Autoprefixer({
                  grid: true
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: [
          /[\\/]src\/app\/components[\\/]/,
          /[\\/]src\/shared\/components[\\/]/,
          /[\\/]src\/shared\/styles[\\/]/
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]_[hash:base64]',
              importLoaders: 2,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                new Autoprefixer({
                  grid: true
                })
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        include: [
          /[\\/]src\/app\/components[\\/]/,
          /[\\/]src\/shared\/components[\\/]/,
          /[\\/]src\/shared\/styles[\\/]/
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]_[hash:base64]',
              importLoaders: 2,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                new Autoprefixer({
                  grid: true
                })
              ]
            }
          },
          'less-loader'
        ]
      }
    )
  } else {
    rule.push(
      {
        test: /\.css$/,
        include: [
          /[\\/]src\/app\/components[\\/]/,
          /[\\/]src\/shared\/components[\\/]/,
          /[\\/]src\/shared\/styles[\\/]/
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]_[hash:base64]',
              importLoaders: 2,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                (new PostCssImport({ root: loader.resourcePath }),
                new Autoprefixer({
                  grid: true
                }))
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: [
          /[\\/]src\/app\/components[\\/]/,
          /[\\/]src\/shared\/components[\\/]/,
          /[\\/]src\/shared\/styles[\\/]/
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]_[hash:base64]',
              importLoaders: 2,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                new PostCssImport({ root: loader.resourcePath }),
                new Autoprefixer({
                  grid: true
                })
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        include: [
          /[\\/]src\/app\/components[\\/]/,
          /[\\/]src\/shared\/components[\\/]/,
          /[\\/]src\/shared\/styles[\\/]/
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]_[hash:base64]',
              importLoaders: 2,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                new PostCssImport({ root: loader.resourcePath }),
                new Autoprefixer({
                  grid: true
                })
              ]
            }
          },
          'less-loader'
        ]
      }
    )
  }

  return rule
}

module.exports = rules
