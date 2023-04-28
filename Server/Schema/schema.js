const mongoose = require("mongoose")

const FriendSchema = mongoose.Schema({
    title: {
        type: String, 
        required:true,
    },
    Desp:{
        type:String,
        required:true,
    },
    Date:{
        type:String,
        required:false,
    }
});

const Todo = mongoose.model('Items', FriendSchema);
module.exports = Todo;