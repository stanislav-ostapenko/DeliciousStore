const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers'); 


router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/stores/:storeId', catchErrors(storeController.getStore));
router.get('/stores/:id/edit', catchErrors(storeController.editStore));


router.get('/add', storeController.addStore);
router.post('/add/:id', storeController.updateStore);
router.post('/add', catchErrors(storeController.createStore));




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
