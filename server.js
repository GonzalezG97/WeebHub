const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const handlebars = require('express-handlebars').create({
    layoutsDir: path.join(__dirname, "views"),
    partialsDir: path.join(__dirname, "views/partials"),
    defaultLayout: 'index',
    extname: 'hbs'
});



app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use('/bootstrap', express.static((__dirname + '/node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname + '/public')));


app.use(require('./controllers/routes/anime_routes'));


app.listen(PORT, () => console.log('Now listening'));