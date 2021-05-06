const path = require('path');
const express = require('express');
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});
const expbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const Handlebars = require('handlebars')
    // const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const app = express();
const PORT = process.env.PORT || 3002;

const hbs = expbs.create({
    defaultLayout: 'index',
    layoutsDir: path.join(__dirname, 'views'),
    partialsDir: path.join(__dirname, 'views/partials'),

    helpers: {}
});

// const handlebars = require('express-handlebars').create({
//     layoutsDir: path.join(__dirname, "views"),
//     partialsDir: path.join(__dirname, "views/partials"),
//     defaultLayout: 'index',
//     extname: 'hbs'
// });
dotenv.config();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
// app.set('view engine', 'hbs');
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use('/bootstrap', express.static((__dirname + '/node_modules/bootstrap/dist')))
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});