
// Route for /dashboard/   (main dashboard page)
// Route for /dashboard/edit/:id    (editing individual posts)
const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll(
            {
                where: {
                    user_id: req.session.user_id
                }
            }
        );

        const posts = postData.get({ plain: true });

        res.render('dashboard', {
           ...posts,
           logged_in: req.session.logged_in
         });
       } catch (err) {
         res.status(500).json(err);
       }
    });


    // Next route can be  /edit/:id
    // Deliver editPost.handlebars page 