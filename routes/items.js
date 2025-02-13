var express = require('express');
var router = express.Router();
const ItemModel = require('../models/item');
const ItemController = require('../models/User')

// Get New Item page
router.get('/new', function(req, res){
	res.render('create-item');
});

// Create new item/
router.post('/new', function(req, res){
	const userId = req.user._id;
	const name = req.body.name;
	const imgUrl = req.body.imgUrl;

  let errors;

	if (errors){
		res.render('create-item',{
			errors:errors
		});
	} else {
		var newItem = new ItemModel({
            userId: userId,
            name: name, 
            imgUrl: imgUrl,
		});

		ItemController.create(newItem, function(err, item){
			if(err) {
                throw err;
            }
			console.log(item);
		});

		req.flash('success_msg', 'You succesfully created an item');

		res.redirect('/');
	}
});

module.exports = router;