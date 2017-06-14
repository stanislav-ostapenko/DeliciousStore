/**
 * Created by stasostapenko on 6/14/17.
 */
// exports.myMiddlewate = (req, res, next) => {
// 	req.name = 'John';
// 	next();
// };

exports.homePage = (req, res) => {
	res.render('index', req);
};

exports.addStore = (req, res) => {
	res.render('editStore', {
		title: 'Add Store'
	});
};

exports.createStore = (req, res) => {
	res.json(req.body);
};