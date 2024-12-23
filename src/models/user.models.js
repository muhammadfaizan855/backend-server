import mongoose from "mongoose";
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : [true , "Username is required"]
    },
    email : {
        type : String,
        required : [true , "Email is required"],
        unique : true ,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address']
    },
    password : {
        type : String,
        required : [true , "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
    },
    profilePic: {
        type: String, 
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"
    },
    LikePost : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like" 
    },
    Comment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    },
    SharesPost : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Share"
    }

},
{
    timestamps : true
})


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
  
    this.password = await bcrypt.hash(this.password, 10);
    next();
});




export default mongoose.model("User" , userSchema)