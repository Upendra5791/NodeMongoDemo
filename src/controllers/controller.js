import mongoose from "mongoose";
import { ContactSchema } from '../models/dataModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res, next) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    })
}

export const getAllContacts = (req, res, next) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    })
}

export const getContact = (req, res, next) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    })
}

export const updateContact = (req, res, next) => {
    Contact.findOneAndUpdate(
        { _id: req.params.contactID }, req.body, { new: true, useFindAndModify: false }, (err, contact) => {
            if (err) {
                res.send(err);
            } else {
                res.json(contact);
            }
        })
}
export const deleteContact = (req, res, next) => {
    Contact.remove(
        { _id: req.params.contactID }, (err, contact) => {
            if (err) {
                res.send(err);
            } else {
                res.json({message: 'contact successfully deleted!'});
            }
        })
}