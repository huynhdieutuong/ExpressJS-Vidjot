const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const ideasRoute = require('./routes/ideas.route');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/vidjot-dev', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.render('index', {title: 'Welcome'}));
app.get('/about', (req, res) => res.render('about', {title: 'About'}));

app.use('/ideas', ideasRoute);


// Port
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));