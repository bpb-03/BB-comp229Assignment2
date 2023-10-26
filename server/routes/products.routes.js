import express from 'express'
	import productCtrl from '../controllers/products.controller.js' 
	
	const router = express.Router()
	router.route('/api/products') 
	.get(productCtrl.list)
	.post(productCtrl.create)
	.delete(productCtrl.deleteall)

	router.route('/api/products/:products') 
	.get(productCtrl.read)
	.put(productCtrl.update) 
	.delete(productCtrl.remove)

	router.route('/api/products/find')
	.get(productCtrl.findProduct)

router.param('products', productCtrl.userByID)
router.route('/api/products').post(productCtrl.create) 
router.route('/api/products').get(productCtrl.list)
router.param('products', productCtrl.userByID)
router.route('/api/products/:userId').get(productCtrl.read)
router.route('/api/products/:userId').put(productCtrl.update)
router.route('/api/products/:userId').delete(productCtrl.remove)

/*
router.route('/api/Categories') 
router.route('/api/Categories/:category') 

router.param('category', productCtrl.userByID)
router.route('/api/Categories').post(productCtrl.create) 
router.route('/api/Categories').get(productCtrl.list)
router.param('category', productCtrl.userByID)
router.route('/api/Categories/:category').get(productCtrl.read)
router.route('/api/Categories/:category').put(productCtrl.update)
router.route('/api/Categories/:category').delete(productCtrl.remove)
*/
	export default router
