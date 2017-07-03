# webpackdemo
//http://www.jianshu.com/p/42e11515c10f
注意：安装less-loader时需要重启电脑(windows)才可继续使用，否则，系统默认不安装 报错（可能与电脑也有关）；
所有文件引入都是main.js进行（包括技js，css）；
引入插件可以好多种形式，全局插件可以使用package.json中devDependencies引入即可（插件名称：版本号），然后要npm install 一下 
记得webpack格式（冒号后面加空格，双引号），安装后全局加  var $ = require('jquery') 即可。
注意：引入就要用，不用就不要引入。
配置IP和端口：
webpack.config.js>devServer:{
port: 8090,//配置端口号
host: "192.168.100.4"//配置IP
}
//HtmlWebpackPlugin 插件

Configuration
 可以进行一系列的配置，支持如下的配置信息
title: 用来生成页面的 title 元素    注“<title><%= htmlWebpackPlugin.options.title %></title>”要加
filename: 输出的 HTML 文件名，默认是 index.html, 也可以直接配置带有子目录。
template: 模板文件路径，支持加载器，比如 html!./index.html
inject: true | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。
favicon: 添加特定的 favicon 路径到输出的 HTML 文件中。
minify: {} | false , 传递 html-minifier 选项给 minify 输出
hash: true | false, 如果为 true, 将添加一个唯一的 webpack 编译 hash 到所有包含的脚本和 CSS 文件，对于解除 cache 很有用。
cache: true | false，如果为 true, 这是默认值，仅仅在文件修改之后才会发布文件。
showErrors: true | false, 如果为 true, 这是默认值，错误信息会写入到 HTML 页面中
chunks: 允许只添加某些块 (比如，仅仅 unit test 块)
chunksSortMode: 允许控制块在添加到页面之前的排序方式，支持的值：'none' | 'default' | {function}-default:'auto'
excludeChunks: 允许跳过某些块，(比如，跳过单元测试的块) 
