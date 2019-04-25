const getData = require('../model/queries/getData');

exports.get = (req, res) => {
    const id = req.url.split('gull/')[1];
    getData.getGull(id)
        .then(gullInfo => {
            console.log(gullInfo, ' IS GULLINFO');
            res.render('profile', { gullInfo });
        })
        .catch(err => console.log('profile getGull error is ', err));
}