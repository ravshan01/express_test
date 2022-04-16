import { config } from 'dotenv'
config()

import express from 'express'
// import bodyParser from 'body-parser'
import { useRouter } from './hooks'

// -------------------------------------------
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

useRouter(app)

app.listen(process.env.PORT, () => {
  console.log('App is now running at port ', process.env.PORT)
})
