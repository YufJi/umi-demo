const path = require('path');

// ref: https://umijs.org/config/
export default {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  extraPostCSSPlugins: [
    require('autoprefixer')
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/common/Loading/index.js',
      },
      title: 'umi-test',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: true,
      fastClick: true,
    }],
  ],
}
