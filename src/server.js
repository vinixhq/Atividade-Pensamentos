const express = require("express");
const handlebars = require("express-handlebars");
require("./database/index");
const path = require("path");

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}));

// Importar as Rotas:
const thoughtRoutes = require("./routes/thoughtsRoutes");
const usersRoutes = require("./routes/usersThoughts");

// Importar engine handlebars:
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.set("views", path.join(__dirname, "views/"));

// Utilização de arquivos estáticos:
app.use(express.static(__dirname + '/public'));

handlebars.create({
    partialsDir: path.join(__dirname, "views/partials")    
});

// Utilizar os arquivos de rotas:
app.use(thoughtRoutes);
app.use(usersRoutes);

app.listen(3333, console.log("Servidor está sendo executado na porta 3333"));

















// app.get('/home', (request, response) => {
//     return response.render('home')
// });

// app.get('/cadastro', (request, response) => {
//     return response.render('cadastro')
// })