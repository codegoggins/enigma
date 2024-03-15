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

const adminLogin = async (req, res, next) => {
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
        if (verified.role === 'admin') { 
            req.user = verified;
            next();
        } else {
            return res.status(403).json({
                success: false,
                message: "Access Denied",
            });
        }
    } catch (err) {
		res.status(200).json({
			success:false,
			message: err.message,
		});
    }
};

module.exports = {userLogin,adminLogin};