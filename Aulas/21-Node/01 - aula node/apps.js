const express = require('express');
const apps = express();
const bodyparser = require('body-parser');
const path = require('path');
apps.listen('3000',()=>{
	console.log('Rodando!');
});
//body Parser
apps.set('view engine','ejs');
apps.set('views',path.join(__dirname,'views'));
apps.use(bodyparser.json());
apps.use(bodyparser.urlencoded({extend:false}));
apps.use(express.static(path.join(__dirname,'public')));

apps.get('/',function(req,res){	
	res.render('index',{lista:[{'telefone':'1111111'},{'telefone':'222222'},{'telefone':'889923131'}],'nome':'Hagleyson','cargo':'Programador'});
});
apps.get('/sobre',function(req,res){
	res.render('sobre',{})
});