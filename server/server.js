import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import dbConnection from './db/dbConnection.js'
dotenv.config()
const PORT = process.env.PORT || 5050
const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', async (req, res) => {
  res.send('Hello')
})

const starts = async () => {
  await dbConnection(process.env.DB_URI)
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)    
  })
}
starts()