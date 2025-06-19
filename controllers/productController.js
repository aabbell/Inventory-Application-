const pool = require('../db/pool')

exports.getAllProducts = async (req, res) => {
    try{
        const result = await pool.query(`SELECT p.*, 
         c.name AS category_name, 
         s.name AS size_name, 
         co.name AS color_name,
         sup.name AS supplier_name,
         w.location AS warehouse_location
        FROM product p
        JOIN category c ON p.category_id = c.id
        JOIN size s ON p.size_id = s.id
        JOIN color co ON p.color_id = co.id
        JOIN supplier sup ON p.supplier_id = sup.id
        JOIN warehouse w ON p.warehouse_id = w.id`)
        res.render('products', {products: result.rows})
    }catch (err){
        res.status(500).send(err.message)
    }
}

exports.productCreateGet = async(req, res) => {
    const categories = (await pool.query('SELECT * FROM category')).rows;
    const sizes = (await pool.query('SELECT * FROM size')).rows;
    const colors = (await pool.query('SELECT * FROM color')).rows;
    const suppliers = (await pool.query('SELECT * FROM supplier')).rows;
    const warehouses = (await pool.query('SELECT * FROM warehouse')).rows;
    res.render("createProduct", {
        title: "Create product",
        product: {},
        categories,
        sizes,
        colors,
        suppliers,
        warehouses,
    })
}

exports.productCreatePost = async(req, res) => {
    const {productName, productDescription, 
        categoryName ,sizeName ,colorName ,supplierName ,
        warehouseLocation} = req.body
    await pool.query(`INSERT INTO product (productName, productDescription, 
        categoryName, sizeName, colorName, supplierName, warehouseLocation, quantity)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,[productName,productDescription,categoryName,
    sizeName,colorName,supplierName,warehouseLocation])
    res.redirect('/')
    
}