const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Singapore AI',
    },
  },
  configureWebpack: {  
    resolve: {  
      alias: {  
        '@': path.resolve(__dirname, './'),
        '@c': path.resolve(__dirname, 'src/components'),
        '@C': path.resolve(__dirname, 'src/containers'),
        '@img': path.resolve(__dirname, 'src/assets/images'),
      },  
    },
  }
};
