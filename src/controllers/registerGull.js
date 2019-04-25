const postData = require('../model/queries/postData');
const qs = require('query-string');

exports.post = (req, res) => {
    let data = '';

    req.on('data', chunk => {
        data += chunk;
    })

    req.on('end', () => {
        postData.postGull(qs.parse(data))
        .then(responseID => {
            res.redirect(`/gull/${responseID}`)
        
        })
        .catch(error => {
            res.redirect('/register');
        })
    })     
}