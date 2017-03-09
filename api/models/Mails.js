/**
 * MailsController.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        id: {
            type: 'integer',
            autoIncrement: 'true',
            primaryKey: 'true',
        },
        senderId: {
            type: 'integer',
            required: 'true',
        },
        date: {
            type: 'datetime',
            required: 'true',
        },
        title: {
            type: 'string',
            required: 'true',
        },
        content: {
            type: 'text',
            required: 'true',
        },
        openDate: {
            type: 'datetime',
        },
        
    }
};



/*

module.exports = {

    attributes: {
        messageId: {
            type: 'integer',
            required: 'true',
        },
        receiverId: {
            type: 'integer',
            required: 'true',
        },
    }
};

*/