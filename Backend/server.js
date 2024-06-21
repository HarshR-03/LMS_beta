require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const workRoutes = require('./routes/workouts.js')
const userRoutes = require('./routes/user.js')
var cors = require('cors')

app.use(cors())
//middlewares
app.use(express.json()) //for post and patch reqs
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
})

//routes
app.use('/api/workouts',workRoutes)
app.use('/api/user',userRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("app listening at port 3000")
    })
})
.catch((error)=>{
    console.log(error)
})
