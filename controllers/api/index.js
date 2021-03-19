const router = require('express').Router();
const { Users, Session, Comments, Posts } = require('../../models');
const userRoutes = require('./userRoutes');
const sessionRoutes = require();
const commentRoutes = require();
const postRoutes = require();

router.use('/users', userRoutes);
router.use('/sessions', sessionRoutes);
router.use('/comments', commentRoutes);
router.use('/post', postRoutes);

module.exports = router;
