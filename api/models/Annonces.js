/**
 * Annonces.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        id: {
            type: 'integer',
            autoIncrement: 'true',
        },
        userId: {
            type: 'integer',
            required: 'true',
        },
        title: {
            type: 'string',
            required: 'true',
        },
        descr: {
            type: 'string',
            required: 'true',
        },
        location: {
            type: 'string',
        },
        startDate: {
            type: 'datetime',
        },
        endDate: {
            type: 'datetime',
        },
        creationDate: {
            type: 'datetime',
        },
        countView: {
            type: 'integer',
        },
    }
};