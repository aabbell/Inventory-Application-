const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")

router.get('/',productController.getAllProducts)
router.get('/newproduct',productController.productCreateGet)
router.post('/',productController.productCreatePost)

module.exports = router
