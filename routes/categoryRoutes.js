const express = require("express")
const router = express.Router()
const categoryController = require("../controllers/categoryController")

router.get('/categories',categoryController.getAllCategories)
router.get('/newcategories',categoryController.categoryCreateGet)
router.post('/newcategories',categoryController.categoryCreatePost)


module.exports = router




