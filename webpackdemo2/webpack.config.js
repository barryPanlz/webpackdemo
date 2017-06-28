module.exports = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
	output: {
    	path: __dirname + "/public",//打包后的文件存放的地方
		filename: "bundle.js"//打包后输出文件的文件名
	},
	module: {//在配置文件里添加JSON loader
	    loaders: [
	      {
	        test: /\.json$/,
	        loader: "json-loader"
	      },
	      {
	        test: /\.less$/,
	        loader: 'style-loader!css-loader!less-loader'//添加对样式表的处理modules为模块，
	      },
	    ]
	},
	devServer: {
	    contentBase: "./public",//本地服务器所加载的页面所在的目录
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
	} 
}