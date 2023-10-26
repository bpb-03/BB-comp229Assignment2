import Product from '../models/products.model.js'
	import extend from 'lodash/extend.js'
	import errorHandler from './error.controller.js'

	const create = async (req, res) => { 
const product = new Product(req.body) 
try {
await product.save()
return res.status(200).json({ 
})
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
	
	const userByID = async (req, res, next, id) => { 
try {
let product = await Product.findById(id) 
if (!product)
return res.status('400').json({ 
})
req.profile = product 
next()
} catch (err) {
return res.status('400').json({ 
}) 
}
}
	const read = (req, res) => {
	req.profile.hashed_password = undefined 
	req.profile.salt = undefined
	return res.json(req.profile) 
	}

	const list = async (req, res) => { 
		try {
		let products = await Product.find().select('name description price quantity category') 
		res.json(products)
		} catch (err) {
		return res.status(400).json({
		error: errorHandler.getErrorMessage(err) 
		})
		} 
		}


	const update = async (req, res) => { 
try {
let product = req.profile
product = extend(product, req.body) 
product.updated = Date.now() 
await product.save()
product.hashed_password = undefined 
product.salt = undefined
res.json(product) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}

const remove = async (req, res) => { 
try {
let product = req.profile
let deletedProduct = await product.deleteOne() 
deletedProduct.hashed_password = undefined 
deletedProduct.salt = undefined
res.json(deletedProduct) 
} catch (err) {
 return res.status(400).json({error: errorHandler.getErrorMessage(err) })
}
}
const deleteall = async (req, res) => { 
	try {
		let products = await Product.deleteMany() 
		res.json(products)
		} catch (err) {
		return res.status(400).json({
		error: errorHandler.getErrorMessage(err) 
		})
		}  
	}
const findProduct = async(req,res)=>{
	try{
		const searchWord = req.query.name;
		const products = await Product.find({name:{$regex: searchWord, $options: "i"},});
		return res.status(200).json(products);
		}catch(err){
			return res.status(500).json({error:"Error finding product"});
		}
	}



	export default { create, userByID, read, list, remove, update, deleteall, findProduct }
