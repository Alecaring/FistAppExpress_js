// app/models/BaseModel.js
class BaseModel {
    constructor(db) {
        this.db = db;
    }

    static belongsTo(model, foreignKey) {
        return function (id, callback) {
            const sql = `SELECT * FROM ${model.tableName} WHERE id = ?`;
            this.db.get(sql, [id], callback);
        };
    }

    static hasMany(model, foreignKey) {
        return function (id, callback) {
            const sql = `SELECT * FROM ${model.tableName} WHERE ${foreignKey} = ?`;
            this.db.all(sql, [id], callback);
        };
    }
}

module.exports = BaseModel;
