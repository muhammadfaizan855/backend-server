import mongoose from "mongoose";



const shareSchema = new mongoose.Schema({
    post : {
        types : mongoose.Schema.Types.ObjectId,
        ref : "Post",
        required : [true , "Post is required"]
    },
    share : {
       types : mongoose.Schema.Types.ObjectId,
       ref : "User",
       required : [true , "Share is required"]
    }

},{
    timestamps : true
})


export default mongoose.model("Share" , shareSchema)