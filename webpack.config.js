// webpack.config.js

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 웹팩 모드 설정
  entry: './src/index.js', // 진입 파일
  output: {
    filename: 'bundle.js', // 번들 파일 이름
    path: path.resolve(__dirname, 'build'), // 번들 파일 경로
    publicPath: '/', // public 폴더 경로에서 파일을 로드
    assetModuleFilename: 'assets/images/[name][ext][query]' // 이미지 파일 경로 설정
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // 이미지 파일 로더
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext][query]' // 이미지 파일 경로 설정
        }
      },
      {
        test: /\.(js|jsx)$/, // 자바스크립트 파일 로더
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/, // 스타일 파일 로더
        use: [
          {
            loader: MiniCssExtractPlugin.loader // CSS 파일 추출
          },
          'css-loader', // CSS 해석
          'sass-loader' // SCSS 해석
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // CSS 파일 추출 플러그인
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new HtmlWebPackPlugin({
      // HTML 파일 생성 플러그인
      template: 'public/index.html',
      filename: 'index.html',
      inject: true
    })
  ],
  devServer: {
    static: path.resolve(__dirname, 'build'), // 서버 정적 파일 경로 설정
    historyApiFallback: true, // 모든 요청을 index.html로 리다이렉트
    port: 9000, // 개발 서버 포트
    hot: true // HMR 활성화
  }
};
