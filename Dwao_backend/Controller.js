import User from './Model.js';

const Controller = { 
    signIn : (req,res) => {
        console.log(req.body)
        User.find({Email : req.body.Email} , (error, user) => {
            if (error) {
                console.log("er")
                res.json({
                    message : "Something went wrong",
                    status : 404,
                })
            }
            console.log(user)
         if (user.length  == 0 ) {
             res.json({
                 message : "Incorrect Email",
                 status : 404
             })
         }
         else {

            if (user[0].Password  == req.body.Password) {
                console.log("hey")
                res.json({
                    message : "Login Successful",
                    status : 200,
                    user : user[0]
                })
            }
            else {
                res.json({
                    message : "Incorrect Password",
                    status : 404
                })
            }

         }   
         
        })
    },


   cuisine : (req, res) => {
       console.log(req.body)
       User.findByIdAndUpdate(req.body.userId, {cuisine : req.body.cuisine} , (err, user) => {
              res.json({
                  message : "Your cuisine is added"
              })
       })
   },

   getAllData : (req, res) => {
       User.find().then(( user) => {
           res.send(user)
       })
   }

}
export default Controller;