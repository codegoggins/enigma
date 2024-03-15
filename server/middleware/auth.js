const jwt = require("jsonwebtoken");

const userLogin = async (req, res, next) => {
	let token = req.header("auth-token");
	if (!token) {
		return res.status(401).json({
			success: false,
			message: "Access denied",
		});
	}
	token = token.replace("Bearer ", "");
	try {
		const verified = jwt.verify(token, process.env.JWT_SECRET);
		req.user = verified;
		next();
	} catch (err) {
		res.status(200).json({
			success:false,
			message: err.message,
		});
	}
};