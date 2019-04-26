const getData = require('../model/queries/getData');

exports.get = (req, res) => {
    const id = req.url.split('gull/')[1];
    getData.getGull(id)
        .then(gullInfo => {
            getData.getGulls()
                .then(gullsData => res.render('profile', {gullInfo, gullsData}))
                .catch(err => console.log(err))
            // res.render('profile', { gullInfo });
        })
        .catch(err => console.log('profile getGull error is ', err));
}

// getData.getGulls()
//     .then(gullsData => res.render('home', {gullsData}))
//     .catch(err => console.log(err))