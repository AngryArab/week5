import contactModel from '../views/content/models/contacts.js';

import { UserDisplayName } from '../utils/index.js';

export function DisplayContactsList(req, res, next){
    contactModel.find(function(err, contactsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Contact List', page: 'contact-list', contacts: contactsCollection, displayName: UserDisplayName(req)});
    })
}





export function DisplayContactEditPage(req, res, next){
    let id = req.params.id;

    contactModel.findById(id, (err, movie) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Contact', page: 'contact/edit', contact: contact, displayName: UserDisplayName(req) });
    });    
}

export function ProcessContactsEditPage(req, res, next){

    let id = req.params.id;
    
    let newContact = contactModel({
        _id: req.body.id,
        contactname: req.body.contactname,
        contactnumber: req.body.contactnumber,
        contactemail: req.body.contactemail
    });

    contactModel.updateOne({_id: id }, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

export function ProcessContactDelete(req, res, next){
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list');
    })
}