import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const  ContactSchema =  new Schema({
    firstName: {
        type: String,
        required: 'Enter First Name'
    },
    lastName: {
        type: String,
        required: 'Enter Last Name'
    },
    email: {
        type: String,
        required: 'Enter Email'
    },
    company: {
        type: String,
        required: 'Enter Company'
    },
    phone: {
        type: Number,
        required: 'Enter Phone Number'
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})