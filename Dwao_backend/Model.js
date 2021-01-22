import mongoose from 'mongoose';

const schema = mongoose.Schema

const UserSchema = new schema ({

    Email : {
        type : String
    },
     
    Password :{
        type : String
    },
    
    cuisine : {
        type : String
    }   
})
        const User = mongoose.model('User', UserSchema)      

export default User