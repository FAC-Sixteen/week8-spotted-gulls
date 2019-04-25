const dbConnection = require('../database/db_connection');

const postGull = (dataObject) => {
    return new Promise((resolve, reject) => {
        dbConnection.query('INSERT INTO gulls (name, image_url, seasons_lived, breed, fish_chips, wingspan, klepto, celebrity_lookalike, gullibility, fact, quote) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id',
        [dataObject.name, dataObject.image, dataObject.seasons, dataObject.breed, dataObject.fish_chips, dataObject.wingspan, dataObject.klepto, dataObject.celebrity_lookalike, dataObject.gullibility, dataObject.fact, dataObject.quote])
        .then(res => resolve(res.rows[0].id))
        .catch(err => reject(err))
    })
};

module.exports = {
    postGull
};