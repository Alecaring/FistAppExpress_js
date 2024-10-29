// migrate.js
const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const config = require('../config/config'); // Importa il file di configurazione

const migrationsDir = path.join(__dirname, '../../database/migrations');

// Usa il nome del database dal file di configurazione
const dbName = config.dbName; // Questo dovrebbe essere 'instagram.db'
const dbPath = path.join(__dirname, '../../database', dbName);

// Crea una connessione al database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Errore durante la connessione al database:', err);
    } else {
        console.log(`Connesso al database ${dbName}`);
    }
});

// Leggi tutti i file nella directory delle migrazioni
fs.readdir(migrationsDir, (err, files) => {
    if (err) {
        console.error('Errore nella lettura della directory delle migrazioni:', err);
        return;
    }

    files.forEach((file) => {
        const migration = require(path.join(migrationsDir, file));
        migration(db); // Passa il database alla migrazione
    });

    db.close(); // Chiudi la connessione al database qui
});
