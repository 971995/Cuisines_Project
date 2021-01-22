
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Rajneesh:Rajneesh@123@cluster0.f7sy6.mongodb.net/Dwao?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true })
.then(function(){
    console.log("Database connected")
})  
.catch((err) => {
    console.log(err.message)
  
})