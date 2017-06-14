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