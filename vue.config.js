module.exports={
  devServer: {
    before(app){
      app.get('/api/search/keywords', (req, res) => {
        res.json({
          data:["1111111111","222222222222",'333333333333','44444444444','5555555555','6666666666666','77777777777','88888888888'],
          // data:req,
          code: 0,
          isLogin: true,
        })
      })
    } 
  }
}