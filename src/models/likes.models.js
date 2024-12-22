import mongoose, { mongo } from "mongoose";


const likeSchema = new mongoose.Schema({
    userPost : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",
        required : [true ,"Post is Required"]
    },
    like : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : [true , "Like is Required"]
    } 
},{
    timestamps : true,
})



export default mongoose.model("Like" , likeSchema)