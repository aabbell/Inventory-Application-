const pool = require("../db/pool")

exports.getAllCategories = async (req ,res) => {
    try{
        const result = await pool.query(`SELECT * FROM category`)
        res.render('categories',{categories:result.rows})
    }catch(err){
        res.status(500).send(err.message)
    }
    
}