const express = require("express")
const router = express.Router()
const categoryController = require("../controllers/categoryController")

router.get('/',categoryController.getAllCategories)
router.get('/newcategories',categoryController.categoryCreateGet)
router.post('/newcategories',categoryController.categoryCreatePost)
router.post('/:id/delete',categoryController.categoryDeletePost)

module.exports = router




