import mongoose from "mongoose";


const userPost = new mongoose.Schema({
    userPoster  : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users",
        required : true
    },
    content : {
        type : String,
        required : true
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

export default ("Post" , userPost)