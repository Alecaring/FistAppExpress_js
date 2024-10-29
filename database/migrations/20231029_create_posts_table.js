// database/migrations/20231029_create_posts_table.js
const createPostsTable = (db) => {
    const sql = `
        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    `;

    db.run(sql, (err) => {
        if (err) {
            console.error('Errore nella creazione della tabella:', err.message);
        } else {
            console.log('Tabella "posts" creata con successo.');
        }
    });
};

// Esporta la funzione
module.exports = createPostsTable;
