var express = require('express');
var router = express.Router();
var Day = require('../models').Day;



router.get('/days', function(req, res, next) {
	// sends all of the days

	Day.find(function(err, data) {
		res.json(data);
		// res.send(count)
	})

})

router.post('/newDay', function(req, res, next) {
	// create a new day and send a get reqest for that day number

	// fetch count from database
	Day.count({}).then(function(count) {
		// create a new day, and use collection count to set the day number
		var newDay = new Day( {number: count + 1});
		// save day to db
		newDay.save().then(function(day) {
			res.json(day);
		})
	}).catch(console.log)
	
})


router.get('/days/:dayNumber', function(req, res, next) {
	// sends back day's hotel, restaurants, and activities
})


router.delete('/days/:dayNumber', function() {
	Days.find({ number: {$gt: 1}})
	// delete a day
})


router.post('/days/:dayNumber/:type', function(req, res, next) {
	// post to a certain place type on a certain day
})

router.delete('/days/:dayNumber/:type', function(req, res, next) {
	// post to a certain place type on a certain day
})






module.exports = router;