let database;

function db(_db) {
    if(_db){
        database = _db
    }
}

module.exports = db;