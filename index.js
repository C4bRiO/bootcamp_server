var express = require('express');
var cors = require('cors');
var app = express();


var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


//rutas
var routes = require('./server/routes');

//controller de eventos
var eventos = require('./server/controllers/evento');

//servir contenido estatico del directorio
app.use(express.static(__dirname));

//enable CORS
app.use(cors());

//para los logs
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(methodOverride());

//para las rutas
app.use(routes(express.Router()));

var models = require('./server/models');

models.sequelize
    .authenticate()
    .then(function(){
        console.log("Conexion realizada con exito");
    })
    .catch(function(error){
        console.log("Error" + error);
    });

app.listen(3000,function(){
    console.log("App listening on port 3000");
});