/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

    '/': {
        controller: 'HomeController',
        action: 'homepage',
    },
    
    '/sign_up': {
        view: 'sign_up'
    },
    
    '/create_user': {
        controller: 'LoginController',
        action: 'signUp',
    },
    
    '/current_user': {
        controller: 'UserController',
        action: 'displayUser',
    },
    
    '/user/:idUser': {
        controller: 'UserController',
        action: 'displayProfPage',
    },
    
    '/signIn': {
        controller: 'LoginController',
        action: 'signIn',
    },
    
    '/logout': {
        controller: 'LoginController',
        action: 'signOut',
    },
    
    '/modify_profile': {
        controller: 'UserController',
        action: 'editProfile',
    },
    
    '/save_profile': {
        controller: 'UserController',
        action: 'saveProfile',
    },
    
    '/edit': {
        controller: 'UserController',
        action: 'editProfile',
    },
    
    //-----------------------------------------------------------------------
    // Messagerie
    
    '/messagerie': {
        controller: 'MailsController',
        action: 'mailbox',
    },
    
    '/messagerie/envoye': {
        controller: 'MailsController',
        action: 'sendBox',
    },
    
    '/messagerie/rediger/:to': {
        controller: 'MailsController',
        action: 'new_message',
    },
    
    '/messagerie/envoie': {
        controller: 'MailsController',
        action: 'sendMessage',
    },
    
    '/messagerie/lire/:id': {
        controller: 'MailsController',
        action: 'readMessage',
    },
    
    '/messagerie/repondre/:id': {
        controller: 'MailsController',
        action: 'answerMessage',
    },
    
    
    //-----------------------------------------------------------------------
    // Recherche
    
    '/recherche': {
        controller: 'SearchController',
        action: 'displaySearchMember',
    },
    
    '/recherche/rechercheMembres' : {
        controller: 'SearchController',
        action: 'processSearchMember',
    },

    '/recherche/resultatsMembres': {
        controller: 'SearchController',
        action: 'processSearchMember',
    },
    
    '/recherche/annonce': {
        controller: 'SearchController',
        action: 'displaySearchAd',
    },
    
    '/recherche/resultatsAnnonces': {
        controller: 'SearchController',
        action: 'processSearchAds',
    },

    //-----------------------------------------------------------------------
    // Annonces
    
    '/annonce/creer': {
        controller: 'AnnoncesController',
        action: 'createAd',
    },
    
    '/annonce/valider': {
        controller: 'AnnoncesController',
        action: 'saveAd',
    },
    
    '/annonce': {
        controller: 'AnnoncesController',
        action: 'displayAds',
    },
    
    '/annonce/afficher_annonce/:id': {
        controller: 'AnnoncesController',
        action: 'showAd',
    },

    
    //-----------------------------------------------------------------------
    
    '/database': {
        controller: 'DebugController',
        action: 'displayDatabase',
    },
    
    

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
