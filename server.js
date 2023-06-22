require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require('./src/config/corsOptions')
const mongoose = require('mongoose')
const connectDB = require('./src/config/dbConn')
const PORT = process.env.PORT || 8000

// Connect to MongoDB
connectDB()

// Cross Origin Resource Sharing
app.use(cors(corsOptions))

// built-in middleware for json
app.use(express.json())


// routes
app.get('/', (req, res) => {
	res.send('Hello World')
})


// catch all
// app.all('*', (req, res) => {
// 	res.status(404)
// 	if (req.accepts('html')) {
// 		res.sendFile(path.join(__dirname, 'views/404.html'))
// 	} else if (req.accepts('json')) {
// 		res.json({ error: '404 Not Found' })
// 	} else {
// 		res.type('txt').send('404 Not Found')
// 	}
// })

mongoose.connection.once('open', () => {
	console.log('Connected to MongoDB')
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
