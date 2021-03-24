const express = require('express');
const router = express.Router();

//tmp. data
const users = [
    { userName: 'Peter Pen', age: 20 },
    { userName: 'Mary K.', age: 35 }
    ];

/**
 * Get Users API endpoint
 * /api/users
 * /api/users?name=mary&age=20
 */
router.get('/', (req, res, next) => {
    let { name, age, other } = req.query;

    if (name) {
        const filteredUsers = users.filter(item => {
            const userName = item.userName.toLowerCase();
            return userName.includes(name.toLowerCase());
        });
        return res.status(200).json(filteredUsers);
    }

    return res.status(200).json(users);
});


/**
 * Get User API endpoint
 * /api/user/25
 */
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    return res.status(200).json({ id });
});

module.exports = router;
