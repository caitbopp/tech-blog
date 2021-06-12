const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');


// Route for /dashboard/   (main dashboard page)
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll(
            {
                where: {
                    user_id: req.session.user_id
                }
            }
        );

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route for /dashboard/edit/:id    (editing individual posts)
// Deliver editPost.handlebars page 

router.put('/edit/:id', async (re, res) => {
    try {
        const editedPost = await Post.update(req.body,
            {
                where: {
                    user_id: req.params.id,
                },
            });

        if (!editedPost) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(editedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
