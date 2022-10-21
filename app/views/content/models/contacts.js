import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactsSchema = new Schema({
    contactname: String, 
    contactnumber: String, 
    contactemail: String
}, {
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactsSchema);