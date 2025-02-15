const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwtToken = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type: String,
            require: true,
            minlength: [3, 'First name must be at leat 3 characters long']
        },
        lastname:{
            type: String,
            minlength: [3, 'last name must be at leat 3 characters long']
        }
    },
    email:{
        type: String,
        require: true,
        unique: true,
        minlength: [ 5, 'Email must be at least 5 characters long' ],
    },
    password:{
        type: String,
        require: true,
        select: false,
    },
    socketId:{
        type: String
    }
})

userSchema.methods.generateAuthenticationToken = function(){
    const token = jwtToken.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '36h'});
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;