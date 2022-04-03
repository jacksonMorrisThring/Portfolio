const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('open');
});

module.exports = router;