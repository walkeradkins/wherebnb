const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require('./listings.js');
const bookingsRouter = require('./bookings.js');
const reviewsRouter = require('./reviews.js')
const imagesRouter = require('./images')


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/listings', listingsRouter);
router.use('/bookings', bookingsRouter);
router.use('/reviews', reviewsRouter);
router.use('/images', imagesRouter);


// // test api connection to front end
// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;