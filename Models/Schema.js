const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        
    },
    otp:{
        type:String,
        require:true
    },

    // verified:true
    // }


});

const User = model('User', userSchema);

module.exports = User;
