
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: { type: Number, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: { type: Array, default: [] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.password;
    }
});

module.exports = mongoose.model('User', schema);