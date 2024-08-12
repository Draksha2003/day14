var express= require('Express')
var app=express();
app.get('view engine','ejs');
app.set('views','./views');
app.get('/myway',function(req,res){
	res.send('index');
});
app.listen(3000);