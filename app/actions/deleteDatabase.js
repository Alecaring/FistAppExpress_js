// deleteDatabase.js

const fs = require('fs');
const path = require('path');
const config = require('../config/config');

// Nome del database
const dbName = config.dbName;
const dbPath = path.join(__dirname, '../../database', dbName);

// Funzione per cancellare il database
fs.unlink(dbPath, (err) => {
    if (err) {
        console.error('Errore durante la cancellazione del database:', err);
        return;
    }
    console.log('Database cancellato con successo.');
});
