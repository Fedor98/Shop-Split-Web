/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      id: {
          type: 'integer',
      },
      firstName: {
          type: 'string',
      },
      lastName:{
          type: 'string',
      },
      age: {
          type: 'integer',
      },
      address: {
          type: 'string',
      },
      zipcode: {
          type: 'integer',
      },
      city: {
          type: 'string',
      },
      country: {
          type: 'string',
      },
      phone: {
          type: 'string',
      },
      geoloc: {
          type: 'boolean',
          default: 'false',
      },
      lat: {
          type: 'integer',
      },
      long: {
          type: 'integer',
      },
      dateSubscript: {
          type: 'datetime',
      },
  }
};
