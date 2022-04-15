import { config } from 'dotenv'
config()

import express from 'express'
import bodyParser from 'body-parser'

// -------------------------------------------
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(bodyParser.json())

// Create a catch-all route for testing the installation.
app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Hello World!',
  })
)

app.listen(process.env.PORT, () => {
  console.log('App is now running at port ', process.env.PORT)
})
