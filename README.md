created by 1912 at 2019-11-21

#### 常用命令
```
npm install
npm start       // 项目启动
npm run build   // 打包部署
npm run eject   // 暴露webpack等配置文件
```


#### Redux数据架构

* redux
  * createStore,  用于创建唯一的store
  * combineReducers,  用于合并多个Reducer纯函数
  * applyMiddleware  使用中间件，比如使用redux-thunk来解决异步数据请求
* react-redux
  * <Provider store={store}>
  * connect(mapStateToProps, mapActionToProps)(UiComponent)
* redux-thunk
  * 来解决异步数据请求
  * 异步数据需要三个action  {type:'', payload: ''}
  * 同步数据只需要一个action

#### Webpack常用配置

* 设置 @ 绝对路径：在 /config/webpack.config.js 中配置
```
alias: {
  '@': path.resolve(__dirname, '../src')
},
```
* 修改devServer的端口号：在 /scripts/start.js 中配置
```
// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8000;
const HOST = process.env.HOST || '0.0.0.0';
```
