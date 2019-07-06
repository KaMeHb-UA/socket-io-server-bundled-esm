const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'socket.io.js'
    },
    node: {
        Buffer: false
    },
    externals: {
        Buffer: "root Buffer"
    }
}
