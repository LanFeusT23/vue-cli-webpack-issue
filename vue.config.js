var path = require('path');

module.exports = {
    chainWebpack: config => {
        config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => {
            console.log(options);
            
            var scssResourceLoader = {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        path.resolve(__dirname, 'src/styles/_colors.scss')
                    ]
                }
            };
            options.loaders.scss.push(scssResourceLoader);
            return options;
        });
      }
  }