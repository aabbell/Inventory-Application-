const pool = require("../db/pool")

exports.getAllCategories = async (req ,res) => {
    try{
        const result = await pool.query(`SELECT * FROM category`)
        res.render('categories',{categories:result.rows})
    }catch(err){
        res.status(500).send(err.message)
    }
    
}

exports.categoryCreateGet = async(req, res) => {
    res.render('createCategory',{
        title: "Create Category",
        category: {}
    })
}

exports.categoryCreatePost = async(req, res) => {
    const {name, description}  = req.body
    await pool.query(`INSERT INTO category (name, description) VALUES ($1, $2)`, [name, description])
    res.redirect('/categories')
}

exports.categoryDeletePost = async(req,res) => {
    try{
        const {id} = req.params
    await pool.query('DELETE FROM category WHERE id = $1',[id])
    }catch{
        console.error("Delete error" + err.message)
        res.status(500).send('Database delete error: '+ err.message)
    }
    
}
