/**
 * HomeController
 *
 * @description :: Server-side logic for managing index connection
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//Affiche soit la page d'accueil soit la page de connexion
	homepage: function(req, res){
        if (!req.session.user)
            res.view('index');
        else {
            res.redirect('/current_user');
        }
    }
};

