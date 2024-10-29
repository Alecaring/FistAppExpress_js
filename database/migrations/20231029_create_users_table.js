// database/migrations/20231029_create_users_table.js
const createUsersTable = (db) => {
    const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
        )
    `;

    db.run(sql, (err) => {
        if (err) {
            console.error('Errore nella creazione della tabella:', err.message);
        } else {
            console.log('Tabella "users" creata con successo.');
        }
    });
};

// Esporta la funzione
module.exports = createUsersTable;
