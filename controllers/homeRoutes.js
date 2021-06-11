// Routes to add comments

// Route for /  (delivers homepage)
// Route for /post/:id  (delivers ability to comment on single post)
 const router = require('express').Router();
 const { Post, Comment, User } = require('../models');
 const withAuth = require('../utils/auth');

 router.get('/', withAuth, async (req, res) => {
     try {
         const postData = await Post.findAll();

         const posts = postData.get({ plain: true });

         res.render('homepage', {
            ...posts,
            logged_in: req.session.logged_in
          });
        } catch (err) {
          res.status(500).json(err);
        }
     });

     // Route should be  /post/:id
     // This will deliver comments.handlebars page