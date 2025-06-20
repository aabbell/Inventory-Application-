
const pool = require('../db/pool')

exports.getAllProducts = async (req, res) => {
    try{
        const result = await pool.query(`SELECT product.*, category.name AS category_name
        FROM product 
        JOIN category ON product.category_id = category.id`)
        res.render('products', {products: result.rows})
    }catch (err){
        console.error('Insert error:', err.message)
        res.status(500).send(err.message)
    }
}

exports.productCreateGet = async(req, res) => {
    try{
    const product = (await pool.query('SELECT * FROM product')).rows
    const categories = (await pool.query('SELECT * FROM category')).rows
    res.render("createProduct", {
        title: "Create product",
        product,
        categories,
    })
    }catch(err){
        console.error('Insert error:', err.message)
        res.status(500).send(err.message)
    }
    
}

exports.productCreatePost = async (req, res) => {
    try{
        console.log('Recevied form data: ', req.body)
        const { name, description, quantity,price,category_id} =  req.body
        
        await pool.query(`INSERT INTO product (
                name, 
                description, 
                quantity,
                price,  
                category_id
            ) VALUES ($1, $2, $3, $4, $5)`,[
                name, 
                description, 
                parseInt(quantity),
                parseInt(price),
                parseInt(category_id)]) 
                res.redirect('/')
    }catch(err){
        console.error('Insert error:', err.message)
        res.err(500).send('Database insert error: ' + err.message)
    }
        }