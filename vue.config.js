let {indexData, navList, listData} = require('./src/assets/api-data.js');
module.exports={
    devServer:{
        port:8088,
        open:true,
        before(app){
            //注册接口
            app.get('/api/register',(req,res)=>{
                let usersPoor = [
                    {userName:'jingdong',password:'123456'},
                    {userName:'volodya',password:'123456'},
                ];
                const {userName,password} = req.query;
                const userLength = usersPoor.filter(v => v.userName === userName).length;
                if(userLength <= 0){
                    res.json({
                        status:0,
                        success:true,
                        message:'注册成功'
                    });
                    return
                }
                res.json({
                    status:-1,
                    success:false,
                    message:'用户名已存在'
                })
            });
            //登录接口
            let tokenKey = 'mima-mima'
            app.get('/api/login',(req,res)=>{
                const {userName,password} = req.query;
                if(userName === 'jingdong' && +password === 123456 || userName ==='voloday' && +password === 123456){
                    res.json({
                        status:0,
                        message:'登录成功',
                        token :`${tokenKey}-${new Date().getTime()*3600000}`
                    })
                }else{
                    res.json({
                        statues:-1,
                        message:'账号或密码错误'
                    })
                }
                
            });
            //首页数据
            app.get('/api/banner',(req,res)=>{
                res.json({
                    status:0,
                    indexData
                })
            });
            //分类页tab数据
            app.get('/api/tab',(req,res)=>{
                res.json({
                    status:0,
                    navList,
                })
            })
            //分类页商品数据
            app.get('/api/list-data', (req,res)=>{
                
                let result =listData[req.query.index];
                res.json({
                    status:0,
                    result
                })
            })
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
