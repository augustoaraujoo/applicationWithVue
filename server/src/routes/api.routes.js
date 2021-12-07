const router = require('express-promise-router')();

const controllerApi = require('../controllers/user.controller')

router.post('/user', controllerApi.createUser);

module.exports = router;