const jwt = require('jsonwebtoken');
const config = require('../config/configRoles.js');
const User = require("../models/user");
module.exports = {
	verifyToken(req, res, next) {
		let tokenHeader = String(req.headers['authorization']);

		if (tokenHeader.split(' ')[0] !== 'Bearer' ) {
			return res.status(400).send({
				auth: false,
				message: "Error",
				errors: "Incorrect token format"
			});
		}

		let token = tokenHeader.split(' ')[1];

		if (!token) {
			return res.status(403).send({
				auth: false,
				message: "Error",
				errors: "No token provided"
			});
		}

		jwt.verify(token, config.secret, (err, decoded) => {
			if (err) {
				return res.status(500).send({
					auth: false,
					message: "Error",
					errors: err
				});
			}
			req.userId = decoded.id;
			next();
		});
	},
	isAdmin(req, res, next) {
		User.findByPk(req.userId)
			.then(user => {
				if (user.role.toUpperCase() === "ADMIN") {
					next();
					return;
				}
				res.status(403).send({
					auth: false,
					message: "Error",
					message: 'Require Admin Role',
				});
				return;
			})
	},
}