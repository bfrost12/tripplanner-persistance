var express = require('express');
var router = express.Router();
var Day = require('../models').Day;

router.get('/day', function(req, res, next){
	//send all of the days
	Day.find().then(function(err, data){
		console.log(Day.count({}));
	});
});

router.post('/newDay', function(req, res, next){
	//Whenever you click + day, it will create a new day. The response will be a get request for that day number
	var newDay = new Day();
	newDay.number = Day.count() + 1;
	newDay.save(function(err, day){
		if (err) console.log(err);
		console.log(day.number + " was saved to DB");
		res.json(day);
	});
});


router.get('/day/:dayNumber', function(req, res, next){


});

router.delete('/day/:dayNumber', function(req, res, next){

});


router.post('/day/:dayNumber/:type', function(req, res, next){

});

router.delete('/day/:dayNumber/:type', function(req, res, next){

});

module.exports = router;