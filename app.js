// app.js

const express = require('express');
const app = express();
const path = require('path');

// Imposta la cartella delle viste
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

// Imposta la cartella pubblica
app.use(express.static(path.join(__dirname, 'public')));

// Importa i controller
const HomeController = require('./controllers/HomeController');
const AboutController = require('./controllers/AboutController');

// Definisci le rotte
app.get('/', HomeController.index);
app.get('/about', AboutController.index);

// Avvia il server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});
