var mongoose = require("mongoose");



var jwt = require("jsonwebtoken");

var { jwtSecret } = require("../../config/app");


/////////////////////////////
const userSchema = new mongoose.Schema({
	email : String,
	password : String,
 });



const User = new mongoose.model('User',userSchema);

////////////////////////////////////


const signIn = (req,res) => {
	const {email, password } = req.body;

	User.findOne({ email })
		.then((user)=>{
			
			if (!user) {
				console.log(req.body)
				User.create(req.body);

				const token = jwt.sign(444,jwtSecret);
				res.json({"your new acc" :{ token:token}});
				
			}
			
			const isValid = (password == user.password);

			if (isValid) {
				const token = jwt.sign(user._id.toString(),jwtSecret);
				res.json({token:token})
			}else {
				res.status(401).json({message : "invalid password"})
			}
		}).catch(err => res.end(err.message));
}

module.exports = {
	signIn:signIn,
}