// const mongoose = require('mongoose');
// const schema = mongoose.Schema;


// const UserVerificationSchema = new schema({
//     userId: String,
//     uniqueString: String,
//     createdAt: Date,
//     expireAt: Date,
    
// });




// module.exports = mongoose.model('userVerification',UserVerificationSchema)



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserVerificationSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Assuming your User model is named 'User'
        required: true,
    },
    uniqueString: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    expireAt: {
        type: Date,
        default: Date.now + 600000, // Assuming 10 minutes expiration
    },
});

module.exports = mongoose.model('UserVerification', UserVerificationSchema);
