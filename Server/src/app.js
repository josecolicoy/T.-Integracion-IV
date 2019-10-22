const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var Post = require("../models/post");
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json()) //Trabajar con datos json
app.use(cors())  
// servidor y la BD
const server = 'localhost:27017'; 
const database = 'arque';    
//crear la conexion con la BD
app.listen(process.env.PORT || 8081)
var mongoose = require('mongoose');
mongoose.connect(`mongodb://${server}/${database}`);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "error en conexión!"));
db.once("open", function(callback){
  console.log("Conexión exitosa!");
});

// agregar un nuevo dato
app.post('/arque', (req, res) => {
  console.log(req.body);
  var db = req.db;
  var id = req.body.id;
  var datos  = req.body.datos;
  var new_post = new Post({
    id: id,
    datos: datos
  })
// Se guarda e datos, con los datos obtenidos desde post en la
//estructura del json definida en post.js
  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Dato guardado!'
    })
  })
})


// Obtener los datos
// app.get('/posts', (req, res) => {
//   Post.find({}, 'title description', function (error, posts) {
//     if (error) { console.error(error); }
//     res.send({
//       posts: posts
//     })
//   }).sort({_id:-1})
// })
