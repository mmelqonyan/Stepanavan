var jwt = require("jsonwebtoken");

var { jwtSecret } = require("../../config/app");

module.exports = (req,res,next) => {
/*exemple token*/const authHeader = 'eyJhbGciOiJIUzI1NiJ9.NWQwYzlmYWE2ZmQ2OTczZjJiZmYxNWJh.VzcYRLxrMmA0qAK2hcUIRNTTp7K_R-LgohmOw2xXWaE';
//const authHeader = req.get('Authorization')
	if (!authHeader) {
		res.json({token : "token not valid"})
	}

	const token = authHeader.replace("Bearer",'');

	try{
		jwt.verify(token,jwtSecret)
	}
	catch(e){
		if (e instanceof jwt.JsonWebTokenError ) {
			res.json({token : 'invalid token'})
		}
	}
	next();
};