const express = require("express")
const router = express.Router()
const categoryController = require("../controllers/categoryController")

router.get('/',categoryController.getAllCategories)
router.get('/newcategory',categoryController.categoryCreateGet)
router.post('/newcategory',categoryController.categoryCreatePost)


module.exports = router




