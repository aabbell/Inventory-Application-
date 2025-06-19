const express = require('express')
const app = express()
const productRoutes = require("./routes/productRoutes")
const categoryRoutes = require("./routes/categoryRoutes")

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))


app.use('/', productRoutes)
app.use('/categories', categoryRoutes)

const PORT = 3000

app.listen (PORT, () => {
    console.log(`server is running on port ${PORT}`)
})