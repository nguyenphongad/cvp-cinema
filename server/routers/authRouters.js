const express = require('express');
const router = express.Router();
const cors = require('cors');
const { RegisterUser, LoginUser, GetDataProfile } = require('../controllers/authControllers');
const MiddleAuthToken = require('../middlewares/authMiddleware');


//middleware
router.use(
    cors({
        origin: 'http://localhost:8823',
        credentials: true,
        headers: { 'Content-Type': 'application/json' }
    })
);

router.post('/register', RegisterUser);

router.post('/login', LoginUser);
router.get('/profile', MiddleAuthToken, GetDataProfile);

module.exports = router;