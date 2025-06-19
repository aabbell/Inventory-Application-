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