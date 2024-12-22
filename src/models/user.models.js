import mongoose from "mongoose";


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
        default: 'https://path_to_default_image.jpg',
    },
    userPost : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"
    },
    userLikePost : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like" 
    },
    userComment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    },
    userSharesPost : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Share"
    }

},{
    timestamps : true
})





export default mongoose.model("Users" , userSchema)