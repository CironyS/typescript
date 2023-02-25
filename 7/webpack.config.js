const path = require('path');

// 导出配置项
module.exports = {
    /**
     * 编译入口文件
     * 程序打包的起点即入口文件
     */
    entry: './src/index.ts',
    // 输出文件
    output: {
        // 编译后输出的文件名
        filename: 'app.js',
        /**
         * 编译后文件存放的路径（该路径为绝对路径）
         * __dirname：编译后文件位置
         * 'public/dist'：编译后具体路径
         */
        // path编译后文件解析命令设置读取位置
        path: path.resolve(__dirname, 'public/dist'),
        // 没有编译在内存中进行设置读取位置
        publicPath: '/dist/',
    },
    /**
     * 定义处理规则
     */
    module: {
        // 处理规则
        rules: [
            {
                // 要处理那种文件
                test: /\.tsx?$/,
                // 要处理使用的包
                use: 'ts-loader',
                // 排除不需要处理的文件（文件夹）
                exclude: /node_modules/,
            },
        ],
    },
    /**
     * 模块在解析的时候要解析下面的文件
     */
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
