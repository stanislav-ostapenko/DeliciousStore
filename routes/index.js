const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');


router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);



// Do work here 
// router.get('/', (req, res) => {
// 	//res.json(req.query);
// 	res.render('hello', {
// 		name: 'wes',
// 		dog: req.query.dog,
// 		title: 'I love food'
// 	});
// });

// router.get('/reverse/:name', (req, res) => {
//   const reverse = [...req.params.name].reverse().join('');
//   res.send(reverse);
//   // res.send('Hello man');
// });

module.exports = router;
