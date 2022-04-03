const router = require('express').Router();
const script = require("../public/javascript/script");

router.get('/', (req, res) => {

    res.render('open', script);
});

module.exports = router;