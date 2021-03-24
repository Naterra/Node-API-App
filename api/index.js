const express = require('express');
const router = express.Router();

router.use('/users', require('./usersAPI'));
// router.use('/products', require('./productsAPI'));
// router.use('/events', require('./eventsAPI'));
// router.use('/articles', require('./articlesAPI'));

module.exports = router;
