// I AM THE ROUTER-ish

const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home');
const register = require('./register');
const registerGull = require('./registerGull');
const profile = require('./profile');
// const displayGulls = require('./displayGulls');
// const error = require('./error');

router.get('/', home.get);
router.get('/register', register.get);
router.post('/register-gull', registerGull.post);
router.get('/gull/:id', profile.get);
// router.get('/display-gulls', displayGulls.get);
// router.use(error.client);
// router.use(error.server);

module.exports = router;