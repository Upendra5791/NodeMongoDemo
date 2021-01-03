import { addNewContact, deleteContact, getAllContacts, getContact, updateContact } from '../controllers/controller';

const routes = (app) => {
    app.route('/contact')
        .get((req,res, next) => {
            // middleware
            console.log(`Request from ${req.originalUrl}`);
            console.log(`Request type ${req.method}`);
            next();
        },getAllContacts)
        .post(addNewContact);

    app.route('/contact/:contactID')
        .get(getContact)
        .put(updateContact)
        .delete(deleteContact);
}

export default routes;