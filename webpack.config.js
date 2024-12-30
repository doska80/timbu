module.exports = {
    entry: "./index.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
              test: /\.timbu$/,
              use: 'babel-loader'  
            }
        ]
    }
}