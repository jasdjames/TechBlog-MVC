const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

// const router = require('express').Router();
// const { Users, Session, Comments, Posts } = require('../models');
// const userRoutes = require('./api/userRoutes');
// const sessionRoutes = require();
// const commentRoutes = require();
// const postRoutes = require();

// router.use('/users', userRoutes);
// router.use('/sessions', sessionRoutes);
// router.use('/comments', commentRoutes);
// router.use('/post', postRoutes);

// module.exports = router;
