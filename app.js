var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
	res.render('home.ejs');
});

app.get('/fallinglovewith/:thing', function(req,res){
	var thing = req.params.thing;
	res.render('love.ejs', {thingVar: thing});
});

app.get('/posts', function(req,res){
	var posts = [
		{title: 'Post1', author: 'Susy'},
		{title: 'My adorable pet bunny', author: 'Charlie'},
		{title: 'Can you believe this pomsky?', author: 'Colt'}
	];
	//first post is how we called it inside the template
	//second post is variable
	res.render('posts.ejs', {posts: posts})
});

app.listen(4000, function(){
	console.log('server is up n running');
}); 