/**
 * Created by stasostapenko on 6/14/17.
 */

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: 'Please enter a store name'
	},
	slug: String,
	description: {
		type: String,
		trim: true
	},
	tags: [String]
});

storeSchema.pre('save', (next) => {
	if (!this.isModified('name')) {
		next();
		return;
	}
	this.slug = slug(this.name);
	next();
	//@TODO: check if slugs is unique
});

module.exports = mongoose.model('Store', storeSchema);

