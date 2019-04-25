const dbConnection = require('../database/db_connection');

const getGull = (id) => {
    return new Promise((resolve, reject) => {
        dbConnection.query('SELECT * FROM gulls where id=$1', [id])
        .then(res => resolve(res.rows[0]))
        .catch(err => reject(err))
    })
};

module.exports = {
    getGull
};