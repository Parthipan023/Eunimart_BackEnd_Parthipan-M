import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        FirstName : {
            type: String,require:true
        },
        MiddleName: {
            type: String,

            require:true
        },
        LastName : {
            type:String,
            require: true
        },
        gender: {
            type : String
        },
        age : {
            type : String
        },
        userMail : {
            type :String,
            require:true
        },
        Password : {
            type : String,
            require:true
        }
    }
)

 const SignupModel = new mongoose.model('signupData',userSchema);

 export default SignupModel;