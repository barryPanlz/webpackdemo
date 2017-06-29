# webpackdemo
//http://www.jianshu.com/p/42e11515c10f
注意：安装less-loader时需要重启电脑(windows)才可继续使用，否则，系统默认不安装 报错（可能与电脑也有关）；
所有文件引入都是main.js进行（包括技js，css）；
引入插件可以好多种形式，全局插件可以使用package.json中devDependencies引入即可（插件名称：版本号），
记得webpack格式（冒号后面加空格，双引号），安装后全局加  var $ = require('jquery') 即可。
注意：引入就要用，不用就不要引入。
配置IP和端口：
webpack.config.js>devServer:{
port: 8090,//配置端口号
host: "192.168.100.4"//配置IP
}
