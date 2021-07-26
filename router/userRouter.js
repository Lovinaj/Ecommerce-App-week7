const express = require('express');
const controllers = require('../controllers/userControllers');
const router = express.Router();

//POST /users/signup
router.post('/signup', controllers.signup);

router.post('/login', controllers.checkPassword);

router.get('/list', controllers.users)


module.exports = router;