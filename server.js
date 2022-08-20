const express = require('express')
//const passwordGenerator = require('./controllers/passwordGenerator')
const app = express()
const connectDB = require('./config/database')
//const pomoTimer = require('./controllers/pomoTimer')
const pomoRoutes = require('./routes/pomoRoutes')
const homeRoutes = require('./routes/home')
const passwordGenerator = require('./routes/passwordGenerator')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
app.use('/passwordGenerator', passwordGenerator)
app.use('/pomoTimer', pomoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    