import express from 'express'
import Router from './Routes/routes.js'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import {pageNotFound,errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()

const app = express()

connectDb()
// ALL ROUTES
app.use('/', Router)

app.use(pageNotFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Backend Server is listening at ${PORT}`))
