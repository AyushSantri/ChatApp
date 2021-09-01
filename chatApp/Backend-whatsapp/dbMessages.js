import mongoose from "mongoose"

const chatappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    recieved: Boolean
});

export default mongoose.model("messageContent" , chatappSchema)