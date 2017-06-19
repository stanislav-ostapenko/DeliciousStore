/**
 * Created by stasostapenko on 6/14/17.
 */
// exports.myMiddlewate = (req, res, next) => {
// 	req.name = 'John';
// 	next();
// };
const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
	res.render('index', req);
};

exports.addStore = (req, res) => {
	res.render('editStore', {
		title: 'Add Store'
	});
};

exports.createStore = async (req, res) => {
	const store = await (new Store(req.body)).save();
	req.flash('success', `New ${store.name}  store was created`);
	res.redirect(`/store/${store.slug}`);
	//res.json(req.body);
};

exports.getStores = async (req, res) => {
	const stores = await(Store.find());
	res.render('stores', {title: 'Stores', stores});
};