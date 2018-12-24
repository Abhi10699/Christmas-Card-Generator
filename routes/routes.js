module.exports = (app) => {
	
	app.get('/',function(req,res){
		res.render('Details');
	})

	app.post('/submitDetails',function(req,res){
		console.log(req.body)
		res.render('index',{
			data:{
				to:req.body.to,
				from:req.body.from,
				message:req.body.message
			}
		})
	})

}
