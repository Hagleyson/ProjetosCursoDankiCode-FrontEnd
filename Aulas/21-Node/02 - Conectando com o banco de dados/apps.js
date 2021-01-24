const express = require('express');
const apps = express();
const bodyparser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
apps.listen('3000',()=>{
	console.log('Rodando!');
});
//body Parser
apps.set('view engine','ejs');
apps.set('views',path.join(__dirname,'views'));
apps.use(bodyparser.json());
apps.use(bodyparser.urlencoded({extend:false}));
apps.use(express.static(path.join(__dirname,'public')));

//conexao com o banco de dados
const db =mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'node'
});
db.connect(function(err){
	if(err){
		console.log('Não foi possivel conectar no banco' + err);
	}
	/*var sql = "SELECT * FROM clientes";
	db.query(sql,function(err,results){
		console.log(results);
	})*/
})
//configuração de rotas get e post
apps.get('/',function(req,res){	
	//let variável disponível somente dentro desse escopo
	//listando no index
	let query = db.query("SELECT * FROM clientes",function(err,results){
		res.render('index',{lista:results});
	})
});
apps.get('/cadastro',function(req,res){
	res.render('cadastro',{});
});

apps.post('/cadastro',function(req,res){
	console.log("Cadastro Realizado Com Sucesso!!!")
	let nome = req.body.nome;
	let sobrenome = req.body.sobrenome;
	let empresa = req.body.empresa;
	db.query("INSERT INTO clientes(nome,Sobrenome,Empresa) VALUES(?,?,?)",[nome,sobrenome,empresa],function(err,results){})
	res.render('cadastro',{});
});