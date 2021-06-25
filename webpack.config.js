module.exports = {
    mode: 'development',
    entry: './index.js',
    module: {
        rules: [{
            // 当打包后缀遇到js的时候，不要直接打包
            test: /\.js$/,
            use: {
                // 用babel-loader把这个js文件load到babel里面，让babel运行一下再用preset react选项去打包
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }]
    }
}