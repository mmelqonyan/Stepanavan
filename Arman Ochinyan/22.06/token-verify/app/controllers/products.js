var mongoose = require("mongoose");
var path = require("path");

const productSchema = new mongoose.Schema({
	id : Number,
	name:String,
	price : mongoose.Schema.Types.Decimal128,
});

const Product = new mongoose.model('Product',productSchema);
const get1 = (req,res) => {
	
	res.sendFile(path.join(__dirname + '/../../post.html'));
	
};

const getAll = (req,res) => {
	Product.find()
	.then(products => res.json(products))
	.catch((err)=> { res.status(500).json(err) } );
};

const create = (req,res) => {
	
	Product.create(req.body)
	.then(createdproducts => { res.json(createdproducts ) } )
	.catch((err) => res.status(500).json(err));
};

const update = (req,res)=> {
	Product.findOneAndUpdate({id : req.params.id},req.body)
	.then(product => res.json(product))
	.catch((err)=> res.status(500).json(err));
};

const remove = (req,res)=> {
	Product.deleteOne({id : req.params.id})
	.then(() => res.json({success : true}))
	.catch((err)=> res.status(500).json(err));
};

module.exports = {
	get1,
	getAll,
	create,
	update,
	remove
}