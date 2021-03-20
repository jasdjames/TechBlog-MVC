// Here is where I'm lost!!!

const router = require('express').Router();
const { Comments, Posts, Users } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all sessions and JOIN with user data
    const pData = await Posts.findAll({
      include: [
        {
          model: Users,
        },
      ],
    });

    // Serialize data so the template can read it
    const post = pData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('home', {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const pData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });

    const post = projectData.get({ plain: true });

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await Users.findByPk(req.session.userId, {
      attributes: { exclude: ['password'] },
    });
    console.log('USer data!!', userData);

    const user = userData.get({ plain: true });
    console.log('User found ???', user);

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    console.log('THIS IS ERR!!!!', err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/newBlog', (req, res) => {
  res.render('newBlog');
});

router.post('/saveBlog', (req, res) => {
  console.log('This is the body!!!', req.body);
  console.log('USER!!!', req.session.userId);

  Posts.create({
    body: req.body.body,
    title: req.body.title,
    userId: req.session.userId,
  }).then(function (data) {
    console.log('Data we just saved!!!', data);
    res.json(data);
  });
});

router.get('/dashboard', (req, res) => {
  Posts.find({
    where: {
      userId: req.session.userId,
    },
  }).then(function (AllPosts) {
    var hbsObj = {
      posts: AllPosts,
    };

    res.render('dashboard', hbsObj);
  });
});

module.exports = router;
