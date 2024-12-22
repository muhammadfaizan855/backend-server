import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String
    },
    poster  : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    LikePost : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like" 
    },
    comment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    },
    SharesPost : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Share"
    }
    
},{
    timestamps : true
})

export default ("Post" , postSchema)