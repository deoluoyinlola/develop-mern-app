const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Rate = require('./models/rate')
const app = express()

dotenv.config()

//connect to mongodb
const dbURI = process.env.MONGO_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


const rateRouter = require('./routes/rate-router')
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', rateRouter)

app.listen(process.env.PORT || apiPort, () => console.log(`Server running on port ${apiPort}`))