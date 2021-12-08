
const router = require('express-promise-router')();
const apiController = require('../controllers/user.controller');

router.post('/create', apiController.createUser);
router.get('/select', apiController.selectAllUsers);
router.get('/selectbyid/:id', apiController.listUserById)
router.put('/updateuserbyid/:id', apiController.updateUserById)
router.delete('/delete/:id', apiController.deleteUserById);
module.exports = router;