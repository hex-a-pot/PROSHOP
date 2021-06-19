import mongoose from 'mongoose'

const connectDb = async() => {
    
   await mongoose.connect(process.env.MONGO_URI,{
        useUnifiedTopology:true,
        useCreateIndex:true,
        useNewUrlParser:true
    }).then(()=>{
        console.log("DATABASE CONNECTED!!")
    }).catch(err =>{
        console.log(err.message)
    })
}

export default connectDb;