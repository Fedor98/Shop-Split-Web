/**
 * LoginController
 *
 * @description :: Server-side logic for managing Logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//Controller pour l'inscription
	signUp: function(req, res){
        var email = req.param('email');
        var password = req.param('password');
        
        if (email && password) {
            Login.find({email: email}).exec(function(err, results) {
                if (err)
                    return res.serverError(500, {error: "Bdd erreur"});
                else if (results.length != 0)
                    res.send(404, {error: "L'email est déjà utilisé"});
                else {
                    Login.create({email: email, password: password}, function(err, created){
                        if (!err){
                            UserServices.createNewUser({id: created.id});
                            console.log("login créé: " + created.email);
                            req.session.user = created;
                            res.send(200, created);
                        }
                        else {
                            res.send(500, {error: "DB Error"});
                        }
                    });
                }
            });
        }
    },
    
    //Controller pour l'identification d'un utilisateur
    signIn: function(req, res) {
        var email = req.param('email');
        var password = req.param('password');
        
        if (email && password) {
            Login.findOne({email: email, password: password}).exec(function(err, result) {
                if (err)
                    return res.serverError(500, {error: "Bdd erreur"});
                else if (!result)
                    res.send(404, {error: "Votre profil n'existe pas..."});
                else {
                    User.findOne({id: result.id}).exec(function(err, userResult) {
                        req.session.user = userResult;
                        req.session.email = result.email;

                        res.send(200, {user: req.session.user});
                    });
                }
            });
        }
    },
    
    //Controller pour la déconnection
    signOut: function(req, res) {
      req.session.destroy(function(err){
          res.send(200);
      })  
    }
    

};

