const dbConnection = require('../database/db_connection');

const getGull = (id) => {
    return new Promise((resolve, reject) => {
        dbConnection.query('SELECT * FROM gulls where id=$1', [id])
        .then(res => resolve(res.rows[0]))
        .catch(err => reject(err))
    })
};

const getGulls = () => {
    return new Promise((resolve, reject) => {
        dbConnection.query('SELECT id, name, image_url FROM gulls')
        .then(res => resolve(res.rows))
        .catch(err => reject (err))
    })
}

module.exports = {
    getGull,
    getGulls
};