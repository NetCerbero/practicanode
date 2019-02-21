const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helper');

const port = process.env.PORT || 3000;
//definimos la carpeta publica
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/',function(req, res){
	res.render('home',{
		nombre:'Luis yerko'
	});
});
app.get('/about',function(req, res){
	res.render('about')
});
app.listen(port,()=>{
	console.log(`Escuchando peticiones en el puerto ${port}`);
});