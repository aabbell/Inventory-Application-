const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")

router.get('/',productController.getAllProducts)
router.get('/newproduct',productController.productCreateGet)
router.post('/newproduct',productController.productCreatePost)

module.exports = router
