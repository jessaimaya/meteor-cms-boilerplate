Router.route('/login', function(){
    this.render("login");
});

Router.route('/registro', function(){
    this.render("registro");
});

Router.route('/', function(){
    this.render("index");
});


