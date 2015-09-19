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

router.post('/newDay/testDays', function(req, res, next) {
	// create a new day and send a get reqest for that day number

	// fetch count from database
	Day.remove({}).then(function(){
		for(i=1;i<=5;i++){
		var newDay = new Day({number: i});
		// save day to db
		newDay.save()
		};
	}).catch(console.log)
	
})

router.get('/days/:dayNumber', function(req, res, next) {
	// sends back day's hotel, restaurants, and activities

	Day.findOne({number: req.params.dayNumber}).then(function(day){
		res.json(day);
	});
});


router.delete('/days/:dayNumber', function(req, res, next) {
	// delete a day

	Day.remove({number: req.params.dayNumber}, function(err, day){
		if (err)
			console.log(err);
		
		Day.updateDayNumbers(req.params.dayNumber);
		res.send('Day number '+req.params.dayNumber+' has been removed.');
	});
});



router.post('/days/:dayNumber/:type', function(req, res, next) {
	// post to a certain place type on a certain day
})

router.delete('/days/:dayNumber/:type', function(req, res, next) {
	// post to a certain place type on a certain day
})

module.exports = router;