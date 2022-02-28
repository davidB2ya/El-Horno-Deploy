const { Router } = require('express');
const router = Router()

// Import Controllers
const LoginRegisterControl = require('../controllers/loginRegisterControl')
const SalesRegisterControl = require('../controllers/salesRegisterControl')


// Routes
router.use('/api/register', LoginRegisterControl.registerRouter );
router.use('/api/login', LoginRegisterControl.loginRouter );
router.use('/api/new/sales', SalesRegisterControl.salesRouter );

module.exports = router