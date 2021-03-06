const bcrypt = require('bcrypt');

module.exports.genSalt = async (a) => {
	return new Promise((resolve, reject) => {
		return bcrypt.genSalt(a, (err, res) => {
			if(err) return reject(err);
			return resolve(res);
		});
	});
};

module.exports.hash = async (plain, rounds) => {
	return new Promise((resolve, reject) => {
		return bcrypt.hash(plain, rounds, (err, res) => {
			if(err) return reject(err);
			return resolve(res);
		});
	});
};

module.exports.compare = async (a, b) => {
	return new Promise((resolve, reject) => {
		return bcrypt.compare(a, b, (err, res) => {
			if(err) return reject(err);
			return resolve(res);
		});
	});
};
