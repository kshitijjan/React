const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:mongodb12@cluster0.9hqfpfp.mongodb.net/paytm')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        trim: true,
        minLength: 3
    },
    lastName: {
        type: String,
        require: true, 
        trim: true,
        minLength: 3
    },
    username: {
        type: String,
        require: true,
        unique: true,
        minLength: 3
    },
    password: {  
        type: String,
        require: true,
        minLength: 6,
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,  //Ref to User table
        ref: 'User',
        required: true
    },
    balance: {
        type: Number, 
        required: true
    }
})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
}