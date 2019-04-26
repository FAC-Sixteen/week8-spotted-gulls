const getData = require('../model/queries/getData');

exports.get = (req, res) => {
    getData.getGulls()
    .then(gullsData => res.render('home', {gullsData}))
    .catch(err => console.log(err))
};