/**
 * Created by parkjaesung on 2017. 2. 21..
 */
var express = require('express');
var router = express.Router();

router.get('/:email/:orderUUID', function (req, res) {
    res.render('reply_letter' , {'email' : req.params.email, 'orderUUID' : req.params.orderUUID});
});

module.exports = router;